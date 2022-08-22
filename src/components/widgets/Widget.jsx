import {
  KeyboardArrowUp,
  PersonOutlined,
  PersonOutlineOutlined,
} from '@material-ui/icons';
import React from 'react';
import './widget.scss';
export const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">2131213</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          -20%
        </div>
        <PersonOutlined />
      </div>
    </div>
  );
};
