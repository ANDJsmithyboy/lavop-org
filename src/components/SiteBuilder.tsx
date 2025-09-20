import React, { useState } from 'react';
import { 
  Palette, Image, Video, Type, Layout, Settings, 
  Save, Eye, Smartphone, Monitor, Tablet,
  Upload, Link, Bold, Italic, Underline,
  AlignLeft, AlignCenter, AlignRight, List, Quote
} from 'lucide-react';

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

interface SiteElement {
  id: string;
  type: 'text' | 'image' | 'video' | 'button' | 'section';
  content: string;
  styles: React.CSSProperties;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const SiteBuilder: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'design' | 'content' | 'preview'>('design');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [colorPalette, setColorPalette] = useState<ColorPalette>({
    primary: '#003399',
    secondary: '#00B0F0',
    accent: '#FFD700',
    background: '#ffffff',
    text: '#333333'
  });
  const [elements, setElements] = useState<SiteElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const colorPresets = [
    {
      name: 'VOP Classique',
      colors: { primary: '#003399', secondary: '#00B0F0', accent: '#FFD700', background: '#ffffff', text: '#333333' }
    },
    {
      name: 'Moderne',
      colors: { primary: '#1a1a1a', secondary: '#6366f1', accent: '#f59e0b', background: '#f8fafc', text: '#1f2937' }
    },
    {
      name: 'Nature',
      colors: { primary: '#059669', secondary: '#10b981', accent: '#fbbf24', background: '#f0fdf4', text: '#064e3b' }
    },
    {
      name: 'Élégant',
      colors: { primary: '#7c3aed', secondary: '#a855f7', accent: '#ec4899', background: '#faf5ff', text: '#581c87' }
    }
  ];

