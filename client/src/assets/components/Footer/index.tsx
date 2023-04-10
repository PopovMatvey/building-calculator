import React from "react";
import logo from '../../images/logoCompany.png';
import "./css/style.css";

export function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Строительный калькулятор</h1>
            </div>
            <span>Copyright © 2023 Web by Popov Matvey.</span>
        </footer>
    );
}