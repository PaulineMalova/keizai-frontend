import React from "react";
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Login from './login';

function App() {
  return (
    <body>
      <div className="Page">
        <div className="App">
          <div className="home-left">
          </div>

          <div className="home-right">
            <div className="login">
              <h2>Login</h2>
              <Login />
            </div>
            <div className="forgot-password">
              <Link to="/reset-password" className="link-button">Forgot password?</Link>
            </div>
            <div className="no-account">
              <p>Don't have an account? <Link to="/register" className="link-button">Register</Link></p>
            </div>

          </div>

        </div>
        <Outlet />
      </div>
    </body >

  );
}

export default App;
