import React, { useState } from 'react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

const PlayerCard = ({ player, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        background: isSelected 
          ? theme.gradients.primary
          : colors.background,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.large,
        cursor: 'pointer',
        transition: theme.transitions.normal,
        border: isSelected 
          ? `2px solid ${colors.accent}`
          : '1px solid rgba(255,255,255,0.1)',
        transform: isSelected || isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isSelected 
          ? theme.shadows.primary
          : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: theme.borderRadius.round,
          background: theme.gradients.accent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          boxShadow: theme.shadows.accent
        }}>
          {player.number}
        </div>
        <div style={{ 
          fontWeight: 'bold', 
          fontSize: '1rem', 
          marginBottom: theme.spacing.xs 
        }}>
          {player.name}
        </div>
        <div style={{ 
          fontSize: '0.85rem', 
          color: colors.textSecondary, 
          marginBottom: theme.spacing.sm 
        }}>
          {player.position} • {player.nationality}
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: theme.spacing.sm, 
          fontSize: '0.85rem' 
        }}>
          <span>⚽ {player.goals}</span>
          <span>🎯 {player.assists}</span>
          <span>⭐ {player.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;