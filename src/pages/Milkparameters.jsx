import React from 'react';
import { BarChart } from '../component';
import { barChartData1 } from '../data/dummy';

const Milkparameters = () => {
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

  // Custom CSS to make x and y axis markers and text white
  const customStyles = `
    .x-axis .axis-line,
    .x-axis .tick text,
    .y-axis .axis-line,
    .y-axis .tick text,
    .bar text {
      fill: white !important;
    }
  `;

  return (
    <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={containerStyle}>
  <p style={{ fontSize: '24px' }} className="text-white font-bold">Milk Parameters</p>
  <BarChart height="100%" width="400%" data={barChartData1} interval={2} />
  {/* You can place your second component here */}
</div>
  );
}

export default Milkparameters;
