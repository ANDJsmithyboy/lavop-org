import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Validation email
      if (!email || !email.includes('@')) {
        throw new Error('Veuillez entrer une adresse email valide');
      }

      // Sauvegarder dans localStorage
      const subscribers = JSON.parse(localStorage.getItem('vop_newsletter_subscribers') || '[]');
      
      // Vérifier si déjà abonné
      if (subscribers.includes(email)) {
        setStatus('error');
        setMessage('Cette adresse email est déjà abonnée à notre newsletter');
        return;
      }

      // Ajouter l'email
      subscribers.push(email);
      localStorage.setItem('vop_newsletter_subscribers', JSON.stringify(subscribers));

      // Créer le message WhatsApp pour notification
      const whatsappMessage = `📧 NOUVEL ABONNÉ NEWSLETTER VOP

Email: ${email}
Date: ${new Date().toLocaleDateString('fr-FR')}
Heure: ${new Date().toLocaleTimeString('fr-FR')}

Total abonnés: ${subscribers.length}

---
Envoyé depuis le site web VOP`;

      const whatsappUrl = `https://wa.me/24174791530?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Ouvrir WhatsApp pour notification
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setMessage('Merci ! Vous êtes maintenant abonné à notre newsletter');
      setEmail('');

      // Reset après 3 secondes
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);

    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] rounded-3xl p-8 md:p-12 text-white text-center">
      <h3 className="text-3xl font-bold mb-4">Restez informé de nos actions</h3>
      <p className="text-xl text-white/90 mb-8">
        Recevez nos actualités et témoignages directement dans votre boîte email
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            required
          />
          <button 
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-[#003399] border-t-transparent rounded-full animate-spin"></div>
                <span>Inscription...</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>S'abonner</span>
              </>
            )}
          </button>
        </div>
        
        {/* Status Message */}
        {status !== 'idle' && (
          <div className={`mt-4 p-3 rounded-lg flex items-center justify-center space-x-2 ${
            status === 'success' 
              ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
              : 'bg-red-500/20 text-red-100 border border-red-400/30'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span className="text-sm">{message}</span>
          </div>
        )}
        
        <p className="text-white/70 text-sm mt-4">
          Nous respectons votre vie privée. Désabonnement possible à tout moment.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;
