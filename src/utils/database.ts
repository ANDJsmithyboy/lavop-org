// Types pour la base de données
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  published: boolean;
  featured: boolean;
  views: number;
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'video' | 'document';
  size: string;
  date: string;
  url: string;
  alt?: string;
  description?: string;
  tags: string[];
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Moderator' | 'Viewer';
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  avatar?: string;
  permissions: string[];
  createdAt: string;
}

export interface Analytics {
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  totalArticles: number;
  totalUsers: number;
  totalDonations: number;
  monthlyGrowth: number;
  topArticles: Array<{
    title: string;
    views: number;
    growth: number;
  }>;
  recentActivity: Array<{
    action: string;
    user: string;
    time: string;
  }>;
}

export interface Notification {
  id: number;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  time: string;
  read: boolean;
  createdAt: string;
}

// Clés de stockage
const STORAGE_KEYS = {
  ARTICLES: 'vop_articles',
  MEDIA: 'vop_media',
  USERS: 'vop_users',
  ANALYTICS: 'vop_analytics',
  NOTIFICATIONS: 'vop_notifications',
  SETTINGS: 'vop_settings'
};

// Utilitaires de base
class Database {
  // Articles
  static getArticles(): Article[] {
    const articles = localStorage.getItem(STORAGE_KEYS.ARTICLES);
    return articles ? JSON.parse(articles) : this.getDefaultArticles();
  }

  static saveArticles(articles: Article[]): void {
    localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
  }

