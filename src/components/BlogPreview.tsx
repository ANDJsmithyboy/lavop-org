import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
      excerpt: "Une journée mémorable de partage et d'amour avec l'Association Tous Différents. Découvrez comment nos dons apportent de la joie et de l'espoir aux enfants handicapés de Libreville.",
      author: "Équipe VOP",
      date: "15 Juin 2025",
      category: "Actions Locales",
      image: "/images/activities/IMG-20250614-WA0058.jpg",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Dons VOP : Impact Direct sur le Terrain",
      excerpt: "Témoignages authentiques de nos actions de dons et de soutien aux familles dans le besoin. Chaque don fait la différence.",
      author: "ANDJ Daniel Jonathan",
      date: "7 Juillet 2025",
      category: "Dons & Impact",
      image: "/images/activities/IMG-20250614-WA0099.jpg",
      readTime: "3 min",
      featured: false
    },
    {
      id: 3,
      title: "VOP Youth : Mission d'Espoir à l'Hôpital",
      excerpt: "Notre équipe VOP Youth a apporté réconfort et espoir aux patients de l'hôpital de Libreville. L'amour de Dieu en action.",
      author: "Équipe VOP Youth",
      date: "27 Mars 2025",
      category: "Jeunesse",
      image: "/images/activities/1000151414.jpg",
      readTime: "4 min",
      featured: false
    }
  ];

  return (
    <section id="blog-preview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Blog & Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez nos actions, découvrez nos témoignages et restez informé de l'impact de vos dons
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          {featuredArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#CC3366] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Article à la une
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span>{article.readTime} de lecture</span>
                    <span>•</span>
                    <span className="bg-[#00B0F0]/10 text-[#00B0F0] px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <Link to={`/blog/article/${article.id}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#003399] mb-4 leading-tight hover:text-[#00B0F0] transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#00B0F0] rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#003399]">{article.author}</div>
                        <div className="text-sm text-gray-500">Auteur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredArticles.filter(article => !article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00B0F0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <Link to={`/blog/article/${article.id}`}>
                  <h3 className="text-xl font-bold text-[#003399] mb-3 leading-tight hover:text-[#00B0F0] transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#003399]">{article.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="group inline-flex items-center space-x-2 bg-[#00B0F0] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#003399] transition-colors transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            <span>Voir tous les articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
