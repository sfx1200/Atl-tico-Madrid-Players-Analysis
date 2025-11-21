import React from 'react';
import { Target, Activity, Award, Users } from 'lucide-react';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import atleticoLogo from '../../assets/atletico.png';

const Header = ({ totalGoals, totalAssists, avgRating, squadSize }) => {
  const stats = [
    { icon: Target, label: 'Total Goals', value: totalGoals, color: colors.accent },
    { icon: Activity, label: 'Total Assists', value: totalAssists, color: colors.success },
    { icon: Award, label: 'Avg Rating', value: avgRating, color: colors.info },
    { icon: Users, label: 'Squad Size', value: squadSize, color: '#f472b6' },
  ];

  return (
    <div
      style={{
        background: theme.gradients.primary,
        borderRadius: theme.borderRadius.xlarge,
        padding: '4rem 2rem',
        marginBottom: '2rem',
        boxShadow: theme.shadows.primary,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >

      {/* Cercle décoratif */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '350px',
          height: '350px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: theme.borderRadius.round,
        }}
      />

      {/* TEXTE EN HAUT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            margin: 0,
            marginBottom: '0.5rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          Atlético Madrid
        </h1>

        <p
          style={{
            fontSize: '1.6rem',
            opacity: 0.9,
            margin: 0,
            marginBottom: '3rem', // espace avant logo
          }}
        >
          2024–25 Performance Analytics Dashboard
        </p>
      </div>

      {/* LOGO AU MILIEU EN BAS, CENTRÉ */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          marginBottom: '3rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={atleticoLogo}
          alt="Atlético Madrid Logo"
          style={{
            width: '300px',
            filter: 'drop-shadow(0 5px 12px rgba(0,0,0,0.4))',
          }}
        />
      </div>

      {/* STAT CARDS EN BAS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: theme.spacing.lg,
          marginTop: theme.spacing.md,
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
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
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: theme.borderRadius.medium,
          background: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 4px 15px ${color}50`,
        }}
      >
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
