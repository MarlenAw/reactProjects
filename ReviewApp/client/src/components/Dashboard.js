import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard heree!


      <div class="fixed-action-btn">
        <Link to="/dashboard/surveynew" class="btn-floating btn-large red">
          <i class="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};


export default Dashboard;
