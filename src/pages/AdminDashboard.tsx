import { useState, useEffect } from 'react';
import { 
  Plus, Edit, Trash2, Save, X, Eye, FileText, Image, Video, Users, Settings, 
  BarChart3, TrendingUp, Download, Upload, Search, Globe, DollarSign, Heart, 
  Database, MessageCircle, LogOut, UserPlus, Bell, Home, Mail, Phone, 
  Calendar, Clock, Star, Award, Target, Zap, Shield, Crown
} from 'lucide-react';

const AdminDashboardPro = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [editingArticle, setEditingArticle] = useState<any>(null);
  const [currentUser] = useState({
    name: "ANDJ Daniel Jonathan",
    email: "jonathanakarentoutoume@gmail.com",
    role: "Super Admin",
    avatar: "/images/founder/photo_andj_ceo.jpg"
  });
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

  // Données de démonstration
  const articles = [
    {
      id: 1,
      title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
      content: "Le 15 juin 2025 restera gravé dans nos mémoires comme une journée exceptionnelle de partage et d'amour...",
      excerpt: "Moment de joie et de partage avec les enfants hospitalisés. Notre équipe VOP s'est rendue à l'Association Tous Différents de Libreville pour une mission spéciale dédiée aux enfants handicapés.",
      category: "VOPyouth",
      image: "/images/activities/1000151414.jpg",
      published: true,
      featured: true,
      views: 1250,
      likes: 89,
      comments: 12,
      created_at: "2025-01-15T10:00:00Z",
      updated_at: "2025-01-15T10:00:00Z"
    }
  ];

  const users = [
    {
      id: 1,
      name: "ANDJ Daniel Jonathan",
      email: "jonathanakarentoutoume@gmail.com",
      role: "Super Admin",
      status: "active",
      last_login: "2025-01-15T10:00:00Z",
      avatar: "/images/founder/photo_andj_ceo.jpg",
      permissions: ["read", "write", "delete", "admin", "moderate", "manage_users"],
      created_at: "2025-01-01T00:00:00Z"
    },
    {
      id: 2,
      name: "Ludmilla T",
      email: "ludmillantoutoume@gmail.com",
      role: "Admin",
      status: "active",
      last_login: "2025-01-14T15:30:00Z",
      avatar: "/images/team/ludmilla.jpg",
      permissions: ["read", "write", "moderate"],
      created_at: "2025-01-10T00:00:00Z"
    }
  ];

  const contacts = [
    {
      id: 1,
      name: "Marie Dubois",
      email: "marie.dubois@email.com",
      phone: "+241 12 34 56 78",
      reason: "Don ou partenariat",
      message: "Bonjour, je souhaite faire un don pour soutenir vos actions.",
      status: "nouveau",
      created_at: "2025-01-15T09:00:00Z"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      message: "Nouveau don reçu de 50€",
      time: "2025-01-15T10:00:00Z",
      read: false,
      created_at: "2025-01-15T10:00:00Z"
    },
    {
      id: 2,
      type: "info",
      message: "Nouveau contact: Marie Dubois",
      time: "2025-01-15T09:00:00Z",
      read: false,
      created_at: "2025-01-15T09:00:00Z"
    }
  ];

  const analytics = {
    totalViews: 1250,
    totalUsers: 2,
    totalArticles: 1,
    totalContacts: 1,
    totalDonations: 150,
    monthlyGrowth: 15.5
  };

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
                  src={currentUser.avatar} 
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                  <p className="text-xs text-gray-500">{currentUser.role}</p>
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
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tableau de bord</h2>
                <p className="text-gray-600">Vue d'ensemble de votre organisation VOP</p>
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
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalViews.toLocaleString()}</p>
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
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalUsers}</p>
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
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalArticles}</p>
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
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalDonations}</p>
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
                      {articles.map((article) => (
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
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Contacts récents</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {contacts.map((contact) => (
                        <div key={contact.id} className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-gray-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                            <p className="text-sm text-gray-500">{contact.reason}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(contact.status)}`}>
                            {contact.status}
                          </span>
                        </div>
                      ))}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Gestion des Articles</h2>
                  <p className="text-gray-600">Créez et gérez vos articles VOP</p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Nouvel article</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    {articles.map((article) => (
                      <div key={article.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img 
                          src={article.image} 
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
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Gestion des Utilisateurs</h2>
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
                    {users.map((user) => (
                      <div key={user.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img 
                          src={user.avatar} 
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Messages de Contact</h2>
                <p className="text-gray-600">Gérez les demandes et messages reçus</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <div key={contact.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                            <p className="text-sm text-gray-500">{contact.phone}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(contact.status)}`}>
                              {contact.status}
                            </span>
                            <span className="text-xs text-gray-500">{formatDate(contact.created_at)}</span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-700 mb-1">Raison: {contact.reason}</p>
                          <p className="text-sm text-gray-600">{contact.message}</p>
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Centre de Notifications</h2>
                <p className="text-gray-600">Gérez vos notifications et alertes</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 mb-1">{notification.message}</p>
                          <p className="text-xs text-gray-500">{formatDate(notification.time)}</p>
                        </div>
                        <div className="flex-shrink-0">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
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

          {/* Other tabs placeholder */}
          {!['dashboard', 'articles', 'users', 'contacts', 'notifications', 'pdf-manager'].includes(activeTab) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {sidebarTabs.find(tab => tab.id === activeTab)?.name}
              </h3>
              <p className="text-gray-600">Cette section sera bientôt disponible</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPro;
