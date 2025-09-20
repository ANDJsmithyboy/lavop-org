import React, { useState, useRef } from 'react';
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,
  List, Quote, Link, Image, Video, Save, Eye,
  Heading1, Heading2, Heading3
} from 'lucide-react';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  onSave?: () => void;
  placeholder?: string;
}

const AdvancedEditor: React.FC<EditorProps> = ({
  content,
  onChange,
  onSave,
  placeholder = "Commencez à écrire votre article..."
}) => {
  const [isPreview, setIsPreview] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const editorRef = useRef<HTMLDivElement>(null);

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const insertImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target?.result as string;
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.borderRadius = '8px';
      img.style.margin = '16px 0';
      
      const range = window.getSelection()?.getRangeAt(0);
      if (range) {
        range.insertNode(img);
        range.collapse(false);
      }
      
      setShowImageUpload(false);
    };
    reader.readAsDataURL(file);
  };

  const insertVideo = () => {
    if (!videoUrl) return;
    
    const videoId = extractVideoId(videoUrl);
    if (!videoId) return;
    
    const embed = document.createElement('div');
    embed.innerHTML = `
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 16px 0; border-radius: 8px;">
        <iframe 
          src="https://www.youtube.com/embed/${videoId}" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          allowfullscreen>
        </iframe>
      </div>
    `;
    
    const range = window.getSelection()?.getRangeAt(0);
    if (range) {
      range.insertNode(embed);
      range.collapse(false);
    }
    
    setVideoUrl('');
    setShowVideoModal(false);
  };

  const extractVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const toolbarButtons = [
    { icon: Bold, command: 'bold', title: 'Gras' },
    { icon: Italic, command: 'italic', title: 'Italique' },
    { icon: Underline, command: 'underline', title: 'Souligné' },
    { icon: Heading1, command: 'formatBlock', value: 'h1', title: 'Titre 1' },
    { icon: Heading2, command: 'formatBlock', value: 'h2', title: 'Titre 2' },
    { icon: Heading3, command: 'formatBlock', value: 'h3', title: 'Titre 3' },
    { icon: AlignLeft, command: 'justifyLeft', title: 'Aligner à gauche' },
    { icon: AlignCenter, command: 'justifyCenter', title: 'Centrer' },
    { icon: AlignRight, command: 'justifyRight', title: 'Aligner à droite' },
    { icon: List, command: 'insertUnorderedList', title: 'Liste à puces' },
    { icon: Quote, command: 'formatBlock', value: 'blockquote', title: 'Citation' },
    { icon: Link, command: 'createLink', title: 'Lien' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium ${
                isPreview ? 'bg-[#003399] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{isPreview ? 'Éditer' : 'Aperçu'}</span>
            </button>
            
            {onSave && (
              <button
                onClick={onSave}
                className="flex items-center space-x-2 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Sauvegarder</span>
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setShowImageUpload(true)}
              className="p-2 text-gray-600 hover:text-[#003399] hover:bg-gray-200 rounded-lg transition-colors"
              title="Insérer une image"
            >
              <Image className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowVideoModal(true)}
              className="p-2 text-gray-600 hover:text-[#003399] hover:bg-gray-200 rounded-lg transition-colors"
              title="Insérer une vidéo"
            >
              <Video className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatting buttons */}
        <div className="flex flex-wrap gap-1">
          {toolbarButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => executeCommand(button.command, button.value)}
              className="p-2 text-gray-600 hover:text-[#003399] hover:bg-gray-200 rounded-lg transition-colors"
              title={button.title}
            >
              <button.icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="p-6">
        {isPreview ? (
          <div 
            className="prose prose-lg max-w-none min-h-[400px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div
            ref={editorRef}
            contentEditable
            className="min-h-[400px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B0F0] focus:border-transparent"
            style={{ minHeight: '400px' }}
            onInput={(e) => onChange(e.currentTarget.innerHTML)}
            dangerouslySetInnerHTML={{ __html: content }}
            data-placeholder={placeholder}
          />
        )}
      </div>

      {/* Image Upload Modal */}
      {showImageUpload && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Insérer une image</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) insertImage(file);
              }}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setShowImageUpload(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Insérer une vidéo YouTube</h3>
            <input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setShowVideoModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={insertVideo}
                className="flex-1 px-4 py-2 bg-[#00B0F0] text-white rounded-lg hover:bg-[#003399] transition-colors"
              >
                Insérer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedEditor;
