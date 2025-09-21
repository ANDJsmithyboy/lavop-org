import { useState, useEffect } from 'react';
import { 
  Plus, Edit, Trash2, Save, X, Eye, FileText, Image, Video, Users, Settings, 
  BarChart3, TrendingUp, Download, Upload, Search,
  Globe, DollarSign, Heart, Database, MessageCircle, LogOut, UserPlus, Bell,
  Home, Mail, Phone, Calendar, Clock, Star, Award, Target, Zap, Shield, Crown
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
import ArticleEditor from '../components/ArticleEditor';

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
  const [showArticleEditor, setShowArticleEditor] = useState(false);
  const [localArticles, setLocalArticles] = useState<any[]>([]);
  const [uploadedPDFs, setUploadedPDFs] = useState([
    { name: 'rapport-annuel-2023.pdf', url: '/rapport-annuel-2023.pdf', size: '2.1 MB' },
    { name: 'rapport-financier-2023.pdf', url: '/rapport-financier-2023.pdf', size: '1.8 MB' },
    { name: 'politique-confidentialite.pdf', url: '/politique-confidentialite.pdf', size: '0.5 MB' },
    { name: 'conditions-don.pdf', url: '/conditions-don.pdf', size: '0.3 MB' }
  ]);

  // Utilisation des hooks de base de données
  const {
    articles: articlesData,
    users: usersData,
    analytics: analyticsData,
    notifications: notificationsData
  } = useDashboard();

  const articles = articlesData.articles || [];
  const users = usersData.users || [];
  const analytics = analyticsData.analytics || { totalViews: 0, totalUsers: 0, totalArticles: 0, totalContacts: 0 };
  const notifications = notificationsData.notifications || [];
  const loading = articlesData.loading;

  // PWA Installation
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/admin-sw.js')
        .then((registration) => {
          console.log('Service Worker enregistré:', registration);
        })
        .catch((error) => {
          console.log('Erreur Service Worker:', error);
        });
    }

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsPWAInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsPWAInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  const handlePDFUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const pdfData = e.target?.result;
        if (pdfData) {
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

  // Fonctions CRUD pour les articles
  const handleCreateArticle = () => {
    setEditingArticle(null);
    setShowArticleEditor(true);
  };

  const handleEditArticle = (article: any) => {
    setEditingArticle(article);
    setShowArticleEditor(true);
  };

  const handleSaveArticle = (articleData: any) => {
    if (editingArticle) {
      // Mise à jour
      setLocalArticles(prev => prev.map(article => 
        article.id === editingArticle.id ? articleData : article
      ));
    } else {
      // Création
      setLocalArticles(prev => [...prev, articleData]);
    }
    setShowArticleEditor(false);
    setEditingArticle(null);
  };

  const handleDeleteArticle = (articleId: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setLocalArticles(prev => prev.filter(article => article.id !== articleId));
    }
  };

  // Combiner les articles de la DB et les articles locaux
  const allArticles = [...articles, ...localArticles];

  const sidebarTabs = [
    { id: 'dashboard', name: 'Tableau de bord', icon: Home, permission: 'read' },
    { id: 'articles', name: 'Articles', icon: FileText, permission: 'write' },
    { id: 'users', name: 'Utilisateurs', icon: Users, permission: 'admin' },
    { id: 'contacts', name: 'Contacts', icon: MessageCircle, permission: 'read' },
    { id: 'media', name: 'Médias', icon: Image, permission: 'write' },
    { id: 'videos', name: 'Vidéos', icon: Video, permission: 'write' },
    { id: 'analytics', name: 'Analytique', icon: BarChart3, permission: 'read' },
    { id: 'notifications', name: 'Notifications', icon: Bell, permission: 'read' },
    { id: 'site-builder', name: 'Constructeur', icon: Settings, permission: 'admin' },
    { id: 'pdf-manager', name: 'PDF Manager', icon: FileText, permission: 'admin' },
    { id: 'ai-assistant', name: 'VOP AI', icon: Zap, permission: 'read' },
    { id: 'mobile-simulator', name: 'Mobile', icon: Globe, permission: 'read' }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'nouveau': return 'bg-blue-100 text-blue-800';
      case 'lu': return 'bg-yellow-100 text-yellow-800';
      case 'repondu': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <Heart className="w-4 h-4 text-green-500" />;
      case 'info': return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'warning': return <Award className="w-4 h-4 text-yellow-500" />;
      case 'error': return <Shield className="w-4 h-4 text-red-500" />;
      default: return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  // Afficher le loading si nécessaire
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00B0F0] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/Logo de la VOP en français .jpg" 
                alt="LA VOP Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard VOP</h1>
                <p className="text-sm text-gray-600">Christ pour la Veuve, l'Orphelin, le Pauvre</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* PWA Install Button */}
              {!isPWAInstalled && deferredPrompt && (
                <button
                  onClick={handleInstallPWA}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Installer l'app</span>
                </button>
              )}
              
              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <img 
                  src={currentUser?.avatar || "/images/founder/photo_andj_ceo.jpg"} 
                  alt={currentUser?.name || "Admin"}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{currentUser?.name || "Admin"}</p>
                  <p className="text-xs text-gray-500">{currentUser?.role || "Super Admin"}</p>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-[#00B0F0] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Bienvenue dans le Dashboard VOP</h2>
                <p className="text-white/90 text-lg">Gérez votre site et suivez l'impact de vos actions</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Vues totales</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalViews?.toLocaleString() || '0'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Utilisateurs</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalUsers || users.length}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <FileText className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Articles</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalArticles || articles.length}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <DollarSign className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Dons (€)</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalDonations || '0'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Articles récents</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {articles.length > 0 ? articles.slice(0, 3).map((article) => (
                        <div key={article.id} className="flex items-center space-x-4">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {article.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {article.views} vues • {article.likes} likes
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              article.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {article.published ? 'Publié' : 'Brouillon'}
                            </span>
                          </div>
                        </div>
                      )) : (
                        <p className="text-gray-500 text-center py-4">Aucun article pour le moment</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Contacts récents</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {notifications.length > 0 ? notifications.slice(0, 3).map((notification) => (
                        <div key={notification.id} className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-gray-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                            <p className="text-sm text-gray-500">{formatDate(notification.time)}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(notification.type)}`}>
                            {notification.type}
                          </span>
                        </div>
                      )) : (
                        <p className="text-gray-500 text-center py-4">Aucun contact récent</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Articles Tab */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#003399] mb-2">Gestion des Articles</h2>
                  <p className="text-gray-600">Créez et gérez vos articles VOP</p>
                </div>
                <button 
                  onClick={handleCreateArticle}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Nouvel article</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    {allArticles.length > 0 ? allArticles.map((article) => (
                      <div key={article.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <img 
                          src={article.image || "/images/placeholder-article.jpg"} 
                          alt={article.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{article.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{article.views} vues</span>
                            <span>{article.likes} likes</span>
                            <span>{article.comments} commentaires</span>
                            <span>{formatDate(article.created_at)}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              article.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {article.published ? 'Publié' : 'Brouillon'}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => window.open(`/article/${article.id}`, '_blank')}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Voir l'article"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleEditArticle(article)}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Modifier l'article"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteArticle(article.id)}
                            className="p-2 text-red-400 hover:text-red-600 transition-colors"
                            title="Supprimer l'article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-12">
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun article</h3>
                        <p className="text-gray-600">Commencez par créer votre premier article</p>
                        <button 
                          onClick={handleCreateArticle}
                          className="mt-4 px-6 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
                        >
                          Créer un article
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#003399] mb-2">Gestion des Utilisateurs</h2>
                  <p className="text-gray-600">Gérez les accès et permissions</p>
                </div>
                <button 
                  onClick={() => setShowInviteModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Inviter un utilisateur</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    {users.length > 0 ? users.map((user) => (
                      <div key={user.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img 
                          src={user.avatar || "/images/founder/photo_andj_ceo.jpg"} 
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{user.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{user.email}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Rôle: {user.role}</span>
                            <span>Dernière connexion: {formatDate(user.last_login)}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-12">
                        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun utilisateur</h3>
                        <p className="text-gray-600">Invitez des membres à rejoindre votre équipe</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#003399]">Messages de Contact</h2>
                <div className="text-sm text-gray-600">
                  {notifications.length} message{notifications.length > 1 ? 's' : ''}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    {notifications.length > 0 ? notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{notification.message}</h3>
                            <p className="text-sm text-gray-600">{notification.type}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(notification.type)}`}>
                              {notification.type}
                            </span>
                            <span className="text-xs text-gray-500">{formatDate(notification.time)}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                            Marquer comme lu
                          </button>
                          <button className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors">
                            Répondre
                          </button>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-12">
                        <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun message</h3>
                        <p className="text-gray-600">Les messages de contact apparaîtront ici</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Media Tab */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#003399]">Gestion des Médias</h2>
                <button className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>Uploader</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="text-center py-12">
                    <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestion des Médias</h3>
                    <p className="text-gray-600">Uploader et gérez vos images et fichiers</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#003399]">Gestion des Vidéos</h2>
                <button className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors">
                  <Plus className="w-5 h-5" />
                  <span>Ajouter une vidéo</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <VideoManager />
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#003399]">Analytics Avancées</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Croissance</p>
                      <p className="text-2xl font-bold text-gray-900">+15.5%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Engagement</p>
                      <p className="text-2xl font-bold text-gray-900">89%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Target className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Objectifs</p>
                      <p className="text-2xl font-bold text-gray-900">75%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#003399]">Centre de Notifications</h2>
                <p className="text-gray-600">Gérez vos notifications et alertes</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <NotificationCenter />
                </div>
              </div>
            </div>
          )}

          {/* Site Builder Tab */}
          {activeTab === 'site-builder' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#003399] mb-2">Constructeur de Site</h2>
                <p className="text-gray-600">Modifiez l'apparence et le contenu de votre site comme sur WordPress/Wix</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <SiteBuilder />
                </div>
              </div>
            </div>
          )}

          {/* PDF Manager Tab */}
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

          {/* AI Assistant Tab */}
          {activeTab === 'ai-assistant' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#003399] mb-2">VOP AI - Assistant IA 24/7</h2>
                <p className="text-gray-600">Votre assistant intelligent pour gérer LA VOP</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <AIAssistant />
                </div>
              </div>
            </div>
          )}

          {/* Mobile Simulator Tab */}
          {activeTab === 'mobile-simulator' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#003399] mb-2">Simulateur Mobile</h2>
                <p className="text-gray-600">Testez votre site sur différents appareils mobiles</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <MobileSimulator />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      {showInviteModal && (
        <UserInvitationModal onClose={() => setShowInviteModal(false)} />
      )}

      {showMobileSimulator && (
        <MobileSimulator onClose={() => setShowMobileSimulator(false)} />
      )}

      {showSiteBuilder && (
        <SiteBuilder onClose={() => setShowSiteBuilder(false)} />
      )}

      {showArticleEditor && (
        <ArticleEditor
          article={editingArticle}
          onSave={handleSaveArticle}
          onCancel={() => {
            setShowArticleEditor(false);
            setEditingArticle(null);
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;