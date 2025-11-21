import colors from './colors';

export const theme = {
  colors,
  
  gradients: {
    primary: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
    card: `linear-gradient(135deg, ${colors.card} 0%, ${colors.background} 100%)`,
    accent: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.primary} 100%)`,
  },
  
  shadows: {
    small: '0 2px 8px rgba(0,0,0,0.1)',
    medium: '0 4px 16px rgba(0,0,0,0.2)',
    large: '0 10px 40px rgba(0,0,0,0.3)',
    primary: '0 8px 25px rgba(220, 20, 60, 0.3)',
    accent: '0 4px 15px rgba(255, 215, 0, 0.3)',
  },
  
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    xlarge: '20px',
    round: '50%',
  },
  
  transitions: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
};

export default theme;