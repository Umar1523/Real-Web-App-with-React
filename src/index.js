import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';


const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.bookwormJWT) {
  const payload = decode(localStorage.bookwormJWT);
  const user = { 
    token: localStorage.bookwormJWT, 
    email: payload.email, 
    confirmed: payload.confirmed 
  };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
