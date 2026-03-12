export type ThemeId = 'clean' | 'dark-cinematic' | 'parchment' | 'ocean' | 'forest';

export interface ThemeColors {
  bg: string;
  bgSection: string;
  bgReveal: string;
  border: string;
  borderActive: string;
  text: string;
  textHead: string;
  textDim: string;
  accent: string;
  accentBright: string;
  secondary: string;
  textAsh: string;
}

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  colors: ThemeColors;
  headingFont: string;
  headingFontImport: string;
  bodyFont: string;
  bodyFontImport: string;
  grain: boolean;
  embers: boolean;
  emberColors?: { r: [number, number]; g: [number, number]; b: number };
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  clean: {
    id: 'clean',
    name: 'Clean (Google)',
    description: 'Light, modern, and readable — the default',
    colors: {
      bg: '#ffffff',
      bgSection: '#f8f9fa',
      bgReveal: '#f1f3f4',
      border: '#dadce0',
      borderActive: '#1a73e8',
      text: '#3c4043',
      textHead: '#202124',
      textDim: '#80868b',
      accent: '#1a73e8',
      accentBright: '#1967d2',
      secondary: '#e8710a',
      textAsh: '#5f6368',
    },
    headingFont: "'Google Sans', 'Product Sans', sans-serif",
    headingFontImport: 'family=Inter:wght@400;500;600;700',
    bodyFont: "'Roboto', sans-serif",
    bodyFontImport: 'family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400',
    grain: false,
    embers: false,
  },
  'dark-cinematic': {
    id: 'dark-cinematic',
    name: 'Dark Cinematic',
    description: 'Near-black with blood-red and gold accents — dramatic',
    colors: {
      bg: '#06060a',
      bgSection: '#0b0b12',
      bgReveal: '#0e0e18',
      border: '#1a1520',
      borderActive: '#6b2020',
      text: '#b0a89e',
      textHead: '#d4cdc4',
      textDim: '#4a4440',
      accent: '#8a2a2a',
      accentBright: '#c44030',
      secondary: '#a08848',
      textAsh: '#606870',
    },
    headingFont: "'Cinzel', serif",
    headingFontImport: 'family=Cinzel:wght@400;600;700;900',
    bodyFont: "'Cormorant Garamond', Georgia, serif",
    bodyFontImport: 'family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700',
    grain: true,
    embers: true,
    emberColors: { r: [200, 255], g: [60, 100], b: 20 },
  },
  parchment: {
    id: 'parchment',
    name: 'Parchment',
    description: 'Warm cream with classical serif typography',
    colors: {
      bg: '#f6f1e7',
      bgSection: '#ede5d5',
      bgReveal: '#e8dfcf',
      border: '#d4c9b8',
      borderActive: '#8b2500',
      text: '#4a3f30',
      textHead: '#2a1a0e',
      textDim: '#8a7e6e',
      accent: '#8b2500',
      accentBright: '#a63010',
      secondary: '#5c6d3f',
      textAsh: '#6b5a48',
    },
    headingFont: "'Playfair Display', serif",
    headingFontImport: 'family=Playfair+Display:wght@400;600;700;900',
    bodyFont: "'Crimson Pro', Georgia, serif",
    bodyFontImport: 'family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400',
    grain: false,
    embers: false,
  },
  ocean: {
    id: 'ocean',
    name: 'Deep Ocean',
    description: 'Dark blue-grey with teal and silver accents',
    colors: {
      bg: '#0a1628',
      bgSection: '#0f1d32',
      bgReveal: '#132440',
      border: '#1e3350',
      borderActive: '#2d8a8a',
      text: '#a0b4c8',
      textHead: '#d0dce8',
      textDim: '#4a6480',
      accent: '#2d8a8a',
      accentBright: '#40b0b0',
      secondary: '#c0a050',
      textAsh: '#607890',
    },
    headingFont: "'Inter', sans-serif",
    headingFontImport: 'family=Inter:wght@400;500;600;700',
    bodyFont: "'Source Serif 4', Georgia, serif",
    bodyFontImport: 'family=Source+Serif+4:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400',
    grain: true,
    embers: false,
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    description: 'Deep green with warm earth tones',
    colors: {
      bg: '#0a120a',
      bgSection: '#0f1a0f',
      bgReveal: '#142014',
      border: '#1e2e1e',
      borderActive: '#4a7a3a',
      text: '#a0b098',
      textHead: '#d0dcc8',
      textDim: '#4a5a40',
      accent: '#4a7a3a',
      accentBright: '#60a048',
      secondary: '#c0884a',
      textAsh: '#607060',
    },
    headingFont: "'Cinzel', serif",
    headingFontImport: 'family=Cinzel:wght@400;600;700;900',
    bodyFont: "'Cormorant Garamond', Georgia, serif",
    bodyFontImport: 'family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700',
    grain: true,
    embers: false,
  },
};
