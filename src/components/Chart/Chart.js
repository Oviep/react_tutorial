import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues= props.dataPoints.map(data => data.value);
    const totalMaximum= Math.max(...dataPointValues)

    return <div className='chart'>
        {props.dataPoints.map(data => <ChartBar key={data.label}
         value={data.value} 
        maxValue={totalMaximum}
        label={data.label}    
        />)}
    </div>
}

export default Chart