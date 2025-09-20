import { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, RotateCcw, Maximize, Minimize } from 'lucide-react';

interface MobileSimulatorProps {
  children: React.ReactNode;
}

const MobileSimulator = ({ children }: MobileSimulatorProps) => {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  const deviceSizes = {
    mobile: {
      width: orientation === 'portrait' ? 375 : 667,
      height: orientation === 'portrait' ? 667 : 375,
      name: 'iPhone 12/13/14'
    },
    tablet: {
      width: orientation === 'portrait' ? 768 : 1024,
      height: orientation === 'portrait' ? 1024 : 768,
      name: 'iPad'
    },
    desktop: {
      width: 1200,
      height: 800,
      name: 'Desktop'
    }
  };

  const currentSize = deviceSizes[device];

  const toggleOrientation = () => {
    if (device !== 'desktop') {
      setOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait');
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900">Mode Mobile</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Appareil :</span>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value as any)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablette</option>
              <option value="desktop">Desktop</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Orientation toggle */}
          {device !== 'desktop' && (
            <button
              onClick={toggleOrientation}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              title={`Basculer en ${orientation === 'portrait' ? 'paysage' : 'portrait'}`}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          )}

          {/* Device icons */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setDevice('mobile')}
              className={`p-2 rounded-md transition-colors ${
                device === 'mobile' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Mode Mobile"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-2 rounded-md transition-colors ${
                device === 'tablet' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Mode Tablette"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice('desktop')}
              className={`p-2 rounded-md transition-colors ${
                device === 'desktop' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Mode Desktop"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            title={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Device info */}
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span><strong>Appareil :</strong> {currentSize.name}</span>
            <span><strong>Taille :</strong> {currentSize.width} × {currentSize.height}px</span>
            {device !== 'desktop' && (
              <span><strong>Orientation :</strong> {orientation === 'portrait' ? 'Portrait' : 'Paysage'}</span>
            )}
          </div>
          <div className="text-xs text-gray-500">
            Simulation en temps réel • Rafraîchissement automatique
          </div>
        </div>
      </div>

      {/* Simulator container */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div
          className="bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            width: Math.min(currentSize.width, window.innerWidth - 100),
            height: Math.min(currentSize.height, window.innerHeight - 200),
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        >
          {/* Device frame */}
          <div className="relative w-full h-full">
            {/* Status bar (mobile only) */}
            {device === 'mobile' && (
              <div className="bg-black text-white text-xs px-4 py-1 flex justify-between items-center">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
            )}

            {/* Content area */}
            <div 
              className="overflow-auto"
              style={{
                height: device === 'mobile' ? 'calc(100% - 20px)' : '100%',
                width: '100%'
              }}
            >
              {children}
            </div>

            {/* Home indicator (mobile only) */}
            {device === 'mobile' && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls info */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          💡 <strong>Astuce :</strong> Utilisez les contrôles ci-dessus pour tester différentes tailles d'écran. 
          Le contenu s'adapte automatiquement à la taille sélectionnée.
        </div>
      </div>
    </div>
  );
};

export default MobileSimulator;
