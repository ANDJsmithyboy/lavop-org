import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    // Si on arrive sur /contact, rediriger vers la section contact de la page d'accueil
    if (location.pathname === '/contact') {
      // Attendre un peu pour que la page se charge
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          // Si la section n'existe pas, rediriger vers l'accueil
          window.location.href = '/#contact';
        }
      }, 100);
    }
  }, [location.pathname]);

  return null;
};

export default ContactRedirect;
