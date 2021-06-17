import React from 'react';
import Logo from "../img/logo.png";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {BiMoon} from 'react-icons/bi'
import Contacts from "../page/contacts";

const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="flex-container">
                    <div className="content1"><img src={Logo} alt=""/></div>
                    <div className="content2">
                        <h4 className="m-0">Eng</h4>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="content3">
                        <ul className="d-flex list-unstyled justify-content-between w-100 m-0">
                            <li><Link to="/" className="text-light">About</Link></li>
                            <li><Link to="/" className="text-light">Works</Link></li>
                            <li><Link to="/" className="text-light">Prices</Link></li>
                            <li><Link to="/" className="text-light">For clients</Link></li>
                            <li><Link to="/about" className="text-light">Contacts</Link></li>
                        </ul>
                    </div>
                    <div className="content4">
                        <p className="m-0">+1(647)-563-9114</p>
                    </div>
                </div>
                <Switch>
                    <Route path="/about">
                        <Contacts />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Navbar;