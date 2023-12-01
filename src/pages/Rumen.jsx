import React from 'react';
import { Pie } from '../component';

const Rumen = () => {
  const containerStyle = {
    background: '#00226C', // Blue background color
    color: '#fff', // Text color
    minHeight: '100vh', // Minimum height to cover the whole page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem', // Adjust padding as needed
  };

  return (
    <div style={containerStyle}>
      <h1 className="text-2xl font-bold">Rumen Health</h1>
      <Pie height="100%" width="100%" />
    </div>
  );
}

export default Rumen;
