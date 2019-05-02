import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';




const data = (courses)=>{ 
  let valuesX = [];
  let valuesY = [];
  for (const course of courses) {
    let {organized} = course
    for (var key in organized) {
      let index =valuesY.findIndex(element => element === key)
      if (index >= 0 ) {
        valuesX[index] =  valuesX[index] + organized[key].length
      }else{
        valuesY.push(key);
        valuesX.push(organized[key].length)
      }

    }}
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

}
}




const ChartModule = (props) => {
    return (
      <div >
        <HorizontalBar data={data(props.courses)}   />
      </div>
    );
    
}


export default ChartModule;