import { Play, Heart, Users, ExternalLink } from 'lucide-react';

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Sortie VOP 2024",
      description: "Moments de joie et de partage lors de nos sorties",
      video: "/src/assets/videos/1000102808.mp4",
      thumbnail: "/src/assets/images/activities/IMG-20250614-WA0058.jpg",
      duration: "2:30",
      views: "3.2K",
      tiktokUrl: "https://tiktok.com/@lavop_org"
    },
    {
      id: 2,
      title: "Activités VOP",
      description: "Découvrez nos actions sur TikTok avec 3000+ abonnés",
      video: "/src/assets/videos/1000102806.mp4",
      thumbnail: "/src/assets/images/activities/1000151414.jpg",
      duration: "1:45",
      views: "2.8K",
      tiktokUrl: "https://tiktok.com/@lavop_org"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Vidéos
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez nos actions en vidéo et suivez-nous sur TikTok
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((video) => (
            <div key={video.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <div className="relative">
                <video 
                  className="w-full h-64 object-cover"
                  poster={video.thumbnail}
                  controls
                >
                  <source src={video.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span className="text-sm">{video.views} vues</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-white/90 mb-4">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={video.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir sur TikTok</span>
                  </a>
                  <div className="flex items-center space-x-4 text-white/70">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">3K+</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">3K+ abonnés</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TikTok CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Suivez-nous sur TikTok
            </h3>
            <p className="text-white/90 mb-6">
              Rejoignez notre communauté de 3000+ abonnés et découvrez nos actions en temps réel
            </p>
            <a 
              href="https://tiktok.com/@lavop_org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Suivre @lavop_org</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
