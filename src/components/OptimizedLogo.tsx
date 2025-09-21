import { useState, useEffect } from 'react';

interface OptimizedLogoProps {
  className?: string;
  alt?: string;
  priority?: boolean;
}

const OptimizedLogo = ({ className = "h-14 w-auto", alt = "Logo de la VOP", priority = false }: OptimizedLogoProps) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Précharger l'image si c'est prioritaire
    if (priority) {
      const img = new Image();
      img.onload = () => setLogoLoaded(true);
      img.onerror = () => setLogoError(true);
      img.src = "/logo-vop.jpg";
    }
  }, [priority]);

  if (logoError) {
    // Fallback si l'image ne charge pas
    return (
      <div className={`${className} bg-[#003399] rounded-lg flex items-center justify-center`}>
        <span className="text-white font-bold text-lg">VOP</span>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <img
        src="/logo-vop.jpg"
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          logoLoaded || !priority ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLogoLoaded(true)}
        onError={() => setLogoError(true)}
        style={{
          filter: 'brightness(0) invert(1)', // Pour le mode sombre
        }}
      />
      
      {/* Skeleton loader pendant le chargement */}
      {!logoLoaded && priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedLogo;
