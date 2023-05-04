import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import BeerGarden from './pages/BeerGarden';
import BuddiesPage from './pages/BuddiesPage';





function App() {
  
  return (
    <Router>

    <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BuddiesPage" element={<BuddiesPage />} />
        {/* <Route path="/UserSettingsPage" element={<UserSettings />} /> */}
        <Route path="/BeerGarden" element={<BeerGarden />} />
        
    </Routes>
  
  </Router>
  );
}
export default App;