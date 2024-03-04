import React from 'react'
import './InvestmentGraph.css'
import { Bar } from 'react-chartjs-2'
import { Chart, LinearScale, CategoryScale, BarElement, Tooltip, Legend} from 'chart.js';


Chart.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend)

const labels = ['Aerospace','Agritech','Fintech','Healthcare','Realestate','Financial Service'];

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
            label: '2023 Investments by Sector',
            data: [22,40,20,60,20,30],
             backgroundColor: "lightgreen"
           
        }
    ]
}


const InvestmentGraph = () => {
  return (
    <>
       <div className="investment-graph">
            <div className="investment-graph-info">
                <div className="investment-graph-heading">
            <p>Investments by Sector</p>
            </div>
            <div className="investment-graph-para">
                <p>Week</p>
                <p>Month</p>
                <p>Year</p>
            </div>
            </div>
        <div className="graph">
            <p>Amount</p>
            <Bar options={options} data={data} />
            </div>
            </div>
    
    
    
    </>
  )
}

export default InvestmentGraph