import { useState, useEffect } from 'react';
import { 
  Plus, Edit, Trash2, Save, X, Eye, FileText, Image, Video, Users, Settings, 
  BarChart3, TrendingUp, Download, Upload, Search,
  Globe, DollarSign, Heart, Database, MessageCircle, LogOut, UserPlus, Bell
} from 'lucide-react';
import { useDashboard } from '../hooks/useDatabase';
import { getCurrentUser, logout, canManageArticles, canDelete, hasPermission } from '../utils/auth';
import UserInvitationModal from '../components/UserInvitationModal';
import VideoManager from '../components/VideoManager';
import NotificationCenter from '../components/NotificationCenter';
import MobileSimulator from '../components/MobileSimulator';
import MediumEditor from '../components/MediumEditor';
import AIAssistant from '../components/AIAssistant';
import SiteBuilder from '../components/SiteBuilder';
import AdvancedEditor from '../components/AdvancedEditor';
import OptimizedFounderPhoto from '../components/OptimizedFounderPhoto';

const contactReasons = [
  { value: 'general', label: 'Information générale' },
  { value: 'donation', label: 'Don ou partenariat' },
  { value: 'volunteer', label: 'Bénévolat et engagement' },
  { value: 'prayer', label: 'Demande de prière' },
  { value: 'testimony', label: 'Partager un témoignage' },
  { value: 'ministry', label: 'Rejoindre un ministère' }
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [editingArticle, setEditingArticle] = useState<any>(null);
  const [currentUser] = useState(getCurrentUser());
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showMobileSimulator, setShowMobileSimulator] = useState(false);
  const [showSiteBuilder, setShowSiteBuilder] = useState(false);
  const [articleContent, setArticleContent] = useState('');
  const [isPWAInstalled, setIsPWAInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPDFManager, setShowPDFManager] = useState(false);
  const [uploadedPDFs, setUploadedPDFs] = useState([
    { name: 'rapport-annuel-2023.pdf', url: '/rapport-annuel-2023.pdf', size: '2.1 MB' },
    { name: 'rapport-financier-2023.pdf', url: '/rapport-financier-2023.pdf', size: '1.8 MB' },
    { name: 'politique-confidentialite.pdf', url: '/politique-confidentialite.pdf', size: '0.5 MB' },
    { name: 'conditions-don.pdf', url: '/conditions-don.pdf', size: '0.3 MB' }
  ]);
  
  // Utilisation des hooks de base de données
  const {
    articles,
    users,
    analytics,
    notifications
  } = useDashboard();

  // PWA Installation
  useEffect(() => {
    // Enregistrer le service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/admin-sw.js')
        .then((registration) => {
          console.log('Service Worker enregistré:', registration);
        })
        .catch((error) => {
          console.log('Erreur Service Worker:', error);
        });
    }

    // Gérer l'installation PWA
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Vérifier si l'app est déjà installée
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsPWAInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Installer PWA
  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsPWAInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  // Demander les notifications
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        // Envoyer une notification de test
        new Notification('VOP Admin', {
          body: 'Notifications activées avec succès !',
          icon: '/logo-vop.jpg',
          badge: '/logo-vop.jpg',
          vibrate: [100, 50, 100],
          sound: '/sounds/notification.mp3' // Son de notification
        });
        
        // Afficher un message de succès
        alert('✅ Notifications activées ! Vous recevrez des alertes pour les nouvelles activités.');
      } else if (permission === 'denied') {
        alert('❌ Notifications refusées. Vous pouvez les activer dans les paramètres de votre navigateur.');
      }
    } else {
      alert('❌ Votre navigateur ne supporte pas les notifications.');
    }
  };

  // Upload PDF
  const handlePDFUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const pdfData = e.target?.result;
        if (pdfData) {
          // Simuler l'upload (en production, envoyer vers un serveur)
          const newPDF = {
            name: file.name,
            url: URL.createObjectURL(file),
            size: `${(file.size / 1024 / 1024).toFixed(1)} MB`
          };
          setUploadedPDFs(prev => [...prev, newPDF]);
          alert(`✅ PDF "${file.name}" uploadé avec succès !`);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('❌ Veuillez sélectionner un fichier PDF valide.');
    }
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  // États locaux pour les formulaires
  const [newArticle, setNewArticle] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'ANDJ Daniel Jonathan',
    category: 'Actions Locales',
    image: '',
    published: false,
    featured: false
  });

  const handleSaveArticle = () => {
    if (editingArticle) {
      // Mettre à jour l'article existant
      articles.updateArticle((editingArticle as any).id, newArticle);
    } else {
      // Créer un nouvel article
      articles.addArticle({
        ...newArticle,
        views: 0,
        likes: 0,
        comments: 0,
        date: new Date().toISOString().split('T')[0]
      });
    }
    
    setNewArticle({
      title: '',
      excerpt: '',
      content: '',
      author: 'ANDJ Daniel Jonathan',
      category: 'Actions Locales',
      image: '',
      published: false,
      featured: false
    });
    setIsEditing(false);
    setEditingArticle(null);
  };

  const handleEditArticle = (article: any) => {
    setEditingArticle(article);
    setNewArticle(article);
    setIsEditing(true);
  };

  const handleDeleteArticle = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      articles.deleteArticle(id);
    }
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3, permission: 'read' },
    { id: 'articles', name: 'Articles', icon: FileText, permission: 'write_articles' },
    { id: 'contacts', name: 'Contacts', icon: MessageCircle, permission: 'read' },
    { id: 'media', name: 'Médias', icon: Image, permission: 'read' },
    { id: 'videos', name: 'Vidéos', icon: Video, permission: 'read' },
    { id: 'users', name: 'Utilisateurs', icon: Users, permission: 'manage_users' },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp, permission: 'read' },
    { id: 'pdf-manager', name: 'PDF Manager', icon: FileText, permission: 'admin' },
    { id: 'site-builder', name: 'Constructeur', icon: Globe, permission: 'admin' },
    { id: 'settings', name: 'Paramètres', icon: Settings, permission: 'admin' }
  ];

  // Filtrer les onglets selon les permissions
  const filteredTabs = tabs.filter(tab => 
    !tab.permission || hasPermission(currentUser, tab.permission)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-[#003399]">Dashboard Admin VOP</h1>
              <p className="text-gray-600">Gérez le contenu de votre site</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Informations utilisateur */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{currentUser?.name}</p>
                  <p className="text-xs text-gray-500">{currentUser?.role}</p>
                </div>
                {currentUser?.avatar && (
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
              </div>
              
              {/* Boutons d'action */}
              <div className="flex items-center space-x-2">
                {/* Notifications */}
                <NotificationCenter />
                
                {/* Mobile Simulator Toggle */}
                <button
                  onClick={() => setShowMobileSimulator(!showMobileSimulator)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Mode Mobile"
                >
                  <Globe className="w-5 h-5" />
                </button>
                
                {/* PWA Install Button */}
                {deferredPrompt && !isPWAInstalled && (
                  <button
                    onClick={installPWA}
                    className="p-2 text-[#FFD700] hover:text-[#FFA500] hover:bg-yellow-100 rounded-lg transition-colors"
                    title="Installer l'App"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                )}
                
                {/* Notifications Button */}
                <button
                  onClick={requestNotificationPermission}
                  className="p-2 text-[#CC3366] hover:text-[#AA2255] hover:bg-red-100 rounded-lg transition-colors"
                  title="Activer les Notifications"
                >
                  <Bell className="w-5 h-5" />
                </button>
                
                {/* Test Notification Button */}
                <button
                  onClick={() => {
                    if ('Notification' in window && Notification.permission === 'granted') {
                      new Notification('VOP Admin - Test', {
                        body: 'Ceci est un test de notification !',
                        icon: '/logo-vop.jpg',
                        badge: '/logo-vop.jpg',
                        vibrate: [100, 50, 100]
                      });
                    } else {
                      alert('Veuillez d\'abord activer les notifications !');
                    }
                  }}
                  className="p-2 text-[#00B0F0] hover:text-[#003399] hover:bg-blue-100 rounded-lg transition-colors"
                  title="Tester les Notifications"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                
                <a 
                  href="/" 
                  className="flex items-center space-x-2 text-[#00B0F0] hover:text-[#003399] transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  <span>Voir le site</span>
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Déconnexion</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Navigation */}
          <div className="lg:hidden mb-6">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="text-lg font-semibold text-[#003399] mb-4">Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-lg text-center transition-colors ${
                        activeTab === tab.id
                          ? 'bg-[#00B0F0] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="text-xs font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#00B0F0] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Bienvenue dans le Dashboard VOP</h2>
                  <p className="text-white/90 text-lg">Gérez votre site et suivez l'impact de vos actions</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-gray-600 text-xs lg:text-sm">Vues Total</p>
                        <p className="text-2xl lg:text-3xl font-bold text-[#003399]">{analytics.analytics.totalViews.toLocaleString()}</p>
                        <p className="text-green-600 text-xs lg:text-sm flex items-center mt-1">
                          <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                          +{analytics.analytics.monthlyGrowth}%
                        </p>
                      </div>
                      <div className="bg-[#00B0F0]/10 p-2 lg:p-3 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mt-2 lg:mt-0">
                        <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-[#00B0F0]" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-gray-600 text-xs lg:text-sm">Articles</p>
                        <p className="text-2xl lg:text-3xl font-bold text-[#003399]">{analytics.analytics.totalArticles}</p>
                        <p className="text-gray-500 text-xs lg:text-sm">Publiés</p>
                      </div>
                      <div className="bg-green-100 p-2 lg:p-3 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mt-2 lg:mt-0">
                        <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-gray-600 text-xs lg:text-sm">Utilisateurs</p>
                        <p className="text-2xl lg:text-3xl font-bold text-[#003399]">{analytics.analytics.totalUsers.toLocaleString()}</p>
                        <p className="text-gray-500 text-xs lg:text-sm">Inscrits</p>
                      </div>
                      <div className="bg-purple-100 p-2 lg:p-3 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mt-2 lg:mt-0">
                        <Users className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-gray-600 text-xs lg:text-sm">Dons Reçus</p>
                        <p className="text-2xl lg:text-3xl font-bold text-[#003399]">{analytics.analytics.totalDonations.toLocaleString()} FCFA</p>
                        <p className="text-green-600 text-xs lg:text-sm">Ce mois</p>
                      </div>
                      <div className="bg-yellow-100 p-2 lg:p-3 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mt-2 lg:mt-0">
                        <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Charts and Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Top Articles */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-[#003399] mb-4">Articles Populaires</h3>
                    <div className="space-y-4">
                      {analytics.analytics.topArticles.map((article: any, index: number) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#00B0F0] text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{article.title}</p>
                              <p className="text-sm text-gray-500">{article.views} vues</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-green-600 text-sm font-medium">+{article.growth}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-[#003399] mb-4">Activité Récente</h3>
                    <div className="space-y-4">
                      {analytics.analytics.recentActivity.map((activity: any, index: number) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00B0F0] rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-[#003399] mb-4">Notifications</h3>
                  <div className="space-y-3">
                    {notifications.notifications.map((notification: any) => (
                      <div key={notification.id} className={`flex items-center space-x-3 p-3 rounded-lg ${
                        notification.type === 'success' ? 'bg-green-50' :
                        notification.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#003399]">Messages de Contact</h2>
                  <div className="text-sm text-gray-600">
                    Messages reçus via le formulaire de contact
                  </div>
                </div>

                {/* Contacts List */}
                <div className="bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Motif
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Statut
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {(() => {
                          const contacts = JSON.parse(localStorage.getItem('vop_contacts') || '[]');
                          return contacts.length > 0 ? (
                            contacts.map((contact: any, index: number) => (
                              <tr key={contact.id || index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                                    <div className="text-sm text-gray-500">{contact.email}</div>
                                    {contact.phone && (
                                      <div className="text-sm text-gray-500">{contact.phone}</div>
                                    )}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="text-sm text-gray-900">
                                    {contactReasons.find(r => r.value === contact.reason)?.label || contact.reason}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {new Date(contact.timestamp).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                    contact.status === 'nouveau' 
                                      ? 'bg-red-100 text-red-800' 
                                      : contact.status === 'lu' 
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-green-100 text-green-800'
                                  }`}>
                                    {contact.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    onClick={() => {
                                      const contactDetails = `
Nom: ${contact.name}
Email: ${contact.email}
Téléphone: ${contact.phone || 'Non fourni'}
Motif: ${contactReasons.find(r => r.value === contact.reason)?.label || contact.reason}
Sujet: ${contact.subject}

Message:
${contact.message}

Date: ${new Date(contact.timestamp).toLocaleString('fr-FR')}
                                      `;
                                      alert(contactDetails);
                                    }}
                                    className="text-[#00B0F0] hover:text-[#003399] mr-3"
                                  >
                                    Voir
                                  </button>
                                  <button
                                    onClick={() => {
                                      const contacts = JSON.parse(localStorage.getItem('vop_contacts') || '[]');
                                      const updatedContacts = contacts.map((c: any) => 
                                        c.email === contact.email ? { ...c, status: 'lu' } : c
                                      );
                                      localStorage.setItem('vop_contacts', JSON.stringify(updatedContacts));
                                      window.location.reload();
                                    }}
                                    className="text-green-600 hover:text-green-800"
                                  >
                                    Marquer lu
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                Aucun message de contact pour le moment
                              </td>
                            </tr>
                          );
                        })()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'articles' && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#003399]">Gestion des Articles</h2>
                  {canManageArticles() && (
                    <button
                      onClick={() => {
                        setNewArticle({
                          title: '',
                          excerpt: '',
                          content: '',
                          author: currentUser?.name || 'ANDJ Daniel Jonathan',
                          category: 'Actions Locales',
                          image: '',
                          published: false,
                          featured: false
                        });
                        setIsEditing(true);
                        setEditingArticle(null);
                      }}
                      className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Nouvel Article</span>
                    </button>
                  )}
                </div>

                {/* Articles List */}
                <div className="bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Article
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Auteur
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Statut
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {articles.articles.map((article: any) => (
                          <tr key={article.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <img 
                                  src={article.image} 
                                  alt={article.title}
                                  className="w-12 h-12 object-cover rounded-lg mr-4"
                                />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {article.title}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {article.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {article.author}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(article.date).toLocaleDateString('fr-FR')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                article.published 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {article.published ? 'Publié' : 'Brouillon'}
                              </span>
                              {article.featured && (
                                <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                  À la une
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                {canManageArticles() && (
                                  <button
                                    onClick={() => handleEditArticle(article)}
                                    className="text-[#00B0F0] hover:text-[#003399]"
                                    title="Modifier l'article"
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                )}
                                {canDelete() && (
                                  <button
                                    onClick={() => handleDeleteArticle(article.id)}
                                    className="text-red-600 hover:text-red-900"
                                    title="Supprimer l'article"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#003399]">Gestion des Médias</h2>
                  <button className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors">
                    <Upload className="w-5 h-5" />
                    <span>Uploader</span>
                  </button>
                </div>

                {/* Search and Filter */}
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Rechercher des fichiers..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent">
                    <option>Tous les types</option>
                    <option>Images</option>
                    <option>Vidéos</option>
                    <option>Documents</option>
                  </select>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[].map((file: any) => (
                    <div key={file.id} className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                        {file.type === 'image' ? (
                          <Image className="w-12 h-12 text-gray-400" />
                        ) : (
                          <Video className="w-12 h-12 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 truncate">{file.name}</h3>
                        <p className="text-sm text-gray-500">{file.size}</p>
                        <p className="text-xs text-gray-400">{file.date}</p>
                      </div>
                      <div className="flex justify-end space-x-2 mt-3">
                        <button className="text-[#00B0F0] hover:text-[#003399]">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-red-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#003399]">Gestion des Vidéos</h2>
                  <button className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors">
                    <Plus className="w-5 h-5" />
                    <span>Ajouter une vidéo</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[].filter((f: any) => f.type === 'video').map((video: any) => (
                    <div key={video.id} className="bg-white rounded-xl p-4 shadow-sm border">
                      <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                        <Video className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">{video.name}</h3>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{video.size}</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#003399]">Analytics Avancées</h2>
                
                {/* Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Trafic</h3>
                      <Globe className="w-6 h-6 text-[#00B0F0]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Visiteurs uniques</span>
                        <span className="font-semibold">2,340</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pages vues</span>
                        <span className="font-semibold">15,420</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Temps moyen</span>
                        <span className="font-semibold">3m 24s</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Engagement</h3>
                      <Heart className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Likes</span>
                        <span className="font-semibold">1,205</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Commentaires</span>
                        <span className="font-semibold">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Partages</span>
                        <span className="font-semibold">89</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Dons</h3>
                      <DollarSign className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total ce mois</span>
                        <span className="font-semibold">45,600 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dons moyens</span>
                        <span className="font-semibold">12,500 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taux conversion</span>
                        <span className="font-semibold">3.2%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Charts Placeholder */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-[#003399] mb-4">Évolution du Trafic</h3>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Graphique d'évolution à venir</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#003399]">Gestion des Utilisateurs</h2>
                  <button className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors">
                    <Plus className="w-5 h-5" />
                    <span>Ajouter un utilisateur</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière connexion</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.users.map((user: any) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-semibold">
                                {user.name.charAt(0)}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                              user.role === 'Editor' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.status === 'active' ? 'Actif' : 'Inactif'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.lastLogin}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-[#00B0F0] hover:text-[#003399]">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#003399]">Paramètres du Site</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Site Settings */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-[#003399] mb-4">Informations du Site</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom du site</label>
                        <input type="text" defaultValue="LA VOP" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea rows={3} defaultValue="Christ pour la Veuve, l'Orphelin, le Pauvre et Toutes les Nations" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email de contact</label>
                        <input type="email" defaultValue="contact@lavop.org" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-[#003399] mb-4">Réseaux Sociaux</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">TikTok</label>
                        <input type="url" defaultValue="https://www.tiktok.com/@christpourlavop" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">YouTube</label>
                        <input type="url" defaultValue="https://youtube.com/@christpourlavop" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Medium</label>
                        <input type="url" defaultValue="https://medium.com/@danielandj" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Backup & Export */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-[#003399] mb-4">Sauvegarde & Export</h3>
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        <Database className="w-5 h-5" />
                        <span>Sauvegarder la base de données</span>
                      </button>
                      <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="w-5 h-5" />
                        <span>Exporter les articles</span>
                      </button>
                      <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        <Upload className="w-5 h-5" />
                        <span>Importer des données</span>
                      </button>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-[#003399] mb-4">Sécurité</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Authentification à deux facteurs</span>
                        <button className="bg-[#00B0F0] text-white px-3 py-1 rounded-full text-sm hover:bg-[#003399] transition-colors">
                          Activer
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Sessions actives</span>
                        <span className="text-sm font-semibold text-[#003399]">3</span>
                      </div>
                      <button className="w-full text-red-600 hover:text-red-800 text-sm font-medium">
                        Changer le mot de passe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Article Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-[#003399]">
                {editingArticle ? 'Modifier l\'article' : 'Nouvel Article'}
              </h2>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditingArticle(null);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSaveArticle(); }} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titre *
                  </label>
                  <input
                    type="text"
                    required
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auteur
                  </label>
                  <input
                    type="text"
                    value={newArticle.author}
                    onChange={(e) => setNewArticle({...newArticle, author: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Extrait *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newArticle.excerpt}
                  onChange={(e) => setNewArticle({...newArticle, excerpt: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu *
                </label>
                <MediumEditor
                  content={newArticle.content}
                  onChange={(content) => setNewArticle({...newArticle, content})}
                  onSave={() => handleSaveArticle()}
                  placeholder="Commencez à écrire votre article avec l'éditeur Medium..."
                  className="border border-gray-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={newArticle.category}
                    onChange={(e) => setNewArticle({...newArticle, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  >
                    <option value="Actions Locales">Actions Locales</option>
                    <option value="Dons & Impact">Dons & Impact</option>
                    <option value="Jeunesse">Jeunesse</option>
                    <option value="Évangélisation">Évangélisation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={newArticle.image}
                    onChange={(e) => setNewArticle({...newArticle, image: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newArticle.published}
                      onChange={(e) => setNewArticle({...newArticle, published: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Publié</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newArticle.featured}
                      onChange={(e) => setNewArticle({...newArticle, featured: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">À la une</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingArticle(null);
                  }}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-[#00B0F0] text-white px-6 py-2 rounded-lg hover:bg-[#003399] transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Sauvegarder</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Section Vidéos */}
      {activeTab === 'videos' && (
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Gestion des Vidéos</h2>
            <p className="text-gray-600">Gérez vos vidéos YouTube, Vimeo et fichiers uploadés</p>
          </div>
          <VideoManager />
        </div>
      )}

      {/* Section Utilisateurs avec Invitations */}
      {activeTab === 'users' && (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Gestion des Utilisateurs</h2>
              <p className="text-gray-600">Invitez et gérez les membres de votre équipe</p>
            </div>
            <button
              onClick={() => setShowInviteModal(true)}
              className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              <span>Inviter un Utilisateur</span>
            </button>
          </div>

          {/* Liste des utilisateurs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Membres de l'équipe</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {users.users.map((user: any) => (
                <div key={user.id} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-500" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium text-gray-900">{user.name}</h4>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                      user.role === 'Manager' ? 'bg-purple-100 text-purple-800' :
                      user.role === 'Moderator' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Section PDF Manager */}
      {activeTab === 'pdf-manager' && (
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Gestionnaire de PDF</h2>
            <p className="text-gray-600">Téléversez et gérez vos documents PDF pour la transparence et la gouvernance</p>
          </div>
          
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Téléverser un nouveau PDF</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Glissez-déposez votre fichier PDF ici ou cliquez pour sélectionner</p>
              <input
                type="file"
                accept=".pdf"
                onChange={handlePDFUpload}
                className="hidden"
                id="pdf-upload"
              />
              <label
                htmlFor="pdf-upload"
                className="inline-flex items-center px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4 mr-2" />
                Sélectionner un PDF
              </label>
              <p className="text-sm text-gray-500 mt-2">Formats acceptés: PDF (max 10MB)</p>
            </div>
          </div>

          {/* PDF List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Documents PDF existants</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {uploadedPDFs.map((pdf, index) => (
                <div key={index} className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{pdf.name}</h4>
                      <p className="text-sm text-gray-500">Taille: {pdf.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-[#00B0F0] hover:text-[#003399] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Voir</span>
                    </a>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      <span>Supprimer</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Section Constructeur de Site */}
      {activeTab === 'site-builder' && (
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Constructeur de Site</h2>
            <p className="text-gray-600">Modifiez l'apparence et le contenu de votre site comme sur WordPress/Wix</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Éditeur de contenu avancé */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">Éditeur de Contenu Avancé</h3>
              <AdvancedEditor
                content={articleContent}
                onChange={setArticleContent}
                onSave={() => console.log('Sauvegardé')}
                placeholder="Créez du contenu riche avec des images, vidéos et formatage..."
              />
            </div>
            
            {/* Outils de design */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">Outils de Design</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setShowSiteBuilder(true)}
                  className="w-full flex items-center justify-center space-x-2 bg-[#00B0F0] text-white px-4 py-3 rounded-lg hover:bg-[#003399] transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span>Ouvrir le Constructeur</span>
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Palette className="w-4 h-4" />
                    <span>Palettes</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Image className="w-4 h-4" />
                    <span>Images</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Video className="w-4 h-4" />
                    <span>Vidéos</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Type className="w-4 h-4" />
                    <span>Typographie</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <UserInvitationModal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        onInvite={(invitation) => {
          // Ajouter l'invitation à la base de données
          console.log('Nouvelle invitation:', invitation);
          setShowInviteModal(false);
        }}
      />

      {/* Mobile Simulator */}
      {showMobileSimulator && (
        <div className="fixed inset-0 z-50">
          <MobileSimulator>
            <div className="h-full">
              {/* Contenu du site en mode mobile */}
              <iframe
                src="/"
                className="w-full h-full border-0"
                title="VOP Site Mobile"
              />
            </div>
          </MobileSimulator>
        </div>
      )}

      {/* Site Builder */}
      <SiteBuilder />

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default AdminDashboard;
