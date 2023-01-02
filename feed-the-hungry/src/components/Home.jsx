import React from 'react';
import '../components/Home.css';
import Background from '../media/back.jpg';
import { MdOutlineFastfood } from 'react-icons/md';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover', }}>
            <div className='Home'>
                <div className='Navbar'>
                    <div className='logo'><MdOutlineFastfood /> Feed the Hungry</div>
                    <div className='navbar-contents'>
                        <ul>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Plan Event?</li>
                            <li>Have a Problem?</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </div>
               <div className='signup'>
               <div className='signup-btns'> <button className='ngo-signup'>Ngo / Consumer Sign Up</button>
                    <button className='rest-signup'> Food Donater Sign Up</button>
                    <button>Have an Account? Login</button></div>
                <div className=''>
                    
                </div>
               </div>
            </div>
        </div>
    )
}

export default Home