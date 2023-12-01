import * as React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Legend,
  Tooltip,
  DataLabel,
  BarSeries
} from '@syncfusion/ej2-react-charts';

const BarChart = ({ id, height, width, data, interval }) => {
  const primaryxAxis = {
    valueType: 'Category',
    title: 'Milk Parameters',
    labelStyle: {
      color: 'white' // Set the label text color to white for X-axis
    }
  };

  const primaryyAxis = {
    title: 'Amount',
    labelFormat: '{value}',
    labelStyle: {
      color: 'white'
    },
    majorGridLines: { width: 1 }, // Adjust the width of major grid lines
    interval: interval, // Set the desired interval for the y-axis
  };

  return (
    <div>
      <ChartComponent id={id} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} background="transparent" height={height} width={width} tooltip={{ enable: true }}>
        <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='x' yName='y' type='Bar' name='Value' dataLabel={{
            visible: true,
            name: 'text',
            position: 'Outside'
          }} />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default BarChart;
