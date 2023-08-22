import React from 'react'
import Timmer from './pages/Timmer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountdownTimer from './pages/Timmer'; 

function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path="/timmer" element={<Timmer />} />
    </Routes>
    </Router>
    <CountdownTimer />
    </div>
  );
}

export default App;
