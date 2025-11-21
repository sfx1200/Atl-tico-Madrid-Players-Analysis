import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { getChartTooltipStyle, getAxisStyle, getGridStyle } from '../../utils/chartConfig';

const Defenders = ({ playersData }) => {
  const defenders = playersData.filter(p => ['CB', 'RB', 'LB'].includes(p.position));
  const byTackles = [...defenders].sort((a, b) => b.tackles - a.tackles);
  const byInterceptions = [...defenders].sort((a, b) => b.interceptions - a.interceptions);

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
          🛡️ Tackles
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={byTackles}>
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
            <Bar dataKey="tackles" fill={colors.primary} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

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
          🚫 Interceptions
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={byInterceptions}>
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
            <Bar dataKey="interceptions" fill={colors.info} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Defenders;