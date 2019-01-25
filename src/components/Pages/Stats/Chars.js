import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';




const data = (organized)=>{ 
  let valuesX = [];
  let valuesY = [];
  console.log('organized',organized);
  for (var key in organized) {
    valuesY.push(key);
    valuesX.push(organized[key].length)
  }
    
  return{
  labels: valuesY,
  datasets: [
    {
      label: 'Resumen de Componentes',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data:valuesX
    }
  ]
};
}




const ChartModule = (props) => {
    console.log('stats',props.course);
    return (
      <div>
        <HorizontalBar data={data(props.course.organized)} />
      </div>
    );
    
}


export default ChartModule;