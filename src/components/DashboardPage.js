import React from 'react';
import Header from './Header';
import Destination from './Destination';
import Search from './Search';
import Results from './Results';
const DashboardPage = () => (
  <div>
  <Header/>
  <Destination/>
    Dashboard page content
    <Search/>
    <Results/>
  </div>
);

export default DashboardPage;
