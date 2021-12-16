import React from "react";
import { Outlet } from 'react-router-dom'
import './App.css';

function Home() {
    return (
        <body>
            <div className="Home">

                <Outlet />
            </div>
        </body >

    );
}

export default Home;
