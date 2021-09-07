import { Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Homepage from './component/pages/Homepage';
import Loginpage from './component/pages/Loginpage';
import Dashboardpage from './component/pages/Dashboardpage';
import Signuppage from './component/pages/Signuppage';
import Confirmationpage from './component/pages/Confirmationpage';
import UserRoute from './component/routes/UserRoute';
import GuestRoute from './component/routes/GuestRoute';


const App=({ location }) => (
    <div className="ui container">
      <Route location={location} path="/" exact component={Homepage} /> 
      <Route location={location} path="/confirmation/:token" exact component={Confirmationpage} /> 
      <GuestRoute location={location} path="/login" exact component={Loginpage} />
      <GuestRoute location={location} path="/signup" exact component={Signuppage} />
      <UserRoute location={location} path="/dashboard" exact component={Dashboardpage} />
    </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
