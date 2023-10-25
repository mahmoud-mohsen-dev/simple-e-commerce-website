import React from "react";
import './Sidebar.css'
import Category from './category/Category'
import Color from './color/Color'
import Price from './price/Price'


function Sidebar({theFunc, initialData}) {
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          <h1 className="logo">🛒</h1>
        </div>
        <Category theFunc={theFunc} initialData={initialData} />
        <Price />
        <Color />
      </div>
    </>
  );
}

export default Sidebar;
