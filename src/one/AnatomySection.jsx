import React from 'react';

const AnatomySection = () => (
  <div className="anatomy-section">
    <h2>Body Overview</h2>
    <p style={{ color: '#666', marginBottom: '15px', fontSize: '14px' }}>
      Health indicators on body map
    </p>
    
    <div style={{ 
      background: '#f0f2f5', 
      borderRadius: '8px', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '250px'
    }}>
      <div style={{ 
        width: '100px', 
        height: '200px', 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Simple body outline */}
        <div style={{ 
          width: '35px', 
          height: '35px', 
          background: 'white',
          borderRadius: '50%',
          border: '1px solid #3b5998'
        }}></div>
        <div style={{ 
          width: '70px', 
          height: '80px', 
          background: 'white',
          borderRadius: '10px 10px 15px 15px',
          border: '1px solid #3b5998',
          marginTop: '5px'
        }}></div>
        <div style={{ 
          display: 'flex', 
          marginTop: '5px'
        }}>
          <div style={{ 
            width: '15px', 
            height: '60px', 
            background: 'white',
            borderRadius: '5px',
            border: '1px solid #3b5998',
            marginRight: '5px'
          }}></div>
          <div style={{ 
            width: '15px', 
            height: '60px', 
            background: 'white',
            borderRadius: '5px',
            border: '1px solid #3b5998',
            marginLeft: '5px'
          }}></div>
        </div>
        
        {/* Health indicators */}
        <div style={{ 
          position: 'absolute', 
          top: '40px', 
          right: '-10px',
          background: '#4CAF50',
          color: 'white',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px'
        }}>❤️</div>
        
        <div style={{ 
          position: 'absolute', 
          top: '80px', 
          left: '-10px',
          background: '#FF9800',
          color: 'white',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px'
        }}>🫁</div>
        
        <div style={{ 
          position: 'absolute', 
          top: '120px', 
          right: '-10px',
          background: '#F44336',
          color: 'white',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px'
        }}>🩸</div>
      </div>
    </div>
    
    <div style={{ marginTop: '15px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <span style={{ 
          display: 'inline-block', 
          width: '10px', 
          height: '10px', 
          borderRadius: '50%', 
          background: '#4CAF50',
          marginRight: '5px'
        }}></span>
        <span style={{ fontSize: '13px' }}>Normal</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <span style={{ 
          display: 'inline-block', 
          width: '10px', 
          height: '10px', 
          borderRadius: '50%', 
          background: '#FF9800',
          marginRight: '5px'
        }}></span>
        <span style={{ fontSize: '13px' }}>Elevated</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ 
          display: 'inline-block', 
          width: '10px', 
          height: '10px', 
          borderRadius: '50%', 
          background: '#F44336',
          marginRight: '5px'
        }}></span>
        <span style={{ fontSize: '13px' }}>Low</span>
      </div>
    </div>
  </div>
);

export default AnatomySection;
