import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Award } from 'lucide-react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { getAxisStyle, getGridStyle } from '../../utils/chartConfig';

const PerformanceScatter = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ 
          padding: '10px', 
          background: colors.card, 
          borderRadius: theme.borderRadius.small, 
          border: `1px solid ${colors.primary}` 
        }}>
          <p style={{ margin: '5px 0', fontWeight: 'bold', color: colors.text }}>{data.name}</p>
          <p style={{ margin: '5px 0', color: colors.text }}>Minutes: {data.minutes}</p>
          <p style={{ margin: '5px 0', color: colors.text }}>Rating: {data.rating}</p>
          <p style={{ margin: '5px 0', color: colors.text }}>Goals: {data.goals}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{
      background: colors.card,
      borderRadius: theme.borderRadius.xlarge,
      padding: theme.spacing.xl,
      boxShadow: theme.shadows.large,
      border: `1px solid rgba(96, 165, 250, 0.2)`
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: theme.spacing.lg,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm
      }}>
        <Award size={28} color={colors.info} />
        Performance vs Minutes
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid {...getGridStyle()} />
          <XAxis 
            dataKey="minutes" 
            name="Minutes"
            tick={getAxisStyle()}
            label={{ 
              value: 'Minutes Played', 
              position: 'insideBottom', 
              offset: -5, 
              fill: colors.textSecondary 
            }}
          />
          <YAxis 
            dataKey="rating" 
            name="Rating"
            tick={getAxisStyle()}
            label={{ 
              value: 'Rating', 
              angle: -90, 
              position: 'insideLeft', 
              fill: colors.textSecondary 
            }}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
          <Scatter data={data} fill={colors.primary}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.rating > 8 ? colors.accent : entry.rating > 7.5 ? colors.primary : colors.secondary}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceScatter;