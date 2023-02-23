import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';


import './Header.css';

const Header = () => {
   const {user} = useAppContext()
    const liStyle = {
        listStyle: "none",
        display: 'flex',
        justifyContent: 'center', 
    }
  return (
    <nav className='container' >
        <ul className='d-flex gap-5' style={liStyle}>
            <li>
                <Link to='/'>Home</Link>
                </li>
            <li>
                <Link to='/products'>Products</Link>
                </li>
            <li>
                <Link to='/about'>About</Link>
                </li>
            <li>
               {user && <div>{user.name}</div>} 
               {!user && (
                 <Link to='/auth'>
                 <button className='btn btn-primary'>Sign In</button>
                 </Link>
               )}
                </li>
        </ul>
    </nav>
  );
};

export default Header;