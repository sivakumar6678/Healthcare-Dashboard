import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './styles/layout.css';
import './styles/components.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
