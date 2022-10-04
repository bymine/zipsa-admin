import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ZIPSA</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <Person2OutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" /> <span>Products</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" /> <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Person2OutlinedIcon className="icon" /> <span>Stats</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" /> <span>Notifications</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" /> <span>System Health</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" /> <span>Logs</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <Person2OutlinedIcon className="icon" /> <span>Setting</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" /> <span>Profile</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
