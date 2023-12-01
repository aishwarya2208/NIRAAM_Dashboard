import React from 'react';
import { Pie, BarChart } from '../component';
import { barChartData1 } from '../data/dummy';
import Sparkline from '../component/Charts/SparkLine';

const Wellness = () => {


  return (
    <div>
      <p style={{ fontSize: '36px', color: '#00226C', textAlign: 'center' }} className="text-white font-bold">
        Wellness and Disease Management
      </p>
      <div className="flex m-3 gap-2 items-center">
      <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div className="font-bold text-white" style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>
    Antibiotics
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ marginRight: '20px', marginLeft:'40px'}}>
      <Sparkline width="200px" height="450px" color="red" value="0.5" min="0.0" max="10" title="Tetracyclin"  />
    </div>
    <div style={{ marginRight: '20px' }}>
      <Sparkline width="200px" height="450px" color="skyblue" value="0.5" min="0" max="10" title="Penicillin" interval="5" />
    </div>
  </div>
</div>
<div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div className="font-bold text-white" style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>
    Disease Management
  </div>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
      <div className="font-bold text-green-500" style={{ textAlign: 'center', fontSize: '24px', marginBottom: '0px' }}>
        Mastitis: Negative
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <Sparkline width="200px" height="400px" color="green" value="150000" min="0" max="250000" title="ssc/ml" interval="50,000" />
        </div>
        <div style={{ marginRight: '10px' }}>
          <Sparkline width="200px" height="400px" color="green" value="5" min="0" max="8" title="EC" interval="2" />
        </div>
        <div style={{ marginRight: '10px' }}>
          <Sparkline width="200px" height="400px" color="green" value="6.8" min="0" max="10" title="pH" interval="2" />
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="font-bold text-red-500" style={{ textAlign: 'center', fontSize: '24px', marginBottom: '0px' }}>
        Ketosis: Positive
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <Sparkline width="200px" height="400px" color="red" value="10" min="0" max="20" title="bHB mg/dl" />
        </div>
      </div>
    </div>
  </div>
</div>


      </div>
      <div className="flex m-3 gap-2 items-center">
        <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="font-bold text-white" style={{ textAlign: 'center', fontSize: '24px' }}>
            Animal Wellness
          </p>
          <BarChart height="70%" width="113%" data={barChartData1} />
          {/* You can place your second component here */}
        </div>
      </div>
    </div>
  );
}

export default Wellness;
