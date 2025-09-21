import { Calendar, User, ArrowRight, Heart, Users, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
      excerpt: "Le 15 juin 2025 restera gravé dans nos mémoires comme une journée exceptionnelle de partage et d'amour. Notre équipe VOP s'est rendue à l'Association Tous Différents de Libreville pour une mission spéciale dédiée aux enfants handicapés.",
      author: "Équipe VOP",
      date: "15 Juin 2025",
      category: "Actions Locales",
      image: "/images/activities/1000151414.jpg",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "VOP Youth : Mission d'Espoir à l'Hôpital de Libreville",
      excerpt: "Notre équipe VOP Youth a apporté réconfort et espoir aux patients de l'hôpital de Libreville. Une mission touchante qui démontre l'amour de Dieu en action.",
      author: "Équipe VOP Youth",
      date: "27 Mars 2025",
      category: "Jeunesse",
      image: "/images/activities/1000151414.jpg",
      readTime: "4 min",
      featured: false
    },
    {
      id: 3,
      title: "Dons VOP : Impact Direct sur le Terrain",
      excerpt: "Témoignages authentiques de nos actions de dons et de soutien aux familles dans le besoin. Chaque don fait la différence dans la vie des plus vulnérables.",
      author: "ANDJ Daniel Jonathan",
      date: "7 Juillet 2025",
      category: "Dons & Impact",
      image: "/images/activities/IMG-20250614-WA0099.jpg",
      readTime: "3 min",
      featured: false
    },
    {
      id: 4,
      title: "Visite chez une Veuve - Soutien Concret",
      excerpt: "Accompagnement et soutien des veuves dans le besoin. Nos actions concrètes d'amour et de compassion envers les plus vulnérables de notre société.",
      author: "ANDJ Daniel Jonathan",
      date: "Novembre 2024",
      category: "Soutien Veuves",
      image: "/images/activities/1000151429.jpg",
      readTime: "2 min",
      featured: false
    },
    {
      id: 5,
      title: "Assemblée Générale VOP 2024 : Bilan et Perspectives",
      excerpt: "Réunion annuelle au siège de La VOP à Libreville. Bilan des actions réalisées et perspectives ambitieuses pour l'année 2025.",
      author: "Équipe VOP",
      date: "Décembre 2024",
      category: "Assemblée",
      image: "/images/activities/1000151368.jpg",
      readTime: "4 min",
      featured: false
    },
    {
      id: 6,
      title: "Formation Spirituelle VOP : Équipement des Leaders",
      excerpt: "Programme de formation intensive pour les leaders de demain. Développement spirituel et leadership chrétien au service de la communauté.",
      author: "Équipe Formation VOP",
      date: "15 Janvier 2025",
      category: "Formation",
      image: "/images/activities/IMG-20250614-WA0058.jpg",
      readTime: "6 min",
      featured: false
    },
    {
      id: 7,
      title: "Mission Internationale : Soutien aux Familles à l'Étranger",
      excerpt: "Nos actions de soutien financier aux familles gabonaises vivant à l'étranger. Solidarité internationale et entraide communautaire.",
      author: "Équipe Internationale VOP",
      date: "3 Février 2025",
      category: "International",
      image: "/images/activities/IMG-20250614-WA0079.jpg",
      readTime: "3 min",
      featured: false
    },
    {
      id: 8,
      title: "Témoignages de Transformation : Vies Changées par l'Amour",
      excerpt: "Histoires inspirantes de vies transformées grâce à nos actions. Témoignages authentiques de l'impact de l'amour de Dieu dans la communauté.",
      author: "Équipe Communication VOP",
      date: "20 Février 2025",
      category: "Témoignages",
      image: "/images/activities/1000151414.jpg",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = [
    { name: "Tous", count: 8, icon: BookOpen },
    { name: "Actions Locales", count: 1, icon: Globe },
    { name: "Jeunesse", count: 1, icon: Users },
    { name: "Dons & Impact", count: 1, icon: Heart },
    { name: "Soutien Veuves", count: 1, icon: Heart },
    { name: "Assemblée", count: 1, icon: Globe },
    { name: "Formation", count: 1, icon: BookOpen },
    { name: "International", count: 1, icon: Globe },
    { name: "Témoignages", count: 1, icon: Heart }
  ];

  const stats = [
    { icon: BookOpen, value: "8+", label: "Articles publiés" },
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
        <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Restez informé de nos actions</h3>
          <p className="text-xl text-white/90 mb-8">
            Recevez nos actualités et témoignages directement dans votre boîte email
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <button className="bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
              S'abonner
            </button>
          </div>
          
          <p className="text-white/70 text-sm mt-4">
            Nous respectons votre vie privée. Désabonnement possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
