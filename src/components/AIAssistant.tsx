import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Loader2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Bonjour ! Je suis VOP AI, votre assistant IA personnel. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simuler une réponse IA
    setTimeout(() => {
      const response = generateAIResponse(inputMessage);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('don') || input.includes('soutenir')) {
      return 'Pour soutenir LA VOP, vous pouvez faire un don via notre page de don ou acheter nos produits. Chaque contribution nous aide à aider les orphelins et les veuves. Voulez-vous que je vous guide vers nos programmes de don ?';
    }
    
    if (input.includes('boutique') || input.includes('acheter')) {
      return 'Notre boutique propose des livres spirituels, des vêtements VOP et des produits numériques. Vous pouvez visiter notre section boutique pour découvrir nos produits. Souhaitez-vous des informations sur un produit spécifique ?';
    }
    
    if (input.includes('coaching') || input.includes('formation')) {
      return 'Daniel Jonathan propose des sessions de coaching personnalisées. Vous pouvez le contacter directement via WhatsApp au +241 65 51 58 77 ou par email à jonathanakarentoutoume@gmail.com. Voulez-vous que je vous aide à le contacter ?';
    }
    
    if (input.includes('livre') || input.includes('publication')) {
      return 'Nous avons plusieurs publications : "Le Coaching Ultime", "Les maths de Dieu", "Chrétien es-tu un Lion ou une Brebis ?", et bientôt "L\'Algorithme du Ciel" et "La Prophétie de Bitcoin". Lequel vous intéresse ?';
    }
    
    if (input.includes('contact') || input.includes('adresse')) {
      return 'Vous pouvez nous contacter via :\n• Email : contact@lavop.org\n• Téléphone : +241 74 79 15 30\n• WhatsApp : +241 65 51 58 77\n• Adresse : Libreville, Gabon\n\nComment puis-je vous aider davantage ?';
    }
    
    if (input.includes('mission') || input.includes('vop')) {
      return 'LA VOP (L\'Amour de Dieu en Action) est une ONG qui aide les orphelins et les veuves. Notre mission est d\'apporter l\'amour de Dieu à travers des actions concrètes dans plus de 12 pays. Voulez-vous en savoir plus sur nos programmes ?';
    }
    
    if (input.includes('merci') || input.includes('aide')) {
      return 'De rien ! Je suis là pour vous aider 24h/24. N\'hésitez pas à me poser d\'autres questions sur LA VOP, nos programmes, ou nos services.';
    }
    
    return 'Je comprends votre question. Pour vous donner la meilleure réponse, pourriez-vous me donner plus de détails ? Je peux vous aider avec nos programmes, nos produits, nos services de coaching, ou toute autre question sur LA VOP.';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#00B0F0] text-white p-4 rounded-full shadow-lg hover:bg-[#003399] transition-all duration-300 z-50 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <div className="absolute -top-2 -right-2 bg-[#FFD700] text-[#003399] text-xs px-2 py-1 rounded-full font-bold">
            IA
          </div>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[500px] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">VOP AI</h3>
                  <p className="text-sm opacity-90">Assistant IA 24h/24</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-[#00B0F0] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'assistant' && (
                        <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
                      )}
                      {message.type === 'user' && (
                        <User className="w-4 h-4 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl flex items-center space-x-2">
                    <Bot className="w-4 h-4" />
                    <div className="flex space-x-1">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">L'assistant tape...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-[#00B0F0] text-white p-2 rounded-full hover:bg-[#003399] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
