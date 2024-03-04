import React from "react";

import "./Dashboard.CSS";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import TotalInvestors from "./TotalInvestors/TotalInvestors"
import Investors from "./investors/Investors";
import InvestorsPieChart from "./investors-pieChart/Investors-pieChart";
import TransactionTable from "./TransactionTable/TransactionTable";
import InvestmentGraph from "./InvestmentGraph/InvestmentGraph";

const Dashboard = () => {
  return (
    <>
      <div className="container1">
        <div className="container2">
          <Sidebar />
        </div>
        <div className="container3">
          <div className="container4">
          <Navbar />
          </div>
          <div className="container5">
          <TotalInvestors/>
          </div>
          <div className="container6">
          <div className="container7">
          <Investors/>
          </div>
          <div className="container8">
          <InvestorsPieChart/>
          </div>
          </div>
          <div className="container8">
          <div className="container9">
          <TransactionTable/>
          </div>
          <div className="container10">
          <InvestmentGraph/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
