// Messages WhatsApp préformatés pour différentes actions

export const WHATSAPP_MESSAGES = {
  FORMATION: `🎓 FORMATION SPIRITUELLE - LA VOP

Bonjour ! Je souhaite participer à la formation spirituelle avec :

👨‍🏫 FORMATEURS :
• ANDJ Daniel Jonathan (Fondateur LA VOP)
• Évangéliste Styve Ntoutoume  
• Prophète David SHEKINAH

📚 TYPES DE FORMATION :
• Formation spirituelle
• Coaching personnel
• Prière et intercession
• Autre (précisez)

📱 Contactez-nous pour plus d'informations !

LA VOP - Christ pour la Veuve, l'Orphelin, le Pauvre`,

  PRIERE: `🙏 DEMANDE DE PRIÈRE - LA VOP

Bonjour ! Je souhaite une prière pour :

📝 SUJET DE PRIÈRE :
• Santé et guérison
• Finances et bénédictions
• Famille et relations
• Travail et carrière
• Autre (précisez)

💬 DÉTAILS :
[Veuillez décrire votre demande de prière]

📱 Nous prions pour vous !

LA VOP - Christ pour la Veuve, l'Orphelin, le Pauvre`,

  COACHING: `💼 COACHING PERSONNEL - ANDJ Daniel Jonathan

Bonjour ! Je souhaite un coaching personnel avec Daniel Jonathan pour :

🎯 DOMAINES :
• Développement spirituel
• Entrepreneuriat et business
• Investissement et finances
• Leadership chrétien
• Autre (précisez)

📅 DISPONIBILITÉ :
• Quand souhaitez-vous être contacté ?
• Préférence horaire ?

📱 Contactez-moi pour planifier !

LA VOP - Christ pour la Veuve, l'Orphelin, le Pauvre`,

  DON: `💰 DON - SOUTIEN LA VOP

Bonjour ! Je souhaite faire un don pour soutenir les actions de LA VOP :

🎯 PROGRAMMES :
• Soutien aux orphelinats
• Aide aux veuves
• Actions locales
• Soutien international
• Autre (précisez)

💳 MONTANT :
• Montant libre
• Montant spécifique (précisez)

📱 Merci pour votre générosité !

LA VOP - Christ pour la Veuve, l'Orphelin, le Pauvre`,

  GENERAL: `👋 CONTACT - LA VOP

Bonjour ! Je souhaite des informations sur :

📋 SUJET :
• Nos actions et programmes
• Comment nous aider
• Partenariat
• Information générale
• Autre (précisez)

💬 MESSAGE :
[Votre message ici]

📱 Nous vous répondrons rapidement !

LA VOP - Christ pour la Veuve, l'Orphelin, le Pauvre`
};

export const getWhatsAppUrl = (messageType: keyof typeof WHATSAPP_MESSAGES, phoneNumber: string = '24174791530') => {
  const message = WHATSAPP_MESSAGES[messageType];
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const getCustomWhatsAppUrl = (message: string, phoneNumber: string = '24174791530') => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
