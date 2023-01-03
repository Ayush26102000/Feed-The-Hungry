import React from 'react';
import '../components/Home.css';
import Background from '../media/back.jpg';
import { MdOutlineFastfood } from 'react-icons/md';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover', }}>
            <div className='Home'>
                <div className='Navbar'>
                    <div className='logo'><MdOutlineFastfood /> <span> Feed the Hungry</span></div>
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

                    <div className='signup-btns'>
                        <div className='slogan'>
                            <h1>Think Eat
                                 <span> Save.</span>
                            </h1>
                            <p>Food Forward fights hunger and prevents food waste by rescuing<br /> fresh surplus produce,
                                connecting this abundance with people <br />experiencing food insecurity, and inspiring 
                                others <br />to do the same.</p>
                        </div>
                        <button className='ngo-signup'>Ngo / Consumer Sign Up</button>
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