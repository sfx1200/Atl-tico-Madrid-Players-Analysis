import React from 'react';
import TopScorers from './TopScorers';
import GoalContributions from './GoalContributions';

const Overview = ({ playersData }) => {
  // Top scorers
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

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
      gap: '2rem',
      marginTop: '2rem'
    }}>
      <TopScorers data={topScorers} />
      <GoalContributions data={goalsAssists} />
    </div>
  );
};

export default Overview;