  static addArticle(article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Article {
    const articles = this.getArticles();
    const newArticle: Article = {
      ...article,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    articles.push(newArticle);
    this.saveArticles(articles);
    return newArticle;
  }

  static updateArticle(id: number, updates: Partial<Article>): Article | null {
    const articles = this.getArticles();
    const index = articles.findIndex(article => article.id === id);
    if (index === -1) return null;
    
    articles[index] = {
      ...articles[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.saveArticles(articles);
    return articles[index];
  }

  static deleteArticle(id: number): boolean {
    const articles = this.getArticles();
    const filtered = articles.filter(article => article.id !== id);
    if (filtered.length === articles.length) return false;
    this.saveArticles(filtered);
    return true;
  }

  // Médias
  static getMediaFiles(): MediaFile[] {
    const media = localStorage.getItem(STORAGE_KEYS.MEDIA);
    return media ? JSON.parse(media) : this.getDefaultMediaFiles();
  }

  static saveMediaFiles(files: MediaFile[]): void {
    localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(files));
  }

  static addMediaFile(file: Omit<MediaFile, 'id' | 'createdAt'>): MediaFile {
    const files = this.getMediaFiles();
    const newFile: MediaFile = {
      ...file,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    files.push(newFile);
    this.saveMediaFiles(files);
    return newFile;
  }

  static deleteMediaFile(id: number): boolean {
    const files = this.getMediaFiles();
    const filtered = files.filter(file => file.id !== id);
    if (filtered.length === files.length) return false;
    this.saveMediaFiles(filtered);
    return true;
  }

  // Utilisateurs
  static getUsers(): User[] {
    const users = localStorage.getItem(STORAGE_KEYS.USERS);
    return users ? JSON.parse(users) : this.getDefaultUsers();
  }

  static saveUsers(users: User[]): void {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }

  static addUser(user: Omit<User, 'id' | 'createdAt'>): User {
    const users = this.getUsers();
    const newUser: User = {
      ...user,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  }

  static updateUser(id: number, updates: Partial<User>): User | null {
    const users = this.getUsers();
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    
    users[index] = { ...users[index], ...updates };
    this.saveUsers(users);
    return users[index];
  }

  static deleteUser(id: number): boolean {
    const users = this.getUsers();
    const filtered = users.filter(user => user.id !== id);
    if (filtered.length === users.length) return false;
    this.saveUsers(filtered);
    return true;
  }

  // Analytics
  static getAnalytics(): Analytics {
    const analytics = localStorage.getItem(STORAGE_KEYS.ANALYTICS);
    return analytics ? JSON.parse(analytics) : this.getDefaultAnalytics();
  }

  static updateAnalytics(updates: Partial<Analytics>): void {
    const analytics = this.getAnalytics();
    const updated = { ...analytics, ...updates };
    localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(updated));
  }

  // Notifications
  static getNotifications(): Notification[] {
    const notifications = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
    return notifications ? JSON.parse(notifications) : this.getDefaultNotifications();
  }

  static saveNotifications(notifications: Notification[]): void {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  }

  static addNotification(notification: Omit<Notification, 'id' | 'createdAt'>): Notification {
    const notifications = this.getNotifications();
    const newNotification: Notification = {
      ...notification,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    notifications.unshift(newNotification); // Ajouter au début
    this.saveNotifications(notifications);
    return newNotification;
  }

  static markNotificationAsRead(id: number): void {
    const notifications = this.getNotifications();
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications[index].read = true;
      this.saveNotifications(notifications);
    }
  }

  static deleteNotification(id: number): void {
    const notifications = this.getNotifications();
    const filtered = notifications.filter(n => n.id !== id);
    this.saveNotifications(filtered);
  }

  // Données par défaut
  static getDefaultArticles(): Article[] {
    return [
      {
        id: 1,
        title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
        excerpt: "Une journée mémorable de partage et d'amour avec l'Association Tous Différents.",
        content: "Contenu complet de l'article...",
        author: "Équipe VOP",
        date: "2025-01-15",
        category: "Actions Locales",
        image: "/src/assets/images/activities/IMG-20250614-WA0058.jpg",
        published: true,
        featured: true,
        views: 1250,
        likes: 89,
        comments: 12,
        createdAt: "2025-01-15T10:00:00Z",
        updatedAt: "2025-01-15T10:00:00Z"
      },
      {
        id: 2,
        title: "Dons VOP : Impact Direct sur le Terrain",
        excerpt: "Témoignages authentiques de nos actions de dons et de soutien aux familles.",
        content: "Contenu complet de l'article...",
        author: "ANDJ Daniel Jonathan",
        date: "2025-01-10",
        category: "Dons & Impact",
        image: "/src/assets/images/activities/IMG-20250614-WA0099.jpg",
        published: true,
        featured: false,
        views: 890,
        likes: 67,
        comments: 8,
        createdAt: "2025-01-10T10:00:00Z",
        updatedAt: "2025-01-10T10:00:00Z"
      }
    ];
  }

  static getDefaultMediaFiles(): MediaFile[] {
    return [
      {
        id: 1,
        name: "IMG-20250614-WA0058.jpg",
        type: "image",
        size: "2.4 MB",
        date: "2025-01-15",
        url: "/src/assets/images/activities/IMG-20250614-WA0058.jpg",
        alt: "Enfants handicapés lors de la sortie VOP",
        description: "Photo de la sortie VOP avec l'Association Tous Différents",
        tags: ["sortie", "enfants", "handicapés", "vop"],
        createdAt: "2025-01-15T10:00:00Z"
      },
      {
        id: 2,
        name: "1000151380.mp4",
        type: "video",
        size: "15.2 MB",
        date: "2025-01-14",
        url: "/src/assets/videos/1000151380.mp4",
        alt: "Présentation du fondateur VOP",
        description: "Vidéo de présentation d'ANDJ Daniel Jonathan",
        tags: ["fondateur", "présentation", "vop"],
        createdAt: "2025-01-14T10:00:00Z"
      },
      {
        id: 3,
        name: "photo_andj_ceo.jpg",
        type: "image",
        size: "1.8 MB",
        date: "2025-01-13",
        url: "/src/assets/images/founder/photo_andj_ceo.jpg",
        alt: "Photo du fondateur ANDJ Daniel Jonathan",
        description: "Photo officielle du fondateur de LA VOP",
        tags: ["fondateur", "portrait", "officiel"],
        createdAt: "2025-01-13T10:00:00Z"
      }
    ];
  }

  static getDefaultUsers(): User[] {
    return [
      {
        id: 1,
        name: "ANDJ Daniel Jonathan",
        email: "jonathanakarentoutoume@gmail.com",
        role: "Admin",
        status: "active",
        lastLogin: "2025-01-15",
        avatar: "/src/assets/images/founder/photo_andj_ceo.jpg",
        permissions: ["read", "write", "delete", "admin", "moderate", "manage_users"],
        createdAt: "2025-01-01T10:00:00Z"
      },
      {
        id: 2,
        name: "Ludmilla Jaël",
        email: "ludmillantoutoume@gmail.com",
        role: "Editor",
        status: "active",
        lastLogin: "2025-01-14",
        permissions: ["read", "write_articles"],
        createdAt: "2025-01-01T10:00:00Z"
      }
    ];
  }

  static getDefaultAnalytics(): Analytics {
    return {
      totalViews: 15420,
      totalLikes: 1205,
      totalComments: 156,
      totalArticles: 12,
      totalUsers: 2340,
      totalDonations: 45600,
      monthlyGrowth: 15.2,
      topArticles: [
        { title: "Sortie VOP 2025", views: 1250, growth: 25 },
        { title: "Dons VOP Impact", views: 890, growth: 18 },
        { title: "Mission VOP Youth", views: 756, growth: 12 }
      ],
      recentActivity: [
        { action: "Nouvel article publié", user: "ANDJ Daniel", time: "2 min" },
        { action: "Commande reçue", user: "Client", time: "15 min" },
        { action: "Don reçu", user: "Anonyme", time: "1h" },
        { action: "Commentaire ajouté", user: "Marie K.", time: "2h" }
      ]
    };
  }

  static getDefaultNotifications(): Notification[] {
    return [
      {
        id: 1,
        type: "success",
        message: "Nouvel article publié avec succès",
        time: "2 min",
        read: false,
        createdAt: "2025-01-15T10:00:00Z"
      },
      {
        id: 2,
        type: "info",
        message: "Nouvelle commande sur mesure reçue",
        time: "15 min",
        read: false,
        createdAt: "2025-01-15T09:45:00Z"
      },
      {
        id: 3,
        type: "warning",
        message: "Espace de stockage à 80%",
        time: "1h",
        read: true,
        createdAt: "2025-01-15T09:00:00Z"
      }
    ];
  }

  // Utilitaires de recherche et filtrage
  static searchArticles(query: string): Article[] {
    const articles = this.getArticles();
    return articles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  static filterArticlesByStatus(status: string): Article[] {
    const articles = this.getArticles();
    if (status === 'all') return articles;
    if (status === 'published') return articles.filter(a => a.published);
    if (status === 'draft') return articles.filter(a => !a.published);
    if (status === 'featured') return articles.filter(a => a.featured);
    return articles;
  }

  static searchMediaFiles(query: string): MediaFile[] {
    const files = this.getMediaFiles();
    return files.filter(file => 
      file.name.toLowerCase().includes(query.toLowerCase()) ||
      file.description?.toLowerCase().includes(query.toLowerCase()) ||
      file.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }

  static filterMediaByType(type: string): MediaFile[] {
    const files = this.getMediaFiles();
    if (type === 'all') return files;
    return files.filter(file => file.type === type);
  }

  // Sauvegarde et export
  static exportData(): string {
    const data = {
      articles: this.getArticles(),
      media: this.getMediaFiles(),
      users: this.getUsers(),
      analytics: this.getAnalytics(),
      notifications: this.getNotifications(),
      exportDate: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  }

  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      if (data.articles) this.saveArticles(data.articles);
      if (data.media) this.saveMediaFiles(data.media);
      if (data.users) this.saveUsers(data.users);
      if (data.analytics) this.updateAnalytics(data.analytics);
      if (data.notifications) this.saveNotifications(data.notifications);
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'import:', error);
      return false;
    }
  }

  // Reset complet
  static resetAll(): void {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
}

export default Database;

