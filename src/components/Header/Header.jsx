import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header id="header">
        <nav id="nav">
            <div className="nav-logo">
            <Link to="/">Pomodoro-Clone</Link>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Setting</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header