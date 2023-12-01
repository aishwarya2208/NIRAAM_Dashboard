import React from "react";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';

const Sparkline = ({ width, height, color, value, min, max, title, interval }) => {
  const gaugeStyle = {
    width: width || '100%', // Use the provided width or default to 100%
    height: height || '100px', // Use the provided height or default to 200px
  };
  const titleStyle = {
    textAlign: 'center', // Center the text horizontally
    margin: 'auto', // Center the text vertically
    color: 'white'
    
  };
  

  // Ensure that interval is a number and then format it to one decimal place
  // Ensure that interval is a number and then format it to two decimal places
const formattedInterval = typeof interval === 'number' ? parseFloat(interval.toFixed(2)) : interval;


  // Ensure that value, min, and max are floats
  const floatValue = parseFloat(value);
  const floatMin = parseFloat(min);
  const floatMax = parseFloat(max);

  return (
    <div>
      <LinearGaugeComponent container={{ width: 0 }} style={gaugeStyle} background='transparent' border={{ color: 'transparent', width: 2 }} margin={{ left: 70, right: 0, top: 0, bottom: 0 }}>
        <AxesDirective >
          <AxisDirective minimum={floatMin} maximum={floatMax} interval={formattedInterval} type ="tank">
            <PointersDirective>
              <PointerDirective value={floatValue} width={15} type='Bar' color={color} />
            </PointersDirective>
          </AxisDirective>
        </AxesDirective>
      </LinearGaugeComponent>
      {title && <h3 style={titleStyle}>{title}</h3>}
    </div>
);

}

export default Sparkline;