  const addElement = (type: SiteElement['type']) => {
    const newElement: SiteElement = {
      id: Date.now().toString(),
      type,
      content: type === 'text' ? 'Nouveau texte' : '',
      styles: {
        color: colorPalette.text,
        backgroundColor: type === 'button' ? colorPalette.primary : 'transparent',
        fontSize: type === 'text' ? '16px' : '14px',
        fontWeight: type === 'button' ? 'bold' : 'normal',
        padding: type === 'button' ? '12px 24px' : '8px',
        borderRadius: type === 'button' ? '8px' : '0px',
        border: 'none',
        cursor: type === 'button' ? 'pointer' : 'default'
      },
      position: { x: 50, y: 50 },
      size: { width: type === 'button' ? 150 : 200, height: type === 'button' ? 40 : 60 }
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (id: string, updates: Partial<SiteElement>) => {
    setElements(elements.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElement === id) setSelectedElement(null);
  };

  const applyColorPalette = (preset: ColorPalette) => {
    setColorPalette(preset);
    // Appliquer les couleurs aux éléments existants
    setElements(elements.map(el => ({
      ...el,
      styles: {
        ...el.styles,
        color: el.type === 'text' ? preset.text : el.styles.color,
        backgroundColor: el.type === 'button' ? preset.primary : el.styles.backgroundColor
      }
    })));
  };

  const getDeviceClass = () => {
    switch (device) {
      case 'mobile': return 'max-w-sm';
      case 'tablet': return 'max-w-2xl';
      case 'desktop': return 'max-w-6xl';
      default: return 'max-w-6xl';
    }
  };

  return (
    <>
      {/* Bouton d'ouverture */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 bg-[#FFD700] text-[#003399] p-3 rounded-full shadow-lg hover:bg-[#FFA500] transition-all duration-300 z-40"
        title="Constructeur de site"
      >
        <Layout className="w-6 h-6" />
      </button>

      {/* Modal du constructeur */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Layout className="w-6 h-6" />
                <h2 className="text-xl font-bold">Constructeur de Site VOP</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setDevice('desktop')}
                    className={`p-2 rounded ${device === 'desktop' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('tablet')}
                    className={`p-2 rounded ${device === 'tablet' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('mobile')}
                    className={`p-2 rounded ${device === 'mobile' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-80 bg-gray-50 border-r overflow-y-auto">
                <div className="p-4">
                  {/* Onglets */}
                  <div className="flex space-x-1 mb-6">
                    <button
                      onClick={() => setActiveTab('design')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${
                        activeTab === 'design' ? 'bg-[#003399] text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      Design
                    </button>
                    <button
                      onClick={() => setActiveTab('content')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${
                        activeTab === 'content' ? 'bg-[#003399] text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      Contenu
                    </button>
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${
                        activeTab === 'preview' ? 'bg-[#003399] text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      Aperçu
                    </button>
                  </div>

                  {/* Contenu des onglets */}
                  {activeTab === 'design' && (
                    <div className="space-y-6">
                      {/* Palettes de couleurs */}
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Palette className="w-4 h-4 mr-2" />
                          Palettes de couleurs
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {colorPresets.map((preset, index) => (
                            <button
                              key={index}
                              onClick={() => applyColorPalette(preset.colors)}
                              className="p-3 rounded-lg border-2 border-gray-200 hover:border-[#003399] transition-colors"
                            >
                              <div className="flex space-x-1 mb-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.colors.primary }} />
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.colors.secondary }} />
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.colors.accent }} />
                              </div>
                              <p className="text-xs text-gray-600">{preset.name}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Éléments */}
                      <div>
                        <h3 className="font-semibold mb-3">Éléments</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => addElement('text')}
                            className="p-3 border border-gray-200 rounded-lg hover:border-[#003399] transition-colors flex flex-col items-center"
                          >
                            <Type className="w-6 h-6 mb-2" />
                            <span className="text-sm">Texte</span>
                          </button>
                          <button
                            onClick={() => addElement('image')}
                            className="p-3 border border-gray-200 rounded-lg hover:border-[#003399] transition-colors flex flex-col items-center"
                          >
                            <Image className="w-6 h-6 mb-2" />
                            <span className="text-sm">Image</span>
                          </button>
                          <button
                            onClick={() => addElement('video')}
                            className="p-3 border border-gray-200 rounded-lg hover:border-[#003399] transition-colors flex flex-col items-center"
                          >
                            <Video className="w-6 h-6 mb-2" />
                            <span className="text-sm">Vidéo</span>
                          </button>
                          <button
                            onClick={() => addElement('button')}
                            className="p-3 border border-gray-200 rounded-lg hover:border-[#003399] transition-colors flex flex-col items-center"
                          >
                            <Layout className="w-6 h-6 mb-2" />
                            <span className="text-sm">Bouton</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'content' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Gestion du contenu</h3>
                        <div className="space-y-3">
                          <button className="w-full p-3 border border-gray-200 rounded-lg hover:border-[#003399] transition-colors text-left">
                            <Upload className="w-4 h-4 mr-2 inline" />
                            Uploader des images
                          </button>
                          <button className="w-full p-3 border border-gray-200 rounded-lg hover:border-[#003399] transition-colors text-left">
                            <Video className="w-4 h-4 mr-2 inline" />
                            Ajouter des vidéos
                          </button>
                          <button className="w-full p-3 border border-gray-200 rounded-lg hover:border-[#003399] transition-colors text-left">
                            <Link className="w-4 h-4 mr-2 inline" />
                            Gérer les liens
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'preview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Aperçu en temps réel</h3>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-2">Appareil : {device}</p>
                          <p className="text-sm text-gray-600 mb-2">Éléments : {elements.length}</p>
                          <p className="text-sm text-gray-600">Couleurs appliquées</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Zone de travail */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className={`mx-auto bg-white border-2 border-dashed border-gray-300 rounded-lg min-h-[500px] relative ${getDeviceClass()}`}>
                  {elements.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <div className="text-center">
                        <Layout className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Commencez par ajouter des éléments</p>
                        <p className="text-sm">Utilisez la barre latérale pour commencer</p>
                      </div>
                    </div>
                  ) : (
                    elements.map((element) => (
                      <div
                        key={element.id}
                        className={`absolute border-2 ${
                          selectedElement === element.id ? 'border-[#003399]' : 'border-transparent'
                        } hover:border-gray-400 cursor-pointer`}
                        style={{
                          left: element.position.x,
                          top: element.position.y,
                          width: element.size.width,
                          height: element.size.height,
                          ...element.styles
                        }}
                        onClick={() => setSelectedElement(element.id)}
                      >
                        {element.type === 'text' && (
                          <div className="p-2 h-full flex items-center">
                            {element.content}
                          </div>
                        )}
                        {element.type === 'button' && (
                          <button className="w-full h-full flex items-center justify-center">
                            {element.content || 'Bouton'}
                          </button>
                        )}
                        {element.type === 'image' && (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        {element.type === 'video' && (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <Video className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteBuilder;
