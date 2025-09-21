import { useState, useEffect } from 'react';
import { Save, X, Eye, Upload, Image, Video, Link, Bold, Italic, List, Quote } from 'lucide-react';

interface ArticleEditorProps {
  article?: any;
  onSave: (article: any) => void;
  onCancel: () => void;
}

const ArticleEditor = ({ article, onSave, onCancel }: ArticleEditorProps) => {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    category: article?.category || 'VOPyouth',
    image: article?.image || '',
    published: article?.published || false,
    featured: article?.featured || false
  });

  const [isPreview, setIsPreview] = useState(false);

  const handleSave = () => {
    const articleData = {
      ...formData,
      id: article?.id || Date.now(),
      views: article?.views || 0,
      likes: article?.likes || 0,
      comments: article?.comments || 0,
      created_at: article?.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    onSave(articleData);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, image: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {article ? 'Modifier l\'article' : 'Nouvel article'}
          </h2>
          <div className="flex items-center space-x-3">
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

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {!isPreview ? (
            <div className="flex-1 flex flex-col p-6">
              {/* Title */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre de l'article
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  placeholder="Entrez le titre de votre article..."
                />
              </div>

              {/* Excerpt */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Résumé
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  rows={3}
                  placeholder="Résumé de l'article..."
                />
              </div>

              {/* Content */}
              <div className="mb-6 flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu
                </label>
                <div className="border border-gray-300 rounded-lg h-full">
                  <div className="flex items-center space-x-2 p-3 border-b border-gray-200 bg-gray-50">
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Italic className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <List className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Quote className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Link className="w-4 h-4" />
                    </button>
                  </div>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    className="w-full h-full p-4 resize-none focus:outline-none"
                    placeholder="Rédigez votre article ici..."
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image de l'article
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Choisir une image</span>
                  </label>
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>

              {/* Settings */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                    className="w-4 h-4 text-[#00B0F0] border-gray-300 rounded focus:ring-[#00B0F0]"
                  />
                  <label htmlFor="published" className="text-sm font-medium text-gray-700">
                    Publier immédiatement
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                    className="w-4 h-4 text-[#00B0F0] border-gray-300 rounded focus:ring-[#00B0F0]"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Article en vedette
                  </label>
                </div>
                <div className="flex-1">
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
                  >
                    <option value="VOPyouth">VOPyouth</option>
                    <option value="VOPsong">VOPsong</option>
                    <option value="Formation">Formation</option>
                    <option value="Témoignage">Témoignage</option>
                    <option value="Actualités">Actualités</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            /* Preview */
            <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{formData.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{formData.excerpt}</p>
                {formData.image && (
                  <img
                    src={formData.image}
                    alt={formData.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: formData.content.replace(/\n/g, '<br>') }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            {formData.title.length} caractères
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onCancel}
              className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Sauvegarder</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;
