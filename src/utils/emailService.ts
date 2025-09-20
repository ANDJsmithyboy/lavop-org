// Service email pour VOP Admin
export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export interface SaleNotification {
  productName: string;
  amount: number;
  customerEmail: string;
  customerName: string;
  orderId: string;
  date: string;
}

export interface DonationNotification {
  amount: number;
  donorEmail: string;
  donorName: string;
  program: string;
  date: string;
}

class EmailService {
  private adminEmail = 'jonathanakarentoutoume@gmail.com';
  private fromEmail = 'noreply@lavop.org';

  // Envoyer un email de notification de vente
  async sendSaleNotification(sale: SaleNotification): Promise<void> {
    const emailData: EmailData = {
      to: this.adminEmail,
      subject: `💰 Nouvelle Vente VOP - ${sale.productName}`,
      from: this.fromEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #003399, #00B0F0); color: white; padding: 20px; text-align: center;">
            <h1>💰 Nouvelle Vente VOP</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h2>Détails de la vente :</h2>
            <ul>
              <li><strong>Produit :</strong> ${sale.productName}</li>
              <li><strong>Montant :</strong> ${sale.amount}€</li>
              <li><strong>Client :</strong> ${sale.customerName} (${sale.customerEmail})</li>
              <li><strong>Commande :</strong> ${sale.orderId}</li>
              <li><strong>Date :</strong> ${sale.date}</li>
            </ul>
            <div style="margin-top: 20px; text-align: center;">
              <a href="http://localhost:5174/admin" style="background: #003399; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Voir dans l'admin
              </a>
            </div>
          </div>
        </div>
      `,
      text: `Nouvelle vente VOP: ${sale.productName} - ${sale.amount}€ - ${sale.customerName}`
    };

    await this.sendEmail(emailData);
  }

  // Envoyer un email de notification de don
  async sendDonationNotification(donation: DonationNotification): Promise<void> {
    const emailData: EmailData = {
      to: this.adminEmail,
      subject: `❤️ Nouveau Don VOP - ${donation.program}`,
      from: this.fromEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #CC3366, #FF6B9D); color: white; padding: 20px; text-align: center;">
            <h1>❤️ Nouveau Don VOP</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h2>Détails du don :</h2>
            <ul>
              <li><strong>Programme :</strong> ${donation.program}</li>
              <li><strong>Montant :</strong> ${donation.amount}€</li>
              <li><strong>Donateur :</strong> ${donation.donorName} (${donation.donorEmail})</li>
              <li><strong>Date :</strong> ${donation.date}</li>
            </ul>
            <div style="margin-top: 20px; text-align: center;">
              <a href="http://localhost:5174/admin" style="background: #CC3366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Voir dans l'admin
              </a>
            </div>
          </div>
        </div>
      `,
      text: `Nouveau don VOP: ${donation.program} - ${donation.amount}€ - ${donation.donorName}`
    };

    await this.sendEmail(emailData);
  }

  // Envoyer un email de contact
  async sendContactNotification(name: string, email: string, reason: string, message: string): Promise<void> {
    const emailData: EmailData = {
      to: this.adminEmail,
      subject: `📧 Nouveau Contact VOP - ${reason}`,
      from: this.fromEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00B0F0, #003399); color: white; padding: 20px; text-align: center;">
            <h1>📧 Nouveau Contact VOP</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h2>Détails du contact :</h2>
            <ul>
              <li><strong>Nom :</strong> ${name}</li>
              <li><strong>Email :</strong> ${email}</li>
              <li><strong>Raison :</strong> ${reason}</li>
              <li><strong>Message :</strong> ${message}</li>
            </ul>
            <div style="margin-top: 20px; text-align: center;">
              <a href="http://localhost:5174/admin" style="background: #00B0F0; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Voir dans l'admin
              </a>
            </div>
          </div>
        </div>
      `,
      text: `Nouveau contact VOP: ${name} - ${reason} - ${message}`
    };

    await this.sendEmail(emailData);
  }

  // Envoyer un email de notification de commande sur mesure
  async sendCustomOrderNotification(order: any): Promise<void> {
    const emailData: EmailData = {
      to: this.adminEmail,
      subject: `👔 Nouvelle Commande sur Mesure - ${order.fullName}`,
      from: this.fromEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #003399, #00B0F0); color: white; padding: 30px; text-align: center;">
            <h1>👔 Nouvelle Commande sur Mesure</h1>
            <p>Tenue Homme de DIEU Premium</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2>Informations du client :</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <ul style="list-style: none; padding: 0;">
                <li><strong>Nom :</strong> ${order.fullName}</li>
                <li><strong>Email :</strong> ${order.email}</li>
                <li><strong>Téléphone :</strong> ${order.phone || 'Non renseigné'}</li>
                <li><strong>Date :</strong> ${new Date(order.orderDate).toLocaleString('fr-FR')}</li>
              </ul>
            </div>

            <h2>Mesures :</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <ul style="list-style: none; padding: 0;">
                <li><strong>Tour de poitrine :</strong> ${order.chestMeasurement} cm</li>
                <li><strong>Tour de taille :</strong> ${order.waistMeasurement || 'Non renseigné'} cm</li>
                <li><strong>Tour de hanches :</strong> ${order.hipMeasurement || 'Non renseigné'} cm</li>
                <li><strong>Largeur d'épaules :</strong> ${order.shoulderWidth || 'Non renseigné'} cm</li>
                <li><strong>Longueur de bras :</strong> ${order.armLength || 'Non renseigné'} cm</li>
                <li><strong>Taille :</strong> ${order.height || 'Non renseigné'} cm</li>
              </ul>
            </div>

            ${order.specificModel ? `
            <h2>Modèle spécifique :</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p>${order.specificModel}</p>
            </div>
            ` : ''}

            ${order.additionalNotes ? `
            <h2>Notes supplémentaires :</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p>${order.additionalNotes}</p>
            </div>
            ` : ''}

            ${order.images && order.images.length > 0 ? `
            <h2>Images jointes :</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p>${order.images.length} image(s) jointe(s) :</p>
              <ul>
                ${order.images.map((img: any) => `<li>${img.name} (${(img.size / 1024).toFixed(1)} KB)</li>`).join('')}
              </ul>
            </div>
            ` : ''}
            
            <div style="margin-top: 20px; text-align: center;">
              <a href="http://localhost:5174/admin" style="background: #003399; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Voir dans l'admin
              </a>
            </div>
          </div>
        </div>
      `,
      text: `Nouvelle commande sur mesure: ${order.fullName} - ${order.email} - ${order.orderType}`
    };

    await this.sendEmail(emailData);
  }

  // Fonction générique pour envoyer des emails
  private async sendEmail(emailData: EmailData): Promise<void> {
    // Pour la démo, on simule l'envoi d'email
    // En production, vous devriez utiliser un service comme SendGrid, Mailgun, etc.
    console.log('📧 Email envoyé:', emailData);
    
    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // En production, remplacez par :
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData)
    // });
  }
}

export const emailService = new EmailService();
