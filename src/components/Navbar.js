import React, { useState } from 'react'
import '../css/Navbar.css'
import '../css/base.css'

const Navbar = () => {
    
    const [arrowClicked, setArrowClicked] = useState(true)

    const languageClicked = () => {

        if (document.getElementById("arrow") && document.getElementById("drop-down1") ) {
            if (arrowClicked) {
                document.getElementById("arrow").style.transform = "rotate(135deg)"
                document.getElementById("drop-down1").style.display = "block"
                setArrowClicked(false)
            } else {
                document.getElementById("arrow").style.transform = "rotate(-45deg)"
                document.getElementById("drop-down1").style.display = "none"
                setArrowClicked(true)
            }
        }
    }

    return (
        <header>
            <nav className="fixed-nav-bar">
                <div id="menu" className="menu">
                        <a className="sitename" href="#asd"><img id="img1" alt="Uplify" width="50px" src={require('../assets/photos/uplify_logo.png')}/>Uplify</a>
                        <a className="show" href="#menu">Menu</a><a className="hide" href="#hidemenu">Menu</a>
                        <ul className="menu-items">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#startups">Startups</a></li>
                            <li><a href="#Investors">Investors</a></li>
                            <li className="sub-menu">
                                <a id="with-arr" onClick={languageClicked}>Languages<div id="arrow"></div></a>
                                <ul id="drop-down1">
                                    <li><center><a href="#Romanian">Română</a></center></li><hr className="draw-line" />
                                    <li><center><a href="#Russian">Русский</a></center></li><hr className="draw-line" />
                                    <li><center><a href="#English">English</a></center></li>
                                </ul>
                            </li>
                            <li><a href="#Languages"><button className="login-btn">Login</button></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar