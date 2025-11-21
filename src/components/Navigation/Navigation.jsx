import React from 'react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

const Navigation = ({ selectedView, setSelectedView }) => {
  const views = ['overview', 'attackers', 'midfielders', 'defenders', 'comparison'];

  return (
    <div style={{
      display: 'flex',
      gap: theme.spacing.md,
      marginBottom: theme.spacing.xl,
      flexWrap: 'wrap'
    }}>
      {views.map(view => (
        <NavButton
          key={view}
          view={view}
          isSelected={selectedView === view}
          onClick={() => setSelectedView(view)}
        />
      ))}
    </div>
  );
};

const NavButton = ({ view, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onClick={onClick}
      style={{
        padding: '1rem 2rem',
        borderRadius: theme.borderRadius.medium,
        border: 'none',
        background: isSelected 
          ? theme.gradients.primary
          : colors.card,
        color: colors.text,
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: theme.transitions.normal,
        textTransform: 'capitalize',
        boxShadow: isSelected ? theme.shadows.primary : 'none',
        transform: isSelected || isHovered ? 'translateY(-2px)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {view}
    </button>
  );
};

export default Navigation;