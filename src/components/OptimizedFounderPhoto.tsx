import React, { useState } from 'react';

interface OptimizedFounderPhotoProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'hero';
  showOverlay?: boolean;
  showBadge?: boolean;
  badgeText?: string;
}

const OptimizedFounderPhoto: React.FC<OptimizedFounderPhotoProps> = ({
  src,
  alt,
  className = '',
  size = 'medium',
  showOverlay = false,
  showBadge = false,
  badgeText = 'Visionnaire'
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
    hero: 'w-full max-w-md mx-auto'
  };

  const handleImageError = () => {
    console.log('Erreur de chargement de l\'image:', src);
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className={`${sizeClasses[size]} ${className} bg-gradient-to-br from-[#003399] to-[#00B0F0] rounded-2xl flex items-center justify-center text-white font-bold text-2xl`}>
        ANDJ
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} rounded-2xl overflow-hidden shadow-2xl`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center"
          loading="eager"
          onError={handleImageError}
          style={{
            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
          }}
        />
        
        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        )}
      </div>
      
      {showBadge && (
        <div className="absolute -bottom-2 -right-2 bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
          {badgeText}
        </div>
      )}
    </div>
  );
};

export default OptimizedFounderPhoto;
