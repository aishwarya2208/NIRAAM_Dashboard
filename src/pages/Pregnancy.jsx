import React from 'react';
import Sparkline from '../component/Charts/SparkLine';

const Pregnancy = () => {
  const containerStyle = {
    background: '#00226C', // Blue background color
    color: '#fff', // Text color
    minHeight: '100vh', // Minimum height to cover the whole page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    overflow: 'hidden',
    width:'100%'
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    overflow:'hidden'
  };

  const blueContainerStyle = {
    background: '#00226C',
   
    borderRadius: '8px',
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow:'hidden'
    // Each container takes 33.33% of the row
  };

  return (
    <div style={containerStyle}>
      <p style={{ fontSize: '24px' }} className="text-white font-bold">Pregnancy and Estrous Health</p>

      <div style={rowStyle}>
        <div style={blueContainerStyle}>
          <Sparkline height="400px" width="400px" color="purple" value="0" min="0" max="10" title="Progestrone ng/mL" interval="2.5" />
        </div>

        <div style={blueContainerStyle}>
          <Sparkline height="400px" width="400px" color="yellow" value="0" min="0" max="10" title="PAG ng/mL" />
        </div>

        <div style={blueContainerStyle}>
          <Sparkline height="400px" width="400px" color="pink" value="0" min="0" max="20" title="Estrone sulfate ng/mL" interval="1.25" />
        </div>
      </div>
    </div>
  );
}

export default Pregnancy;
