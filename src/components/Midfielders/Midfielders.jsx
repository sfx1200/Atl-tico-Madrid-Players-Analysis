import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { getChartTooltipStyle, getAxisStyle, getGridStyle } from '../../utils/chartConfig';

const Midfielders = ({ playersData }) => {
  const midfielders = playersData.filter(p => p.position === 'CM');
  const byPassAccuracy = [...midfielders].sort((a, b) => b.passAccuracy - a.passAccuracy);
  const byDuelsWon = [...midfielders].sort((a, b) => b.duelsWon - a.duelsWon);

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
        border: `1px solid ${colors.secondary}`
      }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: theme.spacing.lg,
          color: colors.text 
        }}>
          📊 Passing Accuracy
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={byPassAccuracy}>
            <CartesianGrid {...getGridStyle()} />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100} 
              tick={{ ...getAxisStyle(), fontSize: 11 }} 
            />
            <YAxis domain={[0, 100]} tick={getAxisStyle()} />
            <Tooltip contentStyle={getChartTooltipStyle()} />
            <Bar dataKey="passAccuracy" fill={colors.success} radius={[8, 8, 0, 0]} />
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
          ⚔️ Duels Won
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={byDuelsWon}>
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
            <Bar dataKey="duelsWon" fill={colors.accent} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Midfielders;