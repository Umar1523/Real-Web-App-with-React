import { Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Homepage from './component/pages/Homepage';
import Loginpage from './component/pages/Loginpage';
import Dashboardpage from './component/pages/Dashboardpage';
import Signuppage from './component/pages/Signuppage';
import Confirmationpage from './component/pages/Confirmationpage';
import ForgotPasswordpage from './component/pages/ForgotPasswordpage';
import ResetPasswordpage from './component/pages/ResetPasswordpage';
import NewBookpage from './component/pages/NewBookpage';
import UserRoute from './component/routes/UserRoute';
import GuestRoute from './component/routes/GuestRoute';
import TopNavigation from './component/navigation/TopNavigation';
import { connect } from 'react-redux'; 
NewBookpage

const App=({ location, isAuthenticated }) => (
    <div className="ui container">
       {isAuthenticated && <TopNavigation /> }
      <Route location={location} path="/" exact component={Homepage} /> 
      <Route location={location} path="/confirmation/:token" exact component={Confirmationpage} /> 
      <GuestRoute location={location} path="/login" exact component={Loginpage} />
      <GuestRoute location={location} path="/signup" exact component={Signuppage} />
      <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordpage} />
      <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordpage} />
      <UserRoute location={location} path="/dashboard" exact component={Dashboardpage} />
      <UserRoute location={location} path="/books/new" exact component={NewBookpage} />
    </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
      isAuthenticated: !!state.user.email
  }    
} 

export default connect(mapStateToProps)(App);
