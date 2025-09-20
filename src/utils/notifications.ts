// Système de notifications pour VOP Admin
export interface NotificationData {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: any;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

class NotificationService {
  private permission: NotificationPermission = 'default';

  // Demander la permission pour les notifications
  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.log('Ce navigateur ne supporte pas les notifications');
      return false;
    }

    if (this.permission === 'granted') {
      return true;
    }

    this.permission = await Notification.requestPermission();
    return this.permission === 'granted';
  }

  // Envoyer une notification
  async sendNotification(data: NotificationData): Promise<void> {
    if (this.permission !== 'granted') {
      const granted = await this.requestPermission();
      if (!granted) {
        console.log('Permission de notification refusée');
        return;
      }
    }

    const notification = new Notification(data.title, {
      body: data.body,
      icon: data.icon || '/icons/icon-192x192.png',
      badge: data.badge || '/icons/icon-192x192.png',
      tag: data.tag,
      data: data.data,
      actions: data.actions,
      requireInteraction: true,
      silent: false
    });

    // Gérer le clic sur la notification
    notification.onclick = () => {
      window.focus();
      notification.close();
      // Rediriger vers l'admin
      window.location.href = '/admin';
    };

    // Fermer automatiquement après 10 secondes
    setTimeout(() => {
      notification.close();
    }, 10000);
  }

  // Notifications pour les ventes
  async notifySale(productName: string, amount: number, customerEmail: string): Promise<void> {
    await this.sendNotification({
      title: '💰 Nouvelle Vente VOP',
      body: `${productName} vendu pour ${amount}€ à ${customerEmail}`,
      tag: 'sale',
      data: { type: 'sale', productName, amount, customerEmail }
    });
  }

  // Notifications pour les dons
  async notifyDonation(amount: number, donorEmail: string, program: string): Promise<void> {
    await this.sendNotification({
      title: '❤️ Nouveau Don VOP',
      body: `Don de ${amount}€ pour ${program} par ${donorEmail}`,
      tag: 'donation',
      data: { type: 'donation', amount, donorEmail, program }
    });
  }

  // Notifications pour les contacts
  async notifyContact(name: string, email: string, reason: string): Promise<void> {
    await this.sendNotification({
      title: '📧 Nouveau Contact VOP',
      body: `${name} (${email}) - ${reason}`,
      tag: 'contact',
      data: { type: 'contact', name, email, reason }
    });
  }

  // Notifications pour les articles
  async notifyArticle(title: string, author: string): Promise<void> {
    await this.sendNotification({
      title: '📝 Nouvel Article VOP',
      body: `"${title}" par ${author}`,
      tag: 'article',
      data: { type: 'article', title, author }
    });
  }

  // Notifications système
  async notifySystem(message: string, type: 'info' | 'warning' | 'error' = 'info'): Promise<void> {
    const emoji = type === 'error' ? '🚨' : type === 'warning' ? '⚠️' : 'ℹ️';
    await this.sendNotification({
      title: `${emoji} Système VOP`,
      body: message,
      tag: 'system',
      data: { type: 'system', message, level: type }
    });
  }
}

export const notificationService = new NotificationService();

// Fonction utilitaire pour tester les notifications
export const testNotification = async (): Promise<void> => {
  await notificationService.sendNotification({
    title: '🎉 Test VOP Admin',
    body: 'Les notifications fonctionnent parfaitement !',
    tag: 'test'
  });
};
