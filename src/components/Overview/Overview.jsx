import React from 'react';
import TopScorers from './TopScorers';
import GoalContributions from './GoalContributions';
import SquadDistribution from './SquadDistribution';
import PerformanceScatter from './PerformanceScatter';

const Overview = ({ playersData }) => {
  // Top scorers data
  const topScorers = [...playersData]
    .filter(p => p.position !== 'GK')
    .sort((a, b) => b.goals - a.goals)
    .slice(0, 10);

  // Goals + Assists combined
  const goalsAssists = playersData
    .filter(p => p.position !== 'GK')
    .map(p => ({
      name: p.name.split(' ').pop(),
      goals: p.goals,
      assists: p.assists,
      total: p.goals + p.assists
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  // Position distribution
  const positionData = [
    { 
      name: 'Forwards', 
      value: playersData.filter(p => ['ST', 'LS', 'FW', 'RW', 'LW'].includes(p.position)).length, 
      color: '#DC143C' 
    },
    { 
      name: 'Midfielders', 
      value: playersData.filter(p => p.position === 'CM').length, 
      color: '#00205B' 
    },
    { 
      name: 'Defenders', 
      value: playersData.filter(p => ['CB', 'RB', 'LB'].includes(p.position)).length, 
      color: '#FFFFFF' 
    },
    { 
      name: 'Goalkeepers', 
      value: playersData.filter(p => p.position === 'GK').length, 
      color: '#FFD700' 
    },
  ];

  // Performance scatter data
  const scatterData = playersData.filter(p => p.position !== 'GK');

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
      gap: '2rem' 
    }}>
      <TopScorers data={topScorers} />
      <GoalContributions data={goalsAssists} />
      <SquadDistribution data={positionData} />
      <PerformanceScatter data={scatterData} />
    </div>
  );
};

export default Overview;