import { useState, useEffect } from 'react';
import { 
  Plus, Edit, Trash2, Save, X, Eye, FileText, Image, Video, Users, Settings, 
  BarChart3, TrendingUp, Download, Upload, Search, Globe, DollarSign, Heart, 
  Database, MessageCircle, LogOut, UserPlus, Bell, Home, Mail, Phone, Calendar, 
  Clock, Star, Award, Target, Zap, Shield, Crown, ChevronRight, ChevronDown,
  Bold, Italic, Underline, Link, List, AlignLeft, AlignCenter, AlignRight,
  Type, Palette, Layout, Monitor, Tablet, Smartphone, Play, Pause, Volume2
} from 'lucide-react';

const ModernDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [showArticleEditor, setShowArticleEditor] = useState(false);
  const [editingArticle, setEditingArticle] = useState<any>(null);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
      excerpt: "Le 15 juin 2025 restera gravé dans nos mémoires comme une journée exceptionnelle de partage et d'amour...",
      content: "Contenu complet de l'article...",
      author: "Équipe VOP",
      date: "15 Juin 2025",
      category: "Actions Locales",
      image: "/images/activities/1000151414.jpg",
      readTime: "5 min",
      published: true,
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: "VOP Youth : Mission d'Espoir à l'Hôpital",
      excerpt: "Notre équipe VOP Youth a apporté réconfort et espoir aux patients de l'hôpital de Libreville...",
      content: "Contenu complet de l'article...",
      author: "Équipe VOP Youth",
      date: "27 Mars 2025",
      category: "Jeunesse",
      image: "/images/activities/1000151414.jpg",
      readTime: "4 min",
      published: true,
      views: 980,
      likes: 67,
      comments: 15
    }
  ]);

  const [mediaFiles, setMediaFiles] = useState([
    {
      id: 1,
      name: "sortie-vop-2025.jpg",
      type: "image",
      url: "/images/activities/1000151414.jpg",
      size: "2.1 MB",
      uploadedAt: "2025-01-15"
    },
    {
      id: 2,
      name: "mission-hopital.mp4",
      type: "video",
      url: "/videos/1000102806.mp4",
      size: "15.3 MB",
      uploadedAt: "2025-01-10"
    }
  ]);

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Association Tous Différents - Dons VOP",
      description: "Moment de partage et de joie avec les enfants handicapés",
      video: "/videos/1000102806.mp4",
      thumbnail: "/images/activities/1000151414.jpg",
      duration: "2:30",
      category: "Dons & Actions",
      tiktokUrl: "https://www.tiktok.com/@christpourlavop/video/7516187714329382150",
      views: 3200,
      likes: 156
    }
  ]);

  const [analytics, setAnalytics] = useState({
    totalViews: 15420,
    totalUsers: 1250,
    totalArticles: 8,
    totalDonations: 25000,
    monthlyGrowth: 15.5,
    engagementRate: 75,
    goalsAchieved: 90
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Nouvel article publié",
      message: "L'article 'Sortie VOP 2025' a été publié avec succès",
      time: "il y a 2 min",
      type: "success",
      read: false
    },
    {
      id: 2,
      title: "Nouveau don reçu",
      message: "Un don de 500€ a été reçu de Jean Dupont",
      time: "il y a 1 heure",
      type: "donation",
      read: false
    }
  ]);

  const [siteSettings, setSiteSettings] = useState({
    title: "LA VOP - L'amour de Dieu en action",
    description: "Jésus-Christ ressuscité, annoncé par les œuvres et la vérité",
    logo: "/Logo de la VOP en français .jpg",
    primaryColor: "#003399",
    secondaryColor: "#00B0F0",
    accentColor: "#FFD700"
  });

  const [previewMode, setPreviewMode] = useState('desktop');

  const tabs = [
    { id: 'dashboard', name: 'Tableau de bord', icon: Home, color: 'text-blue-600' },
    { id: 'articles', name: 'Articles', icon: FileText, color: 'text-green-600' },
    { id: 'media', name: 'Médias', icon: Image, color: 'text-purple-600' },
    { id: 'videos', name: 'Vidéos', icon: Video, color: 'text-red-600' },
    { id: 'analytics', name: 'Analytique', icon: BarChart3, color: 'text-orange-600' },
    { id: 'users', name: 'Utilisateurs', icon: Users, color: 'text-indigo-600' },
    { id: 'notifications', name: 'Notifications', icon: Bell, color: 'text-pink-600' },
    { id: 'site-builder', name: 'Constructeur', icon: Layout, color: 'text-cyan-600' },
    { id: 'settings', name: 'Paramètres', icon: Settings, color: 'text-gray-600' }
  ];

  const handleCreateArticle = () => {
    setEditingArticle(null);
    setShowArticleEditor(true);
  };

  const handleEditArticle = (article: any) => {
    setEditingArticle(article);
    setShowArticleEditor(true);
  };

  const handleSaveArticle = (articleData: any) => {
    // Récupérer les données du formulaire
    const form = document.querySelector('#article-form') as HTMLFormElement;
    if (!form) return;

    const formData = new FormData(form);
    const newArticleData = {
      title: formData.get('title') as string,
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string,
      category: formData.get('category') as string,
      author: 'Équipe VOP',
      date: new Date().toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: '5 min',
      image: '/images/activities/1000151414.jpg',
      views: 0,
      likes: 0,
      comments: 0,
      published: false
    };

    if (editingArticle) {
      setArticles(prev => prev.map(article => 
        article.id === editingArticle.id ? { ...article, ...newArticleData } : article
      ));
    } else {
      const newArticle = {
        ...newArticleData,
        id: Date.now()
      };
      setArticles(prev => [...prev, newArticle]);
    }
    setShowArticleEditor(false);
    setEditingArticle(null);
  };

  const handleDeleteArticle = (articleId: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setArticles(prev => prev.filter(article => article.id !== articleId));
    }
  };

  const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newMedia = {
        id: Date.now(),
        name: file.name,
        type: file.type.startsWith('video/') ? 'video' : 'image',
        url: URL.createObjectURL(file),
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        uploadedAt: new Date().toISOString().split('T')[0]
      };
      setMediaFiles(prev => [...prev, newMedia]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/Logo de la VOP en français .jpg" alt="LA VOP" className="h-10 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard VOP</h1>
                <p className="text-sm text-gray-500">Gestion complète de votre site</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`p-2 rounded ${previewMode === 'desktop' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPreviewMode('tablet')}
                  className={`p-2 rounded ${previewMode === 'tablet' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`p-2 rounded ${previewMode === 'mobile' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
              <button className="bg-[#00B0F0] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Publier
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-[#00B0F0]/10 text-[#00B0F0] border border-[#00B0F0]/20' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? tab.color : ''}`} />
                <span className="font-medium">{tab.name}</span>
                {tab.id === 'notifications' && notifications.filter(n => !n.read).length > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Bienvenue dans le Dashboard VOP</h2>
                <p className="text-white/90 text-lg">Gérez votre site et suivez l'impact de vos actions</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Vues Totales</p>
                    <h3 className="text-2xl font-bold text-gray-900">{analytics.totalViews.toLocaleString()}</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Utilisateurs</p>
                    <h3 className="text-2xl font-bold text-gray-900">{analytics.totalUsers.toLocaleString()}</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <FileText className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Articles</p>
                    <h3 className="text-2xl font-bold text-gray-900">{analytics.totalArticles}</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <DollarSign className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Dons Reçus</p>
                    <h3 className="text-2xl font-bold text-gray-900">€{analytics.totalDonations.toLocaleString()}</h3>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité Récente</h3>
                  <ul className="space-y-3">
                    {notifications.slice(0, 3).map((notification) => (
                      <li key={notification.id} className="flex items-center space-x-3 text-gray-700">
                        <div className={`w-2 h-2 rounded-full ${
                          notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <span className="flex-1">{notification.message}</span>
                        <span className="text-sm text-gray-500">{notification.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Croissance Mensuelle</h3>
                  <div className="flex items-center space-x-3 text-green-600">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-3xl font-bold">+{analytics.monthlyGrowth}%</span>
                    <span className="text-gray-500">par rapport au mois dernier</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#003399] mb-2">Gestion des Articles</h2>
                  <p className="text-gray-600">Créez et gérez vos articles comme sur WordPress/Medium</p>
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
                    {articles.map((article) => (
                      <div key={article.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
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
                            <span>{article.date}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              article.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {article.published ? 'Publié' : 'Brouillon'}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => window.open(`/blog/article/${article.id}`, '_blank')}
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#003399] mb-2">Gestion des Médias</h2>
                  <p className="text-gray-600">Téléchargez et gérez vos images, vidéos et documents</p>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleMediaUpload}
                    className="hidden"
                    id="media-upload"
                  />
                  <label
                    htmlFor="media-upload"
                    className="flex items-center space-x-2 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Télécharger</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaFiles.map((file) => (
                  <div key={file.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {file.type === 'image' ? (
                      <img src={file.url} alt={file.name} className="w-full h-48 object-cover" />
                    ) : (
                      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <Video className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{file.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{file.size}</p>
                      <p className="text-sm text-gray-500">{file.uploadedAt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#003399] mb-2">Gestion des Vidéos</h2>
                  <p className="text-gray-600">Gérez vos vidéos locales et TikTok</p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Ajouter une vidéo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="relative">
                      <video
                        className="w-full h-48 object-cover"
                        poster={video.thumbnail}
                        controls
                        preload="metadata"
                      >
                        <source src={video.video} type="video/mp4" />
                      </video>
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{video.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{video.views} vues</span>
                        <span>{video.likes} likes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#003399] mb-4">Analytics Avancées</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Taux d'engagement</p>
                    <h3 className="text-2xl font-bold text-gray-900">{analytics.engagementRate}%</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Objectifs Atteints</p>
                    <h3 className="text-2xl font-bold text-gray-900">{analytics.goalsAchieved}%</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                  <div className="p-3 bg-pink-100 rounded-full">
                    <Award className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Impact Communautaire</p>
                    <h3 className="text-2xl font-bold text-gray-900">Élevé</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'site-builder' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#003399] mb-4">Constructeur de Site</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Prévisualisation</h3>
                  <div className={`border-2 border-gray-200 rounded-lg overflow-hidden ${
                    previewMode === 'mobile' ? 'max-w-sm mx-auto' : 
                    previewMode === 'tablet' ? 'max-w-2xl mx-auto' : 'w-full'
                  }`}>
                    <div className="bg-gray-100 p-2 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-center">
                        <img src={siteSettings.logo} alt="Logo" className="h-12 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-[#003399] mb-2">{siteSettings.title}</h1>
                        <p className="text-gray-600">{siteSettings.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Paramètres du Site</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Titre du site</label>
                      <input
                        type="text"
                        value={siteSettings.title}
                        onChange={(e) => setSiteSettings(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={siteSettings.description}
                        onChange={(e) => setSiteSettings(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Couleur principale</label>
                      <input
                        type="color"
                        value={siteSettings.primaryColor}
                        onChange={(e) => setSiteSettings(prev => ({ ...prev, primaryColor: e.target.value }))}
                        className="w-full h-10 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Article Editor Modal */}
      {showArticleEditor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {editingArticle ? 'Modifier l\'article' : 'Nouvel article'}
              </h2>
              <button
                onClick={() => setShowArticleEditor(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form id="article-form" className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editingArticle?.title || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                    placeholder="Titre de l'article"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Extrait</label>
                  <textarea
                    name="excerpt"
                    defaultValue={editingArticle?.excerpt || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                    rows={3}
                    placeholder="Résumé de l'article"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
                  <div className="border border-gray-300 rounded-lg">
                    <div className="flex items-center space-x-2 p-2 border-b border-gray-200 bg-gray-50">
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <Bold className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <Italic className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <Underline className="w-4 h-4" />
                      </button>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <AlignLeft className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <AlignCenter className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <AlignRight className="w-4 h-4" />
                      </button>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <Link className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                    <textarea
                      name="content"
                      defaultValue={editingArticle?.content || ''}
                      className="w-full p-4 border-0 focus:ring-0 resize-none"
                      rows={10}
                      placeholder="Contenu de l'article..."
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                    <select name="category" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent" required>
                      <option value="">Sélectionner une catégorie</option>
                      <option value="Actions Locales">Actions Locales</option>
                      <option value="Jeunesse">Jeunesse</option>
                      <option value="Dons & Impact">Dons & Impact</option>
                      <option value="Soutien Veuves">Soutien Veuves</option>
                      <option value="Formation">Formation</option>
                      <option value="International">International</option>
                      <option value="Témoignages">Témoignages</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image de couverture</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setShowArticleEditor(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => handleSaveArticle({})}
                className="px-6 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
              >
                {editingArticle ? 'Mettre à jour' : 'Créer l\'article'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernDashboard;
