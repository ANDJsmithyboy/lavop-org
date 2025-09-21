import { Facebook, Instagram, Youtube, Mail, Phone, Music } from 'lucide-react';
import OptimizedLogo from './OptimizedLogo';

const Footer = () => {
  return (
    <footer className="bg-[#003399] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <OptimizedLogo 
                className="h-14 w-auto" 
                alt="Logo de la VOP" 
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              L'amour de Dieu en action. Jésus-Christ ressuscité, annoncé par les œuvres et la vérité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00B0F0]">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-300 hover:text-[#66CCFF] transition-colors">À propos</a></li>
              <li><a href="/#actions" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Nos Actions</a></li>
              <li><a href="/boutique" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Boutique</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Nos Ministères</h4>
            <ul className="space-y-2">
              <li><a href="/#ministries" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Jeunesse VOP</a></li>
              <li><a href="https://www.youtube.com/watch?v=kFQCYR6tiTw" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Musique de chanson VOP</a></li>
                    <li><a href="https://wa.me/24174791530?text=🎓%20FORMATION%20SPIRITUELLE%20-%20LA%20VOP%0A%0ABonjour%20!%20Je%20souhaite%20participer%20à%20la%20formation%20spirituelle%20avec%20:%0A%0A👨‍🏫%20FORMATEURS%20:%0A•%20ANDJ%20Daniel%20Jonathan%20(Fondateur%20LA%20VOP)%0A•%20Évangéliste%20Styve%20Ntoutoume%20%20%0A•%20Prophète%20David%20SHEKINAH%0A%0A📚%20TYPES%20DE%20FORMATION%20:%0A•%20Formation%20spirituelle%0A•%20Coaching%20personnel%0A•%20Prière%20et%20intercession%0A•%20Autre%20(précisez)%0A%0A📱%20Contactez-nous%20pour%20plus%20d'informations%20!%0A%0ALA%20VOP%20-%20Christ%20pour%20la%20Veuve,%20l'Orphelin,%20le%20Pauvre" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-[#FFA500] font-semibold transition-colors">Formation (WhatsApp avec Daniel Jonathan, Évangéliste Styve et Prophète David SHEKINAH)</a></li>
              <li><a href="/#actions" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Évangélisation</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Admin</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#CC3366]">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00B0F0]" />
                <a href="mailto:christpourlavop@gmail.com" className="text-gray-300 text-sm hover:text-[#66CCFF] transition-colors">contact@lavop.org</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00B0F0]" />
                <a href="https://wa.me/24174791530?text=👋%20Bonjour%20!%20Je%20souhaite%20vous%20contacter%20pour%20plus%20d'informations%20sur%20LA%20VOP." target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-[#66CCFF] transition-colors">+241 74 79 15 30</a>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-[#66CCFF] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-[#CC3366] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.youtube.com/@christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                  <Youtube className="w-5 h-5 text-gray-300 hover:text-[#FFD700] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.tiktok.com/@christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <Music className="w-5 h-5 text-gray-300 hover:text-[#FF6B9D] cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#00B0F0] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 La VOP. Tous droits réservés. (2019-2025)
              <br />
              {/* SEO Keywords - Hidden but effective */}
              <div className="hidden">
                <span>ANDJ Daniel Jonathan, SmartANDJ AI Technologies, VOP Youth, VOP Song, Medium, TikTok, LinkedIn, GitHub, entrepreneur, prophète, Gabon, Libreville, ONG, orphelins, veuves, coaching, investissement, crypto, Bitcoin, algorithme du ciel, maths de Dieu, coaching ultime, prophétie Bitcoin, paradoxe existence, chrétien lion brebis, formation WhatsApp, évangélisation, ministère apostolique, apôtre Styve Ntoutoume, apôtre David Oyedepo, intelligence artificielle, objets connectés, SanoAI Predict, GabomaGPT, startup, innovation technologique, transformation digitale, leadership chrétien, vision entrepreneuriale, impact social, développement durable, éducation, santé, technologie, innovation, startup gabonaise, entrepreneur gabonais, prophète entrepreneur, architecte du futur, SmartANDJ, VOP Technologies, LA VOP International, Christ pour la Veuve l'Orphelin le Pauvre, Toutes les Nations Internationales</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#66CCFF] text-sm italic font-medium">
                "Apprenez à faire le bien, recherchez la justice, protégez l'opprimé, faites droit à l'orphelin, défendez la veuve." - Ésaïe 1:17
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;