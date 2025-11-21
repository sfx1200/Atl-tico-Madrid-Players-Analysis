import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Target } from 'lucide-react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { getChartTooltipStyle, getAxisStyle, getGridStyle } from '../../utils/chartConfig';

const TopScorers = ({ data }) => {
  return (
    <div style={{
      background: colors.card,
      borderRadius: theme.borderRadius.xlarge,
      padding: theme.spacing.xl,
      boxShadow: theme.shadows.large,
      border: `1px solid rgba(220, 20, 60, 0.2)`
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: theme.spacing.lg,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm
      }}>
        <Target size={28} color={colors.primary} />
        Top Scorers
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
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
          <Bar dataKey="goals" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === 0 ? colors.primary : index === 1 ? colors.accent : colors.secondary} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopScorers;