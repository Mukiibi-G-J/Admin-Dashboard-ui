import React from 'react';
import './navbar.scss';
import {
  ListOutlined,
  ChatBubbleOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
  LanguageOutlined,
  FullscreenExitOutlined,
} from '@material-ui/icons';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search....." />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <div className="counter">1</div>

            <NotificationsNoneOutlined className="icon" />
          </div>
          <div className="item">
            <div className="counter">5</div>

            <ChatBubbleOutlined className="icon" />
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
