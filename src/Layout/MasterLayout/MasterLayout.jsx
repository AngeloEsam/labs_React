import React from 'react'

 
import { Outlet } from 'react-router-dom';
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer';

export default function MasterLayout() {
  return (
    <div >
     <Header/>
      <div className="container">
        <Outlet/>
      </div>
    <Footer/>
    </div>
  )
}
