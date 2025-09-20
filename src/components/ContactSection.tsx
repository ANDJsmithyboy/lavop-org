import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reason: 'general'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Sauvegarder dans la base de données locale
      const contactData = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'nouveau'
      };
      
      // Récupérer les contacts existants
      const existingContacts = JSON.parse(localStorage.getItem('vop_contacts') || '[]');
      existingContacts.push(contactData);
      localStorage.setItem('vop_contacts', JSON.stringify(existingContacts));
      
      // Créer le message WhatsApp
      const whatsappMessage = `Nouveau message de contact VOP:
      
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Motif: ${contactReasons.find(r => r.value === formData.reason)?.label}
Sujet: ${formData.subject}

Message:
${formData.message}

---
Envoyé depuis le site web VOP`;

      // Créer le lien WhatsApp
      const whatsappUrl = `https://wa.me/24174791530?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Créer le lien email
      const emailSubject = `[VOP Contact] ${formData.subject}`;
      const emailBody = `Bonjour,

Vous avez reçu un nouveau message de contact depuis le site web VOP :

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Motif: ${contactReasons.find(r => r.value === formData.reason)?.label}
Sujet: ${formData.subject}

Message:
${formData.message}

---
Ce message a été envoyé automatiquement depuis le site web VOP.`;

      const emailUrl = `mailto:jonathanakarentoutoume@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Ouvrir WhatsApp et email
      window.open(whatsappUrl, '_blank');
      window.open(emailUrl, '_blank');
      
      // Afficher un message de confirmation
      alert('Message envoyé avec succès ! Nous vous répondrons rapidement.');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        reason: 'general'
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactReasons = [
    { value: 'general', label: 'Information générale' },
    { value: 'donation', label: 'Don ou partenariat' },
    { value: 'volunteer', label: 'Bénévolat et engagement' },
    { value: 'prayer', label: 'Demande de prière' },
    { value: 'testimony', label: 'Partager un témoignage' },
    { value: 'ministry', label: 'Rejoindre un ministère' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Entrons en Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour vous accompagner dans votre cheminement spirituel et répondre à vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#003399] mb-6">
              Envoyez-nous un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#003399] font-semibold mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#00B0F0] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-[#003399] font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#00B0F0] focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Phone and Reason */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#003399] font-semibold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#00B0F0] focus:outline-none transition-colors"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
                <div>
                  <label className="block text-[#003399] font-semibold mb-2">Motif du contact *</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#00B0F0] focus:outline-none transition-colors"
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[#003399] font-semibold mb-2">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#00B0F0] focus:outline-none transition-colors"
                  placeholder="Objet de votre message"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#003399] font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-[#00B0F0] focus:outline-none transition-colors resize-none"
                  placeholder="Partagez votre message, vos questions ou vos besoins..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00B0F0] to-[#003399] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#00B0F0] to-[#003399] text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Direct</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-white/90">contact@lavop.org</p>
                    <p className="text-white/90 text-sm">jonathanakarentoutoume@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p className="text-white/90">+241 07 47 91 530</p>
                    <p className="text-white/90 text-sm">WhatsApp disponible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-white/90">+241 07 47 91 530</p>
                    <p className="text-white/90 text-sm">Disponible 24h/7j</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Siège Social</h4>
                    <p className="text-white/90">Libreville, Belle Vue II</p>
                    <p className="text-white/90">Immeuble ANZAL, Gabon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-[#00B0F0]" />
                <h4 className="text-lg font-bold text-[#003399]">Heures d'ouverture</h4>
              </div>
              
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold">10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-[#CC3366] font-semibold">Fermé (Culte)</span>
                </div>
              </div>
            </div>

            {/* Global Presence */}
            <div className="bg-[#FFD700]/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-[#FFD700]" />
                <h4 className="text-lg font-bold text-[#003399]">Présence Mondiale</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-[#003399] mb-2">Europe</h5>
                  <p className="text-gray-600">France • Royaume-Uni</p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#003399] mb-2">Afrique</h5>
                  <p className="text-gray-600">Gabon • Cameroun • RDC • Angola</p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#003399] mb-2">Amérique</h5>
                  <p className="text-gray-600">Canada • USA • Haïti</p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#003399] mb-2">Asie</h5>
                  <p className="text-gray-600">Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-[#CC3366]/10 border-2 border-[#CC3366]/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#CC3366] mb-4">
            Besoin d'Aide Urgente ?
          </h3>
          <p className="text-gray-700 mb-6">
            Si vous traversez une situation difficile ou avez besoin d'une aide immédiate, n'hésitez pas à nous contacter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/24174791530" target="_blank" rel="noopener noreferrer" className="bg-[#CC3366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#003399] transition-colors">
              Appel d'Urgence
            </a>
            <a href="https://wa.me/24174791530" target="_blank" rel="noopener noreferrer" className="border-2 border-[#CC3366] text-[#CC3366] px-8 py-3 rounded-full font-semibold hover:bg-[#CC3366] hover:text-white transition-all">
              Demande de Prière
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;