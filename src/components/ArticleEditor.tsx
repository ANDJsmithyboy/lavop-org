import { useState, useRef, useEffect } from 'react';
import { 
  Bold, Italic, Underline, Link, List, AlignLeft, AlignCenter, AlignRight,
  Type, Palette, Image, Video, Save, X, Eye, Upload
} from 'lucide-react';

interface ArticleEditorProps {
  article?: any;
  onSave: (articleData: any) => void;
  onCancel: () => void;
}

const ArticleEditor = ({ article, onSave, onCancel }: ArticleEditorProps) => {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    category: article?.category || '',
    image: article?.image || '',
    published: article?.published || false
  });

  const [isPreview, setIsPreview] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
        setFormData(prev => ({ ...prev, image: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!formData.title || !formData.excerpt || !formData.content || !formData.category) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const articleData = {
      ...formData,
      id: article?.id || Date.now(),
      author: 'Équipe VOP',
      date: new Date().toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: '5 min',
      views: 0,
      likes: 0,
      comments: 0
    };

    onSave(articleData);
  };

  const formatContent = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            {article ? 'Modifier l\'article' : 'Nouvel article'}
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>{isPreview ? 'Éditer' : 'Aperçu'}</span>
            </button>
            <button
              onClick={onCancel}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Titre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="Titre de l'article"
                />
              </div>

              {/* Extrait */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Extrait *</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  rows={3}
                  placeholder="Résumé de l'article"
                />
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie *</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Actions Locales">Actions Locales</option>
                  <option value="Jeunesse">Jeunesse</option>
                  <option value="Dons & Impact">Dons & Impact</option>
                  <option value="Soutien Veuves">Soutien Veuves</option>
                  <option value="Formation">Formation</option>
                  <option value="International">International</option>
                  <option value="Témoignages">Témoignages</option>
                </select>
              </div>

              {/* Image de couverture */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image de couverture</label>
                <div className="space-y-3">
                  {formData.image && (
                    <div className="relative">
                      <img 
                        src={formData.image} 
                        alt="Aperçu" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00B0F0] transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Choisir une image</span>
                  </label>
                </div>
              </div>

              {/* Statut de publication */}
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                    className="rounded border-gray-300 text-[#00B0F0] focus:ring-[#00B0F0]"
                  />
                  <span className="text-sm font-medium text-gray-700">Publier immédiatement</span>
                </label>
              </div>
            </div>
          </div>

          {/* Editor/Preview */}
          <div className="flex-1 flex flex-col">
            {isPreview ? (
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{formData.title}</h1>
                  <div className="text-gray-600 mb-6">
                    <span>{formData.date}</span> • <span>{formData.readTime}</span> • <span>{formData.category}</span>
                  </div>
                  {formData.image && (
                    <img src={formData.image} alt={formData.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                  )}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatContent(formData.content) }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                {/* Toolbar */}
                <div className="flex items-center space-x-2 p-4 border-b border-gray-200 bg-gray-50">
                  <button
                    onClick={() => handleFormat('bold')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Gras"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleFormat('italic')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Italique"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleFormat('underline')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Souligné"
                  >
                    <Underline className="w-4 h-4" />
                  </button>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <button
                    onClick={() => handleFormat('justifyLeft')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Aligner à gauche"
                  >
                    <AlignLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleFormat('justifyCenter')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Centrer"
                  >
                    <AlignCenter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleFormat('justifyRight')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Aligner à droite"
                  >
                    <AlignRight className="w-4 h-4" />
                  </button>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <button
                    onClick={() => handleFormat('insertUnorderedList')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Liste à puces"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      const url = prompt('Entrez l\'URL du lien:');
                      if (url) handleFormat('createLink', url);
                    }}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Insérer un lien"
                  >
                    <Link className="w-4 h-4" />
                  </button>
                </div>

                {/* Editor */}
                <div className="flex-1 p-6">
                  <div
                    ref={editorRef}
                    contentEditable
                    className="w-full h-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent outline-none"
                    style={{ minHeight: '400px' }}
                    onInput={(e) => {
                      const content = e.currentTarget.innerHTML;
                      setFormData(prev => ({ ...prev, content }));
                    }}
                    dangerouslySetInnerHTML={{ __html: formData.content }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-6 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>{article ? 'Mettre à jour' : 'Créer l\'article'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;