import React from 'react';
import { Search, Filter } from 'lucide-react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

const PlayerFilters = ({ searchTerm, setSearchTerm, filterPosition, setFilterPosition }) => {
  return (
    <div style={{ 
      display: 'flex', 
      gap: theme.spacing.md, 
      marginBottom: theme.spacing.xl, 
      flexWrap: 'wrap' 
    }}>
      <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
        <Search 
          size={20} 
          style={{ 
            position: 'absolute', 
            left: theme.spacing.md, 
            top: '50%', 
            transform: 'translateY(-50%)', 
            color: colors.textSecondary 
          }} 
        />
        <input
          type="text"
          placeholder="Search player..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} 3rem`,
            borderRadius: theme.borderRadius.medium,
            border: '1px solid rgba(255,255,255,0.1)',
            background: colors.background,
            color: colors.text,
            fontSize: '1rem',
            outline: 'none',
            transition: theme.transitions.normal,
          }}
          onFocus={(e) => e.target.style.border = `1px solid ${colors.primary}`}
          onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
        />
      </div>
      <select
        value={filterPosition}
        onChange={(e) => setFilterPosition(e.target.value)}
        style={{
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          borderRadius: theme.borderRadius.medium,
          border: '1px solid rgba(255,255,255,0.1)',
          background: colors.background,
          color: colors.text,
          fontSize: '1rem',
          cursor: 'pointer',
          outline: 'none',
          transition: theme.transitions.normal,
        }}
        onFocus={(e) => e.target.style.border = `1px solid ${colors.primary}`}
        onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
      >
        <option value="all">All Positions</option>
        <option value="ST">Striker</option>
        <option value="LS">Left Striker</option>
        <option value="CM">Central Midfielder</option>
        <option value="CB">Center Back</option>
        <option value="RB">Right Back</option>
        <option value="LB">Left Back</option>
        <option value="GK">Goalkeeper</option>
      </select>
    </div>
  );
};

export default PlayerFilters;