import React from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';

import './home.scss';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <h1> container </h1>
      </div>
    </div>
  );
};

export default Home;
