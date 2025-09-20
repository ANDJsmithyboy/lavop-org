import React, { useState, useRef, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Link, 
  Image, 
  Video, 
  List, 
  ListOrdered, 
  Quote, 
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Type,
  Heading1,
  Heading2,
  Heading3,
  Save,
  Eye,
  Upload
} from 'lucide-react';

interface MediumEditorProps {
  content: string;
  onChange: (content: string) => void;
  onSave?: () => void;
  onPreview?: () => void;
  placeholder?: string;
  className?: string;
}

const MediumEditor: React.FC<MediumEditorProps> = ({
  content,
  onChange,
  onSave,
  onPreview,
  placeholder = "Commencez à écrire votre article...",
  className = ""
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showVideoUpload, setShowVideoUpload] = useState(false);

  // Fonction pour exécuter les commandes de formatage
  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateContent();
  };

  // Fonction pour mettre à jour le contenu
  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Fonction pour gérer les images
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target?.result as string;
        img.className = 'max-w-full h-auto rounded-lg my-4';
        img.alt = 'Image uploadée';
        
        // Insérer l'image à la position du curseur
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.insertNode(img);
          range.setStartAfter(img);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
        
        updateContent();
      };
      reader.readAsDataURL(file);
    }
    setShowImageUpload(false);
  };

  // Fonction pour gérer les vidéos
  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const video = document.createElement('video');
        video.src = e.target?.result as string;
        video.className = 'max-w-full h-auto rounded-lg my-4';
        video.controls = true;
        video.alt = 'Vidéo uploadée';
        
        // Insérer la vidéo à la position du curseur
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.insertNode(video);
          range.setStartAfter(video);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
        
        updateContent();
      };
      reader.readAsDataURL(file);
    }
    setShowVideoUpload(false);
  };

  // Fonction pour insérer un lien
  const insertLink = () => {
    const url = prompt('Entrez l\'URL du lien:');
    if (url) {
      executeCommand('createLink', url);
    }
  };

  // Fonction pour insérer une vidéo YouTube/Vimeo
  const insertVideoUrl = () => {
    const url = prompt('Entrez l\'URL de la vidéo (YouTube/Vimeo):');
    if (url) {
      const videoId = extractVideoId(url);
      if (videoId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.className = 'w-full h-64 rounded-lg my-4';
        iframe.frameBorder = '0';
        iframe.allowFullScreen = true;
        
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.insertNode(iframe);
          range.setStartAfter(iframe);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
        
        updateContent();
      }
    }
  };

  // Fonction pour extraire l'ID d'une vidéo YouTube
  const extractVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Fonction pour insérer un titre
  const insertHeading = (level: number) => {
    const heading = document.createElement(`h${level}`);
    heading.textContent = 'Titre';
    heading.className = `font-bold my-4 ${level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'}`;
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.insertNode(heading);
      range.setStartAfter(heading);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    updateContent();
  };

  // Fonction pour insérer une citation
  const insertQuote = () => {
    const quote = document.createElement('blockquote');
    quote.textContent = 'Citation';
    quote.className = 'border-l-4 border-[#003399] pl-4 italic my-4 text-gray-600';
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.insertNode(quote);
      range.setStartAfter(quote);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    updateContent();
  };

  // Fonction pour insérer du code
  const insertCode = () => {
    const code = document.createElement('code');
    code.textContent = 'Code';
    code.className = 'bg-gray-100 px-2 py-1 rounded text-sm font-mono';
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.insertNode(code);
      range.setStartAfter(code);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    updateContent();
  };

  // Fonction pour insérer une liste
  const insertList = (ordered: boolean = false) => {
    const list = document.createElement(ordered ? 'ol' : 'ul');
    list.className = 'my-4 pl-6';
    
    const item = document.createElement('li');
    item.textContent = 'Élément de liste';
    list.appendChild(item);
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.insertNode(list);
      range.setStartAfter(list);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    updateContent();
  };

  return (
    <div className={`medium-editor ${className}`}>
      {/* Barre d'outils */}
      <div className="border-b border-gray-200 p-4 bg-white rounded-t-lg">
        <div className="flex flex-wrap items-center gap-2">
          {/* Formatage de texte */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
            <button
              onClick={() => executeCommand('bold')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Gras"
            >
              <Bold className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('italic')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Italique"
            >
              <Italic className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('underline')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Souligné"
            >
              <Underline className="w-4 h-4" />
            </button>
          </div>

          {/* Titres */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
            <button
              onClick={() => insertHeading(1)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Titre 1"
            >
              <Heading1 className="w-4 h-4" />
            </button>
            <button
              onClick={() => insertHeading(2)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Titre 2"
            >
              <Heading2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => insertHeading(3)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Titre 3"
            >
              <Heading3 className="w-4 h-4" />
            </button>
          </div>

          {/* Liens et médias */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
            <button
              onClick={insertLink}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Insérer un lien"
            >
              <Link className="w-4 h-4" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowImageUpload(!showImageUpload)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                title="Insérer une image"
              >
                <Image className="w-4 h-4" />
              </button>
              {showImageUpload && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg p-2 z-10">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="text-sm"
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowVideoUpload(!showVideoUpload)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                title="Insérer une vidéo"
              >
                <Video className="w-4 h-4" />
              </button>
              {showVideoUpload && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg p-2 z-10">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="text-sm mb-2"
                  />
                  <button
                    onClick={insertVideoUrl}
                    className="text-sm text-[#003399] hover:underline"
                  >
                    URL YouTube/Vimeo
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Listes et formatage */}
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
            <button
              onClick={() => insertList(false)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Liste à puces"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => insertList(true)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Liste numérotée"
            >
              <ListOrdered className="w-4 h-4" />
            </button>
            <button
              onClick={insertQuote}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Citation"
            >
              <Quote className="w-4 h-4" />
            </button>
            <button
              onClick={insertCode}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Code"
            >
              <Code className="w-4 h-4" />
            </button>
          </div>

          {/* Alignement */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => executeCommand('justifyLeft')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Aligner à gauche"
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('justifyCenter')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Centrer"
            >
              <AlignCenter className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('justifyRight')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title="Aligner à droite"
            >
              <AlignRight className="w-4 h-4" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 ml-auto">
            {onPreview && (
              <button
                onClick={onPreview}
                className="p-2 hover:bg-gray-100 rounded transition-colors text-[#003399]"
                title="Aperçu"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
            {onSave && (
              <button
                onClick={onSave}
                className="p-2 hover:bg-gray-100 rounded transition-colors text-[#003399]"
                title="Sauvegarder"
              >
                <Save className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Zone d'édition */}
      <div
        ref={editorRef}
        contentEditable
        className={`min-h-[400px] p-6 border border-gray-200 rounded-b-lg focus:outline-none ${
          isFocused ? 'ring-2 ring-[#003399] ring-opacity-50' : ''
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onInput={updateContent}
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          fontFamily: 'Georgia, serif',
          lineHeight: '1.8',
          fontSize: '18px'
        }}
      >
        {!content && (
          <div className="text-gray-400 italic">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediumEditor;
