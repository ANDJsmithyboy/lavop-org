import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Heart, Share2, MessageCircle, Eye } from 'lucide-react';
import { getArticleById } from '../utils/articleSync';

const BlogArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(parseInt(id || '0'));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-[#00B0F0] hover:text-[#003399] transition-colors">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[#00B0F0] hover:text-[#003399] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {article.views} vues
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />
            
            {/* Article Stats */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{article.likes} j'aime</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{article.comments} commentaires</span>
                  </button>
                </div>
                
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00B0F0] transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Partager</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Soutenez nos actions</h2>
            <p className="text-xl text-white/90 mb-8">
              Chaque don finance nos actions de terrain. Merci !
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <a
                href="https://obsxsyzu.mychariow.store/don-montant-libre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                5 000 FCFA
              </a>
              <a
                href="https://obsxsyzu.mychariow.store/don-montant-libre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                10 000 FCFA
              </a>
              <a
                href="https://obsxsyzu.mychariow.store/don-montant-libre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                25 000 FCFA
              </a>
              <a
                href="https://obsxsyzu.mychariow.store/don-montant-libre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#003399] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Donner un montant libre
              </a>
            </div>
            
            <p className="text-sm text-white/80">
              Paiement sécurisé • Mobile Money & Cartes • FCFA, EUR, USD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;