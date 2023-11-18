import React from 'react'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <div>
            <header>
                <div className="page_width">
                    <nav>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="nav_link">
                            <ul>
                                <li>
                                    <a href>Home</a>
                                </li>
                                <li>
                                    <a href>About</a>
                                </li>
                                <li>
                                    <a href>Service</a>
                                </li>
                                <li className>
                                    <a href> <img src alt="" /> +9209000000000</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header