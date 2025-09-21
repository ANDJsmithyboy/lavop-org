import { Play, ExternalLink, Heart, Users, Globe } from 'lucide-react';

const VOPVideosSection = () => {
  const tiktokVideos = [
    {
      id: 1,
      title: "Dons à l'Association Tous Différents",
      description: "Juin 2025 - Dons de l'ONG La VOP aux enfants handicapés. Mission d'amour et de compassion.",
      url: "https://www.tiktok.com/@christpourlavop/video/7516187714329382150",
      thumbnail: "/videos/1000102806.mp4", // Utilise la vidéo locale comme thumbnail
      hashtags: ["#gabontiktok🇬🇦", "#tousdifférents", "#donsvop"],
      music: "HOLY FOREVER (Instrumental) - Glorify & CHILLØUT",
      date: "Juin 2025"
    },
    {
      id: 2,
      title: "Mission VOP - Ésaïe 1:17",
      description: "Apprenez à faire le bien, recherchez la justice, protégez l'opprimé. C'est le rôle de la VOP.",
      url: "https://www.tiktok.com/@christpourlavop/video/7243751317095730438",
      thumbnail: "/videos/1000102808.mp4", // Utilise la vidéo locale comme thumbnail
      hashtags: ["#amour", "#soldatsduchrist", "#missionvop"],
      music: "Citation biblique Ésaïe 1:17",
      date: "2024"
    }
  ];

  const localVideos = [
    {
      id: 1,
      title: "Association Tous Différents - Dons VOP",
      description: "Moment de partage et de joie avec les enfants handicapés. L'amour de Dieu en action.",
      video: "/videos/1000102806.mp4",
      thumbnail: "/images/activities/1000151414.jpg",
      duration: "2:30",
      category: "Dons & Actions",
      tiktokUrl: "https://www.tiktok.com/@christpourlavop/video/7516187714329382150"
    },
    {
      id: 2,
      title: "Dons de la VOP en Action",
      description: "Démonstration concrète de l'amour de Dieu par les œuvres et la charité.",
      video: "/videos/1000102808.mp4",
      thumbnail: "/images/activities/IMG-20250614-WA0058.jpg",
      duration: "1:45",
      category: "Impact Local",
      tiktokUrl: "https://www.tiktok.com/@christpourlavop/video/7243751317095730438"
    },
    {
      id: 3,
      title: "ANDJ Daniel Jonathan - Fondateur VOP",
      description: "Message du fondateur et visionnaire de La VOP. Témoignage et vision pour l'avenir.",
      video: "/videos/1000151380.mp4",
      thumbnail: "/images/founder/photo_andj_ceo.jpg",
      duration: "3:20",
      category: "Leadership",
      tiktokUrl: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vidéos VOP en Action
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez nos actions concrètes, nos dons et notre mission d'amour à travers nos vidéos
          </p>
        </div>

        {/* TikTok Videos Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Nos Vidéos TikTok</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiktokVideos.map((video) => (
              <div key={video.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                    <Play className="w-8 h-8 text-[#003399]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{video.title}</h4>
                    <p className="text-white/90 text-sm mb-2">{video.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {video.hashtags.map((tag, index) => (
                        <span key={index} className="text-[#FFD700] text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/70 text-xs mb-3">
                      🎵 {video.music}
                    </p>
                    <p className="text-white/70 text-xs">
                      📅 {video.date}
                    </p>
                  </div>
                </div>
                
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-6 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
                >
                  <span>Voir sur TikTok</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Local Videos Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Vidéos Exclusives VOP</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localVideos.map((video) => (
              <div key={video.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                {/* Video Player */}
                <div className="relative">
                  <video
                    className="w-full h-48 object-cover rounded-t-2xl"
                    poster={video.thumbnail}
                    controls
                    preload="metadata"
                  >
                    <source src={video.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                  
                  {/* TikTok Link Overlay */}
                  {video.tiktokUrl && (
                    <div className="absolute top-2 right-2">
                      <a
                        href={video.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-black/90 transition-colors flex items-center space-x-1"
                      >
                        <span>🎵</span>
                        <span>TikTok</span>
                      </a>
                    </div>
                  )}
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-[#FFD700] text-[#003399] text-xs font-bold px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2">{video.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">{video.description}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {video.tiktokUrl && (
                      <a
                        href={video.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-3 py-2 rounded-full text-xs font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <span>🎵</span>
                        <span>TikTok</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <button 
                      onClick={() => {
                        if (video.tiktokUrl) {
                          // Partager le lien TikTok
                          if (navigator.share) {
                            navigator.share({
                              title: video.title,
                              text: video.description,
                              url: video.tiktokUrl
                            });
                          } else {
                            // Fallback: copier le lien
                            navigator.clipboard.writeText(video.tiktokUrl);
                            alert('Lien TikTok copié !');
                          }
                        } else {
                          // Partager le contenu général
                          const shareText = `${video.title}\n\n${video.description}\n\n#LAVOP #ChristPourLaVOP`;
                          if (navigator.share) {
                            navigator.share({
                              title: video.title,
                              text: shareText
                            });
                          } else {
                            navigator.clipboard.writeText(shareText);
                            alert('Contenu copié !');
                          }
                        }
                      }}
                      className="flex items-center space-x-1 bg-white/20 text-white px-3 py-2 rounded-full text-xs font-semibold hover:bg-white/30 transition-colors"
                    >
                      <Heart className="w-3 h-3" />
                      <span>Partager</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Suivez-nous sur TikTok</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Restez connecté avec nos actions quotidiennes, nos dons et notre mission d'amour. 
              Chaque vidéo témoigne de l'amour de Dieu en action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.tiktok.com/@christpourlavop?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>@christpourlavop</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/impact"
                className="inline-flex items-center space-x-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                <Heart className="w-5 h-5" />
                <span>Notre Impact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VOPVideosSection;
