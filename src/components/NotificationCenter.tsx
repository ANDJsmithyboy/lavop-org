import { useState, useEffect } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info, DollarSign, Heart, Mail, FileText } from 'lucide-react';
import { notificationService } from '../utils/notifications';

interface Notification {
  id: string;
  type: 'sale' | 'donation' | 'contact' | 'article' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  data?: any;
}

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Charger les notifications depuis localStorage
  useEffect(() => {
    const savedNotifications = localStorage.getItem('vop_notifications');
    if (savedNotifications) {
      const parsed = JSON.parse(savedNotifications);
      setNotifications(parsed);
      setUnreadCount(parsed.filter((n: Notification) => !n.read).length);
    }
  }, []);

  // Sauvegarder les notifications
  const saveNotifications = (newNotifications: Notification[]) => {
    setNotifications(newNotifications);
    setUnreadCount(newNotifications.filter(n => !n.read).length);
    localStorage.setItem('vop_notifications', JSON.stringify(newNotifications));
  };

  // Ajouter une nouvelle notification
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false
    };
    
    const updated = [newNotification, ...notifications];
    saveNotifications(updated);
    
    // Envoyer une notification push
    notificationService.sendNotification({
      title: notification.title,
      body: notification.message,
      tag: notification.type
    });
  };

  // Marquer comme lu
  const markAsRead = (id: string) => {
    const updated = notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    );
    saveNotifications(updated);
  };

  // Marquer toutes comme lues
  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    saveNotifications(updated);
  };

  // Supprimer une notification
  const deleteNotification = (id: string) => {
    const updated = notifications.filter(n => n.id !== id);
    saveNotifications(updated);
  };

  // Supprimer toutes les notifications
  const clearAll = () => {
    saveNotifications([]);
  };

  // Obtenir l'icône selon le type
  const getIcon = (type: string) => {
    switch (type) {
      case 'sale': return <DollarSign className="w-5 h-5 text-green-500" />;
      case 'donation': return <Heart className="w-5 h-5 text-red-500" />;
      case 'contact': return <Mail className="w-5 h-5 text-blue-500" />;
      case 'article': return <FileText className="w-5 h-5 text-purple-500" />;
      case 'system': return <AlertCircle className="w-5 h-5 text-orange-500" />;
      default: return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  // Obtenir la couleur selon le type
  const getColor = (type: string) => {
    switch (type) {
      case 'sale': return 'bg-green-50 border-green-200';
      case 'donation': return 'bg-red-50 border-red-200';
      case 'contact': return 'bg-blue-50 border-blue-200';
      case 'article': return 'bg-purple-50 border-purple-200';
      case 'system': return 'bg-orange-50 border-orange-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="relative">
      {/* Bouton de notification */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Panel de notifications */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <div className="flex space-x-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Tout marquer lu
                  </button>
                )}
                <button
                  onClick={clearAll}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Effacer tout
                </button>
              </div>
            </div>
          </div>

          {/* Liste des notifications */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>Aucune notification</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {getIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {notification.timestamp.toLocaleString('fr-FR')}
                      </p>
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-blue-600 hover:text-blue-800 mt-2"
                        >
                          Marquer comme lu
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
