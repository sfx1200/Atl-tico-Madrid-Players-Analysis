import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { getChartTooltipStyle, getAxisStyle, getGridStyle } from '../../utils/chartConfig';

const GoalContributions = ({ data }) => {
  return (
    <div style={{
      background: colors.card,
      borderRadius: theme.borderRadius.xlarge,
      padding: theme.spacing.xl,
      boxShadow: theme.shadows.large,
      border: `1px solid rgba(0, 32, 91, 0.2)`
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: theme.spacing.lg,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm
      }}>
        <TrendingUp size={28} color={colors.accent} />
        Goal Contributions
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid {...getGridStyle()} />
          <XAxis 
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ ...getAxisStyle(), fontSize: 12 }}
          />
          <YAxis tick={getAxisStyle()} />
          <Tooltip contentStyle={getChartTooltipStyle()} />
          <Legend />
          <Bar dataKey="goals" fill={colors.primary} radius={[4, 4, 0, 0]} />
          <Bar dataKey="assists" fill={colors.accent} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GoalContributions;