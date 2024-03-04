import React from "react";
import "./Sidebar.css";
import logo from "../images/logo.png";
import Profile from "../images/Profile.png";
import Profile2 from "../images/homelogo.svg";
import Profile3 from "../images/handshake.svg";
import Profile4 from "../images/briefcase.svg";
import Profile5 from "../images/rocket-lunch.svg";
import Profile6 from "../images/Home.svg";
import Profile7 from "../images/group 6.svg";





const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="admin">
          <img src={Profile} alt="" />
          <div className="profile-info">
            <h2>Admin 03</h2>
            <p>Pro User</p>
          </div>
        </div>
        <div className="sidebar-info">
        <div className="profile-info2">
      <img src={Profile2} alt="" />
      <p>Dashboard</p>
        </div>
        <div className="profile-info3">
      <img src={Profile3} alt="" />
      <p>Investors</p>
        </div>
        <div className="profile-info4">
      <img src={Profile4} alt="" />
      <p>Founders</p>
        </div>
        <div className="profile-info5">
      <img src={Profile5} alt="" />
      <p>Startups</p>
        </div>
        <div className="profile-info6">
      <img src={Profile6} alt="" />
      <p>Home Page</p>
        </div>
        </div>
        </div>
        <div className="logout">
       <img src={Profile7} alt="" />
       <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
