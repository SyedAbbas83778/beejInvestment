
import React from 'react'
import './Investors.css'
import { Bar } from 'react-chartjs-2'
import { Chart, LinearScale, CategoryScale, BarElement, Tooltip, Legend} from 'chart.js';


Chart.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend)

const labels = ['jan', 'feb', 'mar', 'apr', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];

const options={
    Plugin:{
        legend:{
            position:"top"
        },
        title:{
            display:true,
            Text:"Investor Amount"
        }
    }
}

const data = {
    labels,
    datasets: [
        {
            label: '2023 expense',
            data: [1500, 10000, 20000, 5000,8000,10000,18000,11000,20000,13000,10000,17000],
             backgroundColor: "lightgreen"
           
        }
    ]
}

const Investors = () => {
    return (
        <>
        <div className="investor-graph">
            <div className="investor-graph-info">
                <div className="investor-graph-heading">
            <p>Investments</p>
            </div>
            <div className="investor-graph-para">
                <p>Week</p>
                <p>Month</p>
                <p>Year</p>
            </div>
            </div>
        <div className="graph">
            <p>Investor Amount</p>
            <Bar options={options} data={data} />
            </div>
            </div>
        </>
    )
}

export default Investors;
