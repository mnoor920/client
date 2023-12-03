import React from 'react'
import Logo from '../../assets/images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { MdCall } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <div className="page_width">
                    <nav>
                        <div className="bar_icon">
                            <FaBars />
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="nav_link">
                            <ul>
                                <li>
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/about_us">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact_us">Service</Link>
                                </li>
                                <li className>
                                    <a href> <MdCall /> <span>+9209000000000</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="icons_call">
                            <MdCall />
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header