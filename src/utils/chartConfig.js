import colors from '../styles/colors';

export const getChartTooltipStyle = () => ({
  background: colors.card,
  border: `1px solid ${colors.primary}`,
  borderRadius: '12px',
  color: colors.text,
  padding: '10px',
});

export const getAxisStyle = () => ({
  fill: colors.textSecondary,
  fontSize: 12,
});

export const getGridStyle = () => ({
  stroke: 'rgba(255,255,255,0.1)',
  strokeDasharray: '3 3',
});

export const barChartConfig = {
  margin: { top: 20, right: 30, left: 20, bottom: 5 },
  barRadius: [8, 8, 0, 0],
};

export const radarChartConfig = {
  margin: { top: 20, right: 20, bottom: 20, left: 20 },
};

export default {
  getChartTooltipStyle,
  getAxisStyle,
  getGridStyle,
  barChartConfig,
  radarChartConfig,
};