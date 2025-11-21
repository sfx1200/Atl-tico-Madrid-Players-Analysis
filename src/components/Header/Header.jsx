import React from 'react';
import { Target, Activity, Award, Users } from 'lucide-react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

const Header = ({ totalGoals, totalAssists, avgRating, squadSize }) => {
  const stats = [
    { icon: Target, label: 'Total Goals', value: totalGoals, color: colors.accent },
    { icon: Activity, label: 'Total Assists', value: totalAssists, color: colors.success },
    { icon: Award, label: 'Avg Rating', value: avgRating, color: colors.info },
    { icon: Users, label: 'Squad Size', value: squadSize, color: '#f472b6' },
  ];

  return (
    <div style={{
      background: theme.gradients.primary,
      borderRadius: theme.borderRadius.xlarge,
      padding: '3rem 2rem',
      marginBottom: '2rem',
      boxShadow: theme.shadows.primary,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: theme.borderRadius.round,
        transform: 'translate(30%, -30%)'
      }} />
      
      <h1 style={{ 
        fontSize: '3.5rem', 
        fontWeight: 'bold', 
        margin: 0,
        marginBottom: '0.5rem',
        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        ⚽ Atlético Madrid
      </h1>
      <p style={{ 
        fontSize: '1.5rem', 
        opacity: 0.9,
        margin: 0,
        position: 'relative',
        zIndex: 1
      }}>
        Players Performance Analysis 2024-25
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: theme.spacing.lg,
        marginTop: theme.spacing.xl,
        position: 'relative',
        zIndex: 1
      }}>
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        borderRadius: theme.borderRadius.large,
        padding: theme.spacing.lg,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        transition: theme.transitions.normal,
        cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.1)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? theme.shadows.medium : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: theme.borderRadius.medium,
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 4px 15px ${color}50`
      }}>
        <Icon size={28} color="#fff" />
      </div>
      <div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{label}</div>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{value}</div>
      </div>
    </div>
  );
};

export default Header;