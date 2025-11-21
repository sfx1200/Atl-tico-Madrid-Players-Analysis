import React from 'react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

const PlayerDetails = ({ player }) => {
  if (!player) {
    return (
      <div style={{ padding: 20, textAlign: "center", fontSize: "1.2rem" }}>
        Aucun joueur sélectionné.
      </div>
    );
  }
  
  const stats = player.position !== 'GK' 
    ? [
        { label: 'Goals', value: player.goals, icon: '⚽' },
        { label: 'Assists', value: player.assists, icon: '🎯' },
        { label: 'Matches', value: player.matches, icon: '🏟️' },
        { label: 'Minutes', value: player.minutes, icon: '⏱️' },
        { label: 'Rating', value: player.rating, icon: '⭐' },
        { label: 'Duels Won', value: player.duelsWon, icon: '⚔️' },
      ]
    : [
        { label: 'Clean Sheets', value: player.cleanSheets, icon: '🧤' },
        { label: 'Saves', value: player.saves, icon: '✋' },
        { label: 'Save %', value: `${player.savePercentage}%`, icon: '📊' },
        { label: 'Matches', value: player.matches, icon: '🏟️' },
        { label: 'Minutes', value: player.minutes, icon: '⏱️' },
        { label: 'Rating', value: player.rating, icon: '⭐' },
      ];

  const detailedStats = player.position !== 'GK'
    ? [
        { label: 'Chances Created', value: player.chances },
        { label: 'Total Passes', value: player.passes },
        { label: 'Pass Accuracy', value: `${player.passAccuracy}%` },
        { label: 'Tackles', value: player.tackles },
        { label: 'Interceptions', value: player.interceptions },
        { label: 'Minutes per Goal', value: player.goals > 0 ? Math.round(player.minutes / player.goals) : 'N/A' },
      ]
    : [
        { label: 'Clean Sheets', value: player.cleanSheets },
        { label: 'Total Saves', value: player.saves },
        { label: 'Save Percentage', value: `${player.savePercentage}%` },
        { label: 'Total Passes', value: player.passes },
        { label: 'Pass Accuracy', value: `${player.passAccuracy}%` },
        { label: 'Matches Played', value: player.matches },
      ];

  return (
    <div style={{
      background: colors.card,
      borderRadius: theme.borderRadius.xlarge,
      padding: theme.spacing.xl,
      boxShadow: theme.shadows.large,
      border: `1px solid ${colors.primary}`
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderBottom: '2px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: theme.borderRadius.round,
          background: theme.gradients.primary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          boxShadow: theme.shadows.primary
        }}>
          {player.number}
        </div>
        <h3 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: theme.spacing.sm,
          color: colors.text 
        }}>
          {player.name}
        </h3>
        <p style={{ 
          fontSize: '1.1rem', 
          color: colors.textSecondary 
        }}>
          {player.position} • {player.age} years • {player.nationality}
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: theme.spacing.md 
      }}>
        {stats.map((stat, i) => (
          <div 
            key={i} 
            style={{
              background: colors.background,
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius.medium,
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ 
              fontSize: '0.85rem', 
              color: colors.textSecondary, 
              marginBottom: theme.spacing.xs 
            }}>
              {stat.icon} {stat.label}
            </div>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              color: colors.text 
            }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        borderTop: '2px solid rgba(255,255,255,0.1)'
      }}>
        <h4 style={{ 
          fontSize: '1.3rem', 
          marginBottom: theme.spacing.lg,
          color: colors.text 
        }}>
          Detailed Statistics
        </h4>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: theme.spacing.md 
        }}>
          {detailedStats.map((stat, i) => (
            <div 
              key={i} 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: theme.spacing.md,
                background: colors.background,
                borderRadius: theme.borderRadius.medium,
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <span style={{ color: colors.textSecondary }}>{stat.label}</span>
              <span style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold',
                color: colors.text 
              }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;