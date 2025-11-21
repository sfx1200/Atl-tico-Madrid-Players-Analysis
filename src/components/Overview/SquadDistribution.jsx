import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Users } from 'lucide-react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { getChartTooltipStyle } from '../../utils/chartConfig';

const SquadDistribution = ({ data }) => {
  return (
    <div style={{
      background: colors.card,
      borderRadius: theme.borderRadius.xlarge,
      padding: theme.spacing.xl,
      boxShadow: theme.shadows.large,
      border: `1px solid rgba(255, 215, 0, 0.2)`
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: theme.spacing.lg,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm
      }}>
        <Users size={28} color={colors.success} />
        Squad Distribution
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                stroke={colors.background} 
                strokeWidth={2} 
              />
            ))}
          </Pie>
          <Tooltip contentStyle={getChartTooltipStyle()} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SquadDistribution;