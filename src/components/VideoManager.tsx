import { useState, useRef } from 'react';
import { 
  Video, 
  Upload, 
  Link, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Settings, 
  Trash2, 
  Edit, 
  Eye,
  Download,
  Share2,
  Copy,
  Check,
  AlertCircle,
  Youtube,
  Film,
  FileVideo,
  Image as ImageIcon
} from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  type: 'youtube' | 'vimeo' | 'upload' | 'file';
  url: string;
  thumbnail?: string;
  duration?: string;
  size?: string;
  uploadedAt: string;
  status: 'processing' | 'ready' | 'error';
  description?: string;
  tags?: string[];
}

interface VideoManagerProps {
  onVideoSelect?: (video: VideoItem) => void;
  onVideoDelete?: (id: string) => void;
  onVideoUpdate?: (video: VideoItem) => void;
}

const VideoManager = ({ onVideoSelect, onVideoDelete, onVideoUpdate }: VideoManagerProps) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'upload' | 'url'>('gallery');
  const [videos, setVideos] = useState<VideoItem[]>([
    {
      id: '1',
      title: 'VOP Youth - Mission d\'Espoir à l\'Hôpital',
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=kFQCYR6tiTw',
      thumbnail: '/images/videos/vop-youth-hopital.jpg',
      duration: '5:30',
      uploadedAt: '2025-01-15',
      status: 'ready',
      description: 'Notre équipe VOP Youth apporte réconfort et espoir aux patients',
      tags: ['VOP Youth', 'Hôpital', 'Mission', 'Espoir']
    },
    {
      id: '2',
      title: 'Distribution de Dons - Familles dans le Besoin',
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=example2',
      thumbnail: '/images/videos/distribution-dons.jpg',
      duration: '3:45',
      uploadedAt: '2025-01-10',
      status: 'ready',
      description: 'Témoignages authentiques de nos actions de dons',
      tags: ['Dons', 'Familles', 'Témoignages']
    }
  ]);

  const [newVideo, setNewVideo] = useState({
    title: '',
    url: '',
    description: '',
    tags: ''
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Gestion de l'upload de fichiers
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Simuler l'upload progressif
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      // Créer l'objet vidéo
      const videoItem: VideoItem = {
        id: Date.now().toString() + i,
        title: file.name.replace(/\.[^/.]+$/, ""),
        type: 'upload',
        url: URL.createObjectURL(file),
        size: formatFileSize(file.size),
        uploadedAt: new Date().toISOString().split('T')[0],
        status: 'processing',
        description: '',
        tags: []
      };

      // Simuler le traitement
      setTimeout(() => {
        setVideos(prev => [...prev, { ...videoItem, status: 'ready' }]);
        setUploadProgress(0);
        setIsUploading(false);
      }, 2000);
    }
  };

  // Ajouter une vidéo par URL
  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newVideo.url || !newVideo.title) return;

    const videoType = getVideoType(newVideo.url);
    const videoItem: VideoItem = {
      id: Date.now().toString(),
      title: newVideo.title,
      type: videoType,
      url: newVideo.url,
      uploadedAt: new Date().toISOString().split('T')[0],
      status: 'ready',
      description: newVideo.description,
      tags: newVideo.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    setVideos(prev => [...prev, videoItem]);
    setNewVideo({ title: '', url: '', description: '', tags: '' });
  };

  // Déterminer le type de vidéo
  const getVideoType = (url: string): 'youtube' | 'vimeo' | 'upload' | 'file' => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.startsWith('blob:')) return 'upload';
    return 'file';
  };

  // Obtenir l'icône selon le type
  const getVideoIcon = (type: string) => {
    switch (type) {
      case 'youtube': return <Youtube className="w-5 h-5 text-red-500" />;
      case 'vimeo': return <Film className="w-5 h-5 text-blue-500" />;
      case 'upload': return <FileVideo className="w-5 h-5 text-green-500" />;
      default: return <Video className="w-5 h-5 text-gray-500" />;
    }
  };

  // Formater la taille de fichier
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Copier le lien
  const copyLink = (video: VideoItem) => {
    navigator.clipboard.writeText(video.url);
    setCopiedId(video.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Supprimer une vidéo
  const deleteVideo = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette vidéo ?')) {
      setVideos(prev => prev.filter(v => v.id !== id));
      if (onVideoDelete) onVideoDelete(id);
    }
  };

  // Sélectionner une vidéo
  const selectVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    if (onVideoSelect) onVideoSelect(video);
  };

  return (
    <div className="space-y-6">
      {/* Header avec onglets */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'gallery'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Eye className="w-4 h-4 inline mr-2" />
            Galerie
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'upload'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Upload className="w-4 h-4 inline mr-2" />
            Upload
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'url'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Link className="w-4 h-4 inline mr-2" />
            URL
          </button>
        </div>
      </div>

      {/* Contenu selon l'onglet actif */}
      {activeTab === 'gallery' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-100">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    {getVideoIcon(video.type)}
                  </div>
                )}
                
                {/* Overlay avec contrôles */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <button
                    onClick={() => selectVideo(video)}
                    className="opacity-0 hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100"
                  >
                    <Play className="w-6 h-6 text-gray-900" />
                  </button>
                </div>

                {/* Badge de statut */}
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    video.status === 'ready' ? 'bg-green-100 text-green-800' :
                    video.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {video.status === 'ready' ? 'Prêt' :
                     video.status === 'processing' ? 'Traitement' : 'Erreur'}
                  </span>
                </div>

                {/* Durée */}
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex space-x-1 ml-2">
                    <button
                      onClick={() => copyLink(video)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedId === video.id ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => deleteVideo(video.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <div className="flex items-center space-x-2">
                    {getVideoIcon(video.type)}
                    <span>{video.type.toUpperCase()}</span>
                  </div>
                  <span>{video.uploadedAt}</span>
                </div>

                {video.description && (
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {video.description}
                  </p>
                )}

                {video.tags && video.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {video.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {video.tags.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{video.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'upload' && (
        <div className="space-y-6">
          {/* Zone de drop */}
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Glissez vos vidéos ici
            </h3>
            <p className="text-gray-600 mb-4">
              ou cliquez pour sélectionner des fichiers
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sélectionner des fichiers
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="video/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Barre de progression */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Upload en cours...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Formats supportés */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Formats supportés :</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="px-2 py-1 bg-white rounded">MP4</span>
              <span className="px-2 py-1 bg-white rounded">MOV</span>
              <span className="px-2 py-1 bg-white rounded">AVI</span>
              <span className="px-2 py-1 bg-white rounded">WMV</span>
              <span className="px-2 py-1 bg-white rounded">MKV</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Taille maximale : 100MB par fichier
            </p>
          </div>
        </div>
      )}

      {activeTab === 'url' && (
        <form onSubmit={handleUrlSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Titre de la vidéo
            </label>
            <input
              type="text"
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: VOP Youth - Mission d'Espoir"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL de la vidéo
            </label>
            <input
              type="url"
              value={newVideo.url}
              onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://www.youtube.com/watch?v=..."
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Supporte YouTube, Vimeo et liens directs vers des fichiers vidéo
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (optionnel)
            </label>
            <textarea
              value={newVideo.description}
              onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Décrivez le contenu de cette vidéo..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (séparés par des virgules)
            </label>
            <input
              type="text"
              value={newVideo.tags}
              onChange={(e) => setNewVideo({ ...newVideo, tags: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="VOP Youth, Mission, Hôpital, Espoir"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Link className="w-4 h-4" />
            <span>Ajouter la vidéo</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default VideoManager;
