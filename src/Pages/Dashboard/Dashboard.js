import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
      <h2 className='text-5xl text-purple-300 text-center'>Dashboard</h2>
      <Outlet/>
    {/* <!-- Page content here --> */}

  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Appointments</Link></li>
      <li><Link to='/dashboard/myreview'>My Review</Link></li>
      <li><Link to='/dashboard/myhistory'>My History</Link></li>
     {admin&&
     <ul>
        <li><Link to='/dashboard/users'>All Users</Link></li>
      <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
     </ul>
      }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;