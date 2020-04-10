import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <ul style={{display: 'flex', listStyle: 'none'}}>
                <li><Link to='/' activeClassName='active-nav'>Home</Link></li>
                <li><Link to='/about' activeClassName='active-nav'>About</Link></li>
                <li><Link to='/blog' activeClassName='active-nav'>Blog</Link></li>
                <li><Link to='/contact' activeClassName='active-nav'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
