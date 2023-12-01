import React from 'react';
import { ChartComponent, SeriesCollectionDirective,SeriesDirective,Inject, LineSeries,DateTime,Legend,Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
class LineChart extends React.PureComponent {
  render() {
    const { id, height, width, primaryXAxis,primaryYAxis, chartArea,tooltip,backGround } = this.props;
 
  return (
    <ChartComponent
    id = "line-chart"
    height = "400px"
    width = "650px"
    primaryXAxis ={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0 }}}
    tooltip ={{enable:true }}
    background = {'transparent'}
    >
      <Inject services ={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index)=>
        <SeriesDirective key ={index} {...item}/>)}
    
      </SeriesCollectionDirective>
    </ChartComponent>
   
  );
}
}

export default LineChart