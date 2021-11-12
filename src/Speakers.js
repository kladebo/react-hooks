import React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';

function index() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Speakers</h2>
            <h6 className="margintopbottom20">vla..</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
