import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber';

const DashboardLayout = () => {
    return (
        <div>
            <Navber/>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-slate-400 text-white ">
      <li><Link to='/dashboard'>My Orders</Link></li>
      
      
  <li><Link to='/dashboard/allsealer'>All Sealer</Link></li>
  <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
  <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
  <li><Link to='/dashboard/myproduct'>My Products</Link></li>
  <li><Link to='/dashboard/managedoctors'></Link></li>
       

    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;