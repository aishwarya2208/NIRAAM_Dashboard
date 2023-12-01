import React from 'react';
import { GoDotFill } from 'react-icons/go';
import {  BarChart, Pie, LineChart, SparkLine, Stacked, Button, VerticalMeterBar} from '../component';
import {lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis, earningData, SparklineAreaData, data1, data2, barChartData1 } from '../data/dummy';

import avatar from '../data/avatar.jpg';
import PieChart from '../component/Charts/Pie';
import Sparkline from '../component/Charts/SparkLine';


const Dashboard = () => {
  return (

    <>
    <div className="dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full flex  items-center">
      
          <div className="flex items-center h-20 p-3">
            <img
              src={avatar} // Use the correct relative path to your image
              alt="Your Avatar"
              className="rounded-full"
              style={{ width: '100px', height: '100px'}} />
            <div>
              <p className="font-bold text-black pt-3 pl-3" style={{ fontSize: '30px', whiteSpace: 'nowrap' }}>
                Hello Mukesh!
              </p>
              <p className="font-bold text-black pl-3" style={{ fontSize: '30px', whiteSpace: 'nowrap' }}>
                Cattle ID: RN8662
              </p>
            </div>
          </div>
       
      </div>

      <div className="flex m-3 gap-2  justify-center items-center flex-wrap">
  {earningData.map((item) => (
    <div
      key={item.amount}
      className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl flex-shrink-0 box" // Reduced padding here
    >
      <button
        type="button"
        style={{
          color: item.iconColor,
          backgroundColor: item.iconBg,
          padding: '10px', // Increase the padding to make the symbol area larger
          borderRadius: '20%', // Adjust the border-radius for the circular button
        
        }}
        className="text-2xl opacity-0.9 rounded-full hover:drop-shadow-xl"
      >
        {item.icon}
      </button>
      <p className="mt-3">
        <span className="text-lg text-white">
          {item.title}
        </span>
        <span className={`text-sm text-${item.pcColor} ml-2`}>
          {item.percentage}
        </span>
      </p>
      <p className="text-white text-2xl font-bold"> {item.amount}</p>
    </div>
  ))}
</div>




      

     
  <div className="flex m-3 gap-2 items-center">
  <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', display: 'flex' ,flexDirection: 'column' }}>
    <p className="text-white font-bold ">Mastitis </p>
   {/* <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>*/}
      <LineChart
        id="line-chart"
        height="400px" // Adjust the height to your desired value
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background="transparent"
      />
    {/*</div>*/}
    </div>
    <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}>

    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '0px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '0px' }}>
      <div className="font-bold text-green-500" style={{ textAlign: 'center', fontSize: '24px', marginBottom: '0px' }}>
        Mastitis: Negative
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '0px' }}>
          <Sparkline width="200px" height="400px" color="green" value="150000" min="0" max="250000" title="ssc/ml" interval="50,000" />
        </div>
        <div style={{ marginRight: '0px' }}>
          <Sparkline width="200px" height="400px" color="green" value="5" min="0" max="8" title="EC" interval="2" />
        </div>
        <div style={{ marginRight: '0px' }}>
          <Sparkline width="200px" height="400px" color="green" value="6.8" min="0" max="10" title="pH" interval="2" />
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="font-bold text-red-500" style={{ textAlign: 'center', fontSize: '24px', marginBottom: '0px' }}>
        Ketosis: Positive
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '0px' }}>
          <Sparkline width="200px" height="400px" color="red" value="10" min="0" max="20" title="bHB mg/dl" />
        </div>
      </div>
    </div>
  </div>
</div>
  
</div>


    
      
       {/*milk parameters*/}
       <div className="flex m-3 gap-2 items-center">
  <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', flex: '1' }}>
  <p className="text-white font-bold ">Rumen Health </p>
    <Pie height="100%" />
    
    {/* You can place your first component here */}
  </div>

  <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl" style={{ padding: '1rem', flex: '1' }}>
  <p className="text-white font-bold ">Animal Wellness </p>
    <BarChart height="100%" width="145%" data={barChartData1} interval={2} />
    {/* You can place your second component here */}

  </div>

 


</div>
   
      </>
    
  );
};

export default Dashboard;
