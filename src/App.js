import { Route } from 'react-router-dom';
import React from 'react';
import Homepage from './component/pages/Homepage';
import Loginpage from './component/pages/Loginpage';

const App=() =>
    <div className="ui container">
     <Route path="/" exact component={Homepage} /> 
      <Route path="/login" exact component={Loginpage} />
    </div>
 
export default App;
