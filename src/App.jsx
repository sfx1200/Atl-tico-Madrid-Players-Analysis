import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Overview from './components/Overview/Overview';
import Attackers from './components/Attackers/Attackers';
import Midfielders from './components/Midfielders/Midfielders';
import Defenders from './components/Defenders/Defenders';
import PlayerComparison from './components/PlayerComparison/PlayerComparison';
import Footer from './components/Footer/Footer';
import playersData from './data/playersData';
import colors from './styles/colors';

const App = () => {
  const [selectedView, setSelectedView] = useState('overview');

  // Team stats
  const totalGoals = playersData.reduce((sum, p) => sum + p.goals, 0);
  const totalAssists = playersData.reduce((sum, p) => sum + p.assists, 0);
  const avgRating = (playersData.reduce((sum, p) => sum + p.rating, 0) / playersData.length).toFixed(2);
  const squadSize = playersData.length;

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, ${colors.background} 0%, #1a0e1f 100%)`,
      color: colors.text,
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '2rem'
    }}>
      
      {/* HEADER */}
      <Header 
        totalGoals={totalGoals}
        totalAssists={totalAssists}
        avgRating={avgRating}
        squadSize={squadSize}
      />

      {/* NAVIGATION */}
      <Navigation 
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />

      {/* VIEWS */}
      {selectedView === 'overview' && <Overview playersData={playersData} />}
      {selectedView === 'attackers' && <Attackers playersData={playersData} />}
      {selectedView === 'midfielders' && <Midfielders playersData={playersData} />}
      {selectedView === 'defenders' && <Defenders playersData={playersData} />}
      {selectedView === 'comparison' && <PlayerComparison playersData={playersData} />}

      <Footer />

    </div>
  );
};

export default App;
