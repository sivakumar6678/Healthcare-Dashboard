import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './styles/layout.css';
import './styles/components.css';

function App() {
  return (
    <>
      
      <div className="app-container">
        <Header />
        <div className="main-content-area">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
