import React from "react";
import logo from '../../images/logoCompany.png';
import './css/style.css';

export function HeaderInformation() {
    return (
        <div className="header-information">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Строительный калькулятор</h1>
        </div>
    );
}
