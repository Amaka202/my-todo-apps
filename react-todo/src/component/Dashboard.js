import React from 'react';
import { useNavigate } from "react-router-dom";

function Dashbord() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="titular">
                <img src="../../../assets/img/bg.jpg" alt="Students gathered around a table, laughing" className="bg" />
                <p className="tagline">Awesome Todo App</p>
                <p className="subtitle">Take your productivity to a new level</p>
                <button className="btn" onClick={() => navigate("/todo")}>Get Started</button>
            </div>
        </div>
    )
}

export default Dashbord;
