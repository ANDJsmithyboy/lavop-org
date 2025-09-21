import { useState } from 'react';
import { X, Mail, UserPlus, Shield, Edit, Eye, Trash2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { emailService } from '../utils/emailService';
import { notificationService } from '../utils/notifications';

interface Invitation {
  id: string;
  email: string;
  role: string;
  permissions: string[];
  status: 'pending' | 'accepted' | 'expired';
  invitedBy: string;
  invitedAt: string;
  expiresAt: string;
}

interface UserInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (invitation: Omit<Invitation, 'id' | 'status' | 'invitedAt' | 'expiresAt'>) => void;
}

const UserInvitationModal = ({ isOpen, onClose, onInvite }: UserInvitationModalProps) => {
  const [formData, setFormData] = useState({
    email: '',
    role: 'Editor',
    permissions: ['read', 'write_articles']
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const roles = [
    {
      value: 'Editor',
      label: 'Éditeur',
      description: 'Peut créer et modifier des articles',
      permissions: ['read', 'write_articles'],
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      value: 'Moderator',
      label: 'Modérateur',
      description: 'Peut gérer le contenu et les commentaires',
      permissions: ['read', 'write_articles', 'moderate'],
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      value: 'Manager',
      label: 'Gestionnaire',
      description: 'Peut gérer les utilisateurs et le contenu',
      permissions: ['read', 'write_articles', 'moderate', 'manage_users'],
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      value: 'Admin',
      label: 'Administrateur',
      description: 'Accès complet au système',
      permissions: ['read', 'write', 'delete', 'admin', 'moderate', 'manage_users'],
      color: 'bg-red-50 text-red-700 border-red-200'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validation
      if (!formData.email || !formData.email.includes('@')) {
        throw new Error('Veuillez entrer une adresse email valide');
      }

      // Créer l'invitation
      const invitation = {
        email: formData.email,
        role: formData.role,
        permissions: formData.permissions,
        invitedBy: 'ANDJ Daniel Jonathan'
      };

      // Envoyer l'invitation par email
      await sendInvitationEmail(invitation);

      // Ajouter à la base de données locale
      onInvite(invitation);

      // Notification de succès
      await notificationService.notifySystem(
        `Invitation envoyée à ${formData.email} en tant que ${formData.role}`,
        'info'
      );

      setSuccess(`Invitation envoyée avec succès à ${formData.email}`);
      
      // Reset form
      setFormData({
        email: '',
        role: 'Editor',
        permissions: ['read', 'write_articles']
      });

      // Fermer après 2 secondes
      setTimeout(() => {
        onClose();
        setSuccess('');
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi de l\'invitation');
    } finally {
      setIsLoading(false);
    }
  };

  const sendInvitationEmail = async (invitation: any) => {
    const emailData = {
      to: invitation.email,
      subject: '🎉 Invitation à rejoindre l\'équipe VOP Admin',
      from: 'noreply@lavop.org',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #003399, #00B0F0); color: white; padding: 30px; text-align: center;">
            <h1>🎉 Invitation VOP Admin</h1>
            <p>Vous êtes invité à rejoindre l'équipe administrative de La VOP</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2>Détails de votre invitation :</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Rôle :</strong> ${invitation.role}</p>
              <p><strong>Permissions :</strong> ${invitation.permissions.join(', ')}</p>
              <p><strong>Invité par :</strong> ${invitation.invitedBy}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="http://localhost:5174/login" 
                 style="background: #003399; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Accepter l'invitation
              </a>
            </div>
            
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #856404;">
                <strong>Note :</strong> Cette invitation expire dans 7 jours. 
                Contactez l'administrateur si vous avez des questions.
              </p>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #6c757d;">
            <p>La VOP - Christ pour la Veuve, l'Orphelin, le Pauvre</p>
            <p>Email: contact@lavop.org | Tél: +241 74 79 15 30</p>
          </div>
        </div>
      `
    };

    await emailService.sendEmail(emailData);
  };

  const handleRoleChange = (roleValue: string) => {
    const role = roles.find(r => r.value === roleValue);
    if (role) {
      setFormData({
        ...formData,
        role: roleValue,
        permissions: role.permissions
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <UserPlus className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Inviter un Utilisateur</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="exemple@email.com"
                required
              />
            </div>
          </div>

          {/* Rôle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Rôle et Permissions
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => (
                <div
                  key={role.value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.role === role.value
                      ? role.color + ' border-current'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleRoleChange(role.value)}
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5" />
                    <div>
                      <h3 className="font-medium">{role.label}</h3>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      Permissions: {role.permissions.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Permissions détaillées */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Permissions Détaillées
            </label>
            <div className="grid grid-cols-2 gap-2">
              {formData.permissions.map((permission) => (
                <div key={permission} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">{permission}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Messages d'erreur/succès */}
          {error && (
            <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-700">{success}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Envoi...</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Envoyer l'Invitation</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInvitationModal;
