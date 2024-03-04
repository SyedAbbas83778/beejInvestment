import React from 'react'
import './TransactionTable.css'





const TransactionTable = () => {
  return (
    <>
    <div className="TransactionTable">

        <div className="TransactionTable-heading">
    <p>Transactions</p>
    </div>

<table>
  <tr>
    <th><p>Investor</p></th>
    <th><p>Startup</p></th>
    <th><p>Date & Time</p></th>
    <th><p>Amount Invested</p></th>
  </tr>
  <tr>
    <td><p>Norman Moss</p></td>
    <td><p>Air Garage</p></td>
    <td><p>10th Oct</p></td>
    <td><p>50,000</p></td>
  </tr>
 
  <tr>
   <td><p>Jasmine Tillery</p></td>
    <td><p>Loom</p></td>
    <td><p>24th nov</p></td>
    <td><p>50,000</p></td>
  
  </tr>
  <tr>
   <td><p>Mabel Mallen</p></td>
    <td><p>Checkr</p></td>
    <td><p>2nd May</p></td>
    <td><p>50,00,00</p></td>

  </tr>
  <tr>
  <td><p>Don Sider </p></td>
    <td><p>Divvy</p> </td>
    <td><p>20th nov</p></td>
    <td><p>20,000</p></td>
  </tr>

</table>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default TransactionTable