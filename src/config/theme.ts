// Configuration du thème LA VOP
export const THEME = {
  colors: {
    primary: '#003399',      // Bleu VOP principal
    secondary: '#00B0F0',    // Bleu clair
    accent: '#CC3366',       // Rose/Violet
    gold: '#FFD700',         // Or
    lightBlue: '#66CCFF',    // Bleu très clair
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    }
  },
  
  gradients: {
    primary: 'from-[#003399] to-[#00B0F0]',
    secondary: 'from-[#00B0F0] to-[#66CCFF]',
    accent: 'from-[#CC3366] to-[#FF6B9D]',
    gold: 'from-[#FFD700] to-[#FFA500]',
    hero: 'from-[#003399] via-[#00B0F0] to-[#66CCFF]'
  },

  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif'
  },

  spacing: {
    section: 'py-20',
    container: 'container mx-auto px-4',
    card: 'p-8',
    button: 'px-6 py-3'
  },

  shadows: {
    card: 'shadow-lg',
    cardHover: 'shadow-xl',
    button: 'shadow-md'
  },

  borderRadius: {
    small: 'rounded-lg',
    medium: 'rounded-xl',
    large: 'rounded-2xl',
    extraLarge: 'rounded-3xl',
    full: 'rounded-full'
  }
} as const;

// Classes Tailwind prédéfinies
export const TW_CLASSES = {
  // Boutons
  button: {
    primary: 'bg-[#00B0F0] hover:bg-[#003399] text-white font-semibold transition-colors',
    secondary: 'bg-white border-2 border-[#00B0F0] text-[#00B0F0] hover:bg-[#00B0F0] hover:text-white font-semibold transition-colors',
    accent: 'bg-[#CC3366] hover:bg-[#FFD700] text-white hover:text-[#003399] font-semibold transition-colors',
    gold: 'bg-[#FFD700] hover:bg-[#FFA500] text-[#003399] font-semibold transition-colors'
  },

  // Cartes
  card: {
    base: 'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300',
    featured: 'bg-white rounded-3xl shadow-2xl overflow-hidden',
    transparent: 'bg-white/10 backdrop-blur-sm border border-white/20'
  },

  // Textes
  text: {
    heading: 'text-4xl md:text-5xl font-bold text-[#003399]',
    subheading: 'text-2xl font-bold text-[#003399]',
    body: 'text-gray-600 leading-relaxed',
    accent: 'text-[#00B0F0] font-semibold'
  },

  // Sections
  section: {
    base: 'py-20',
    hero: 'min-h-screen flex items-center',
    gray: 'py-20 bg-gray-50',
    gradient: 'py-20 bg-gradient-to-br from-[#66CCFF] via-white to-[#00B0F0]/20'
  }
} as const;
