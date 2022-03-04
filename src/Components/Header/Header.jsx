import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {FaCompactDisc} from 'react-icons/fa'


function Header() {
  return (
    <nav className='navbar'>
        <Link to="/" className='navbar-element'>
            <FaCompactDisc className='icon' />
        </Link>

    </nav>
  )
}

export default Header