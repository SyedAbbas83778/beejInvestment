import React from 'react'
import './Investors-pieChart.css'
import { PieChart } from '@mui/x-charts/PieChart';


const InvestorsPieChart = () => {
  return (
<>

<div className="investor-pieChart">
  <p>Investment Sectors</p>
<PieChart className='pie-chart'
 colors={['#2A9D8F', '#38A3A5', '#2EC4B6','#38A3A5','#FFBC21']}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Aerospace' },
            { id: 1, value: 15, label: 'Agritech' },
            { id: 2, value: 20, label: 'Fintech' },
           { id: 3, value: 20, label: 'Healthcare' },
           { id: 4, value: 20, label: 'Realestate' },
          ],
        },
      ]}
      // width={400}
      // height={200}
    />
</div>
</>

    )
}

export default InvestorsPieChart