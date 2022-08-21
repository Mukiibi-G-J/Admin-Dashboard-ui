import React from 'react';
import './sidebar.scss';
import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  ExitToApp,
  InsertChart,
  LocalShipping,
  NotificationsNone,
  PersonOutline,
  SettingsApplications,
  SettingsSystemDaydreamOutlined,
  Store,
} from '@material-ui/icons';
import PsychologyIcon from '@mui/icons-material/Psychology';
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <h1 className="logo">Mukiibiadmin</h1>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutline />
            <span>Users</span>
          </li>
          <li>
            <Store />
            <span>Products</span>
          </li>
          <li>
            <CreditCard />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping />
            <span>Delivery</span>
          </li>
          <li>
            <InsertChart />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlined />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlined />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
