import { useState, useRef } from 'react';
import { X, Upload, Camera, FileImage, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomOrderModal = ({ isOpen, onClose }: CustomOrderModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    chestMeasurement: '',
    waistMeasurement: '',
    hipMeasurement: '',
    shoulderWidth: '',
    armLength: '',
    height: '',
    specificModel: '',
    additionalNotes: '',
    preferredColors: ''
  });

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0) {
      setUploadedImages(prev => [...prev, ...imageFiles]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validation
      if (!formData.fullName || !formData.email || !formData.chestMeasurement) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      }

      // Préparer le message WhatsApp
      const measurements = `
📏 MESURES:
• Poitrine: ${formData.chestMeasurement}cm
• Taille: ${formData.waistMeasurement}cm
• Hanches: ${formData.hipMeasurement}cm
• Largeur épaules: ${formData.shoulderWidth}cm
• Longueur bras: ${formData.armLength}cm
• Taille: ${formData.height}cm`;

      const additionalInfo = `
📝 INFORMATIONS SUPPLÉMENTAIRES:
• Modèle spécifique: ${formData.specificModel || 'Non spécifié'}
• Couleurs préférées: ${formData.preferredColors || 'Non spécifié'}
• Notes: ${formData.additionalNotes || 'Aucune'}`;

      const whatsappMessage = `🛍️ COMMANDE SUR MESURE - TENUE HOMME DE DIEU PREMIUM

👤 CLIENT:
• Nom: ${formData.fullName}
• Email: ${formData.email}
• Téléphone: ${formData.phone}

${measurements}
${additionalInfo}

📧 Email professionnel: contact@lavop.org
📱 WhatsApp: +241 74 79 15 30

Merci pour votre commande ! Nous vous contacterons rapidement.`;

      // Ouvrir WhatsApp avec le message
      const whatsappUrl = `https://wa.me/24174791530?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      
      // Reset form après 3 secondes
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          chestMeasurement: '',
          waistMeasurement: '',
          hipMeasurement: '',
          shoulderWidth: '',
          armLength: '',
          height: '',
          specificModel: '',
          additionalNotes: '',
          preferredColors: ''
        });
        setUploadedImages([]);
        setSubmitStatus('idle');
        onClose();
      }, 3000);

    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Erreur lors de l\'envoi de la commande');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#003399] rounded-full flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Commande sur Mesure</h2>
              <p className="text-sm text-gray-600">Tenue Homme de DIEU Premium</p>
            </div>
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
          {/* Informations de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                placeholder="Votre nom complet"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                placeholder="+241 74 79 15 30"
              />
            </div>
          </div>

          {/* Mesures */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mesures (en cm)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour de poitrine *
                </label>
                <input
                  type="number"
                  name="chestMeasurement"
                  value={formData.chestMeasurement}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="100"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour de taille *
                </label>
                <input
                  type="number"
                  name="waistMeasurement"
                  value={formData.waistMeasurement}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="85"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour de hanches
                </label>
                <input
                  type="number"
                  name="hipMeasurement"
                  value={formData.hipMeasurement}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="95"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Largeur d'épaules *
                </label>
                <input
                  type="number"
                  name="shoulderWidth"
                  value={formData.shoulderWidth}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="45"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Longueur de bras *
                </label>
                <input
                  type="number"
                  name="armLength"
                  value={formData.armLength}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taille *
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="175"
                />
              </div>
            </div>
          </div>

          {/* Modèle spécifique */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Modèle spécifique (si vous en avez un)
            </label>
            <textarea
              name="specificModel"
              value={formData.specificModel}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
              rows={3}
              placeholder="Décrivez le modèle ou envoyez une photo par email"
            />
          </div>

          {/* Upload d'images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photos du modèle (optionnel)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center space-x-2 text-[#00B0F0] hover:text-[#003399] transition-colors mx-auto"
              >
                <Upload className="w-5 h-5" />
                <span>Ajouter des photos</span>
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Formats acceptés : JPG, PNG, GIF (max 5MB par image)
              </p>
            </div>

            {/* Images uploadées */}
            {uploadedImages.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {uploadedImages.map((file, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Modèle ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notes supplémentaires */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes supplémentaires
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
              rows={3}
              placeholder="Couleurs préférées, détails particuliers, etc."
            />
          </div>

          {/* Messages de statut */}
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-700">
                Commande envoyée avec succès ! Nous vous contacterons sous 24h.
              </span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{errorMessage}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-2 bg-[#00B0F0] text-white px-6 py-2 rounded-lg hover:bg-[#003399] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Envoi...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Envoyer la commande</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomOrderModal;