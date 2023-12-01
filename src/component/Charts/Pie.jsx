import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  AccumulationLegend,
  PieSeries,
} from '@syncfusion/ej2-react-charts';

const Pie = ({ height}) => {
  const data1 = [
    { x: 'Milk Urea Nitrogen', y: 16, text: 'Milk Urea Nitrogen: 16%', fill: '#00226C' },
    { x: 'Lactose', y: 4.85, text: 'Lactose: 4.85%', fill: '#0450C2' },
    { x: 'Crude Protein', y: 0.59, text: 'Crude Protein: 0.59%', fill: '#0073DC' },
    { x: 'True Protein', y: 2.53, text: 'True Protein: 2.53%', fill: '#0D98FF' },
    { x: 'Fat', y: 3.4, text: 'Fat: 3.4%', fill: '#9CD9FF' },
    { x: 'Casein', y: 2.6, text: 'Casein: 2.6%', fill: '#3399FF' }, // Different shade of blue
    { x: 'Water', y: 86.83, text: 'Water: 86.83%', fill: '#FF6F61 '  },
];

  

  return (
    <AccumulationChartComponent id='piecharts' background='transparent' radius={height}>
      <Inject services={[PieSeries, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data1}
          xName='x'
          yName='y'
          type='Pie'
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Outside'
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}

export default Pie;
