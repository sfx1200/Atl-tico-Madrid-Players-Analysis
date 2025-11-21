import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { getChartTooltipStyle, getAxisStyle, getGridStyle } from '../../utils/chartConfig';

const Attackers = ({ playersData }) => {
  const topScorers = [...playersData]
    .filter(p => p.position !== 'GK')
    .sort((a, b) => b.goals - a.goals)
    .slice(0, 10);

  const chancesCreators = [...playersData]
    .filter(p => p.position !== 'GK')
    .sort((a, b) => (b.chances || 0) - (a.chances || 0))
    .slice(0, 8);

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
      gap: theme.spacing.xl 
    }}>
      <div style={{
        background: colors.card,
        borderRadius: theme.borderRadius.xlarge,
        padding: theme.spacing.xl,
        boxShadow: theme.shadows.large,
        border: `1px solid ${colors.primary}`
      }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: theme.spacing.lg,
          color: colors.text 
        }}>
          ⚽ Attacking Statistics
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={topScorers}>
            <CartesianGrid {...getGridStyle()} />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100} 
              tick={getAxisStyle()} 
            />
            <YAxis tick={getAxisStyle()} />
            <Tooltip contentStyle={getChartTooltipStyle()} />
            <Legend />
            <Bar dataKey="goals" fill={colors.primary} radius={[8, 8, 0, 0]} />
            <Bar dataKey="assists" fill={colors.accent} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        background: colors.card,
        borderRadius: theme.borderRadius.xlarge,
        padding: theme.spacing.xl,
        boxShadow: theme.shadows.large,
        border: `1px solid ${colors.accent}`
      }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: theme.spacing.lg,
          color: colors.text 
        }}>
          🎯 Chances Created
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chancesCreators}>
            <CartesianGrid {...getGridStyle()} />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100} 
              tick={{ ...getAxisStyle(), fontSize: 11 }} 
            />
            <YAxis tick={getAxisStyle()} />
            <Tooltip contentStyle={getChartTooltipStyle()} />
            <Bar dataKey="chances" fill={colors.accent} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Attackers;