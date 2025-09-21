import { Calendar, User, ArrowRight, Heart, Users, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';
import { getPublishedArticles } from '../utils/articleSync';

const BlogSection = () => {
  const articles = getPublishedArticles();

  const categories = [
    { name: "Tous", count: articles.length, icon: BookOpen },
    ...Array.from(new Set(articles.map(article => article.category))).map(category => ({
      name: category,
      count: articles.filter(article => article.category === category).length,
      icon: category === "Actions Locales" ? Globe : 
            category === "Jeunesse" ? Users :
            category === "Dons & Impact" ? Heart :
            category === "Soutien Veuves" ? Heart :
            category === "Assemblée" ? Globe :
            category === "Formation" ? BookOpen :
            category === "International" ? Globe :
            Heart
    }))
  ];

  const stats = [
    { icon: BookOpen, value: `${articles.length}+`, label: "Articles publiés" },
    { icon: Users, value: "3K+", label: "Abonnés TikTok" },
    { icon: Globe, value: "3", label: "Pays de soutien" }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-[#00B0F0] text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-[#003399] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                className="flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all bg-white text-[#003399] hover:bg-[#00B0F0] hover:text-white shadow-lg hover:shadow-xl"
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          {articles.filter(article => article.featured).map((article) => (
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
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#003399] mb-4 leading-tight">
                    {article.title}
                  </h3>
                  
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
                    
                    <Link 
                      to={`/blog/article/${article.id}`}
                      className="flex items-center space-x-2 text-[#00B0F0] font-semibold hover:text-[#003399] transition-colors group"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.filter(article => !article.featured).map((article) => (
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
                
                <h3 className="text-xl font-bold text-[#003399] mb-3 leading-tight">
                  {article.title}
                </h3>
                
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
                  
                  <Link 
                    to={`/blog/article/${article.id}`}
                    className="text-[#00B0F0] hover:text-[#003399] transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </section>
  );
};

export default BlogSection;
