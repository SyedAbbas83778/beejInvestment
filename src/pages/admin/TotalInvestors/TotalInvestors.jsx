import React from 'react';
import './TotalInvestors.css';
import registered from "../images/registered.svg";
import userLogo from "../images/userlogo.svg";
import switchOn from "../images/switch-on.svg";
import entrance from "../images/entrance.svg";
import returning from "../images/returning-visitor.svg";
import {useSpring, animated} from "react-spring";

function Number({n}){
    const {number}=useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:1, tension:20, friction:10}
    });
    return<animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}


const TotalInvestors = () => {

    return (
  <>
<div className="total-information">
    <div className="card1">
        <div className="card-fullContent">
        <div className="investor-heading">
            <h1>Total Investors</h1>
        </div>
        <div className="img-content-num">
        <div className="image-context">
        <div className="investor-info">
            <img src={registered} alt="" />
            <img src={userLogo} alt="" />
            <img src={switchOn} alt="" />
        </div>
        <div className="investor-content">
            <p>Registered</p>
            <p>Active</p>
            <p>Inactive</p>
        </div>
        </div>
        <div className="investor-numbers">
            <h1><Number n={100}/></h1>
            <h1><Number n={95}/></h1>
            <h1><Number n={5}/></h1>
        </div>
        </div>
        </div>
    </div>



    <div className="card1">
        <div className="card-fullContent">
        <div className="investor-heading">
            <h1>Total Founders</h1>
        </div>
        <div className="img-content-num">
        <div className="image-context">
        <div className="investor-info">
            <img src={registered} alt="" />
            <img src={userLogo} alt="" />
            <img src={switchOn} alt="" />
        </div>
        <div className="investor-content">
            <p>Registered</p>
            <p>Active</p>
            <p>Inactive</p>
        </div>
        </div>
        <div className="investor-numbers">
        <h1><Number n={84}/></h1>
            <h1><Number n={63}/></h1>
            <h1><Number n={9}/></h1>
        </div>
        </div>
        </div>
    </div>


    <div className="card1">
        <div className="card-fullContent">
        <div className="investor-heading">
            <h1>Total Startups</h1>
        </div>
        <div className="img-content-num">
        <div className="image-context">
        <div className="investor-info">
            <img src={registered} alt="" />
            <img src={userLogo} alt="" />
            <img src={switchOn} alt="" />
        </div>
        <div className="investor-content">
            <p>Registered</p>
            <p>Active</p>
            <p>Inactive</p>
        </div>
        </div>
        <div className="investor-numbers">
        <h1><Number n={98}/></h1>
            <h1><Number n={90}/></h1>
            <h1><Number n={6}/></h1>
        </div>
        </div>
        </div>
    </div>

    <div className="card1">
        <div className="card-fullContent">
        <div className="investor-heading">
            <h1>Visitors</h1>
        </div>
        <div className="img-content-num">
        <div className="image-context">
        <div className="investor-info">
        <img src={returning} alt="" />
        <img src={entrance} alt="" />
        </div>
        <div className="investor-content">
            <p>Registered</p>
            <p>Active</p>
        </div>
        </div>
        <div className="investor-numbers">
        <h1><Number n={100}/></h1>
            <h1><Number n={60}/></h1>
        </div>
        </div>
        </div>
    </div>
    
</div>

  </>
    );
};

export default TotalInvestors;
