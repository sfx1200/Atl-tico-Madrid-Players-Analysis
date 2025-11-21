import React from 'react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

const Footer = () => {
  return (
    <div style={{
      marginTop: theme.spacing.xxl,
      padding: theme.spacing.xl,
      textAlign: 'center',
      color: colors.textSecondary,
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <p style={{ fontSize: '1rem', marginBottom: theme.spacing.sm }}>
        Atlético Madrid Players Analysis Dashboard • Season 2024-25
      </p>
      <p style={{ fontSize: '0.9rem' }}>
        Data updated with current season statistics
      </p>
    </div>
  );
};

export default Footer;