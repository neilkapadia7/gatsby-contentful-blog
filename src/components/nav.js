import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
    return (
        <div style={{width: '100%'}}>
            <ul style={{display: 'flex', listStyle: 'none'}}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav;
