import React from 'react';
import Background from '../media/back.jpg';
import { MdOutlineFastfood } from 'react-icons/md';
import './DonaterSignUp.css';

const DonaterSignUp = () => {
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
                    <div className='signup-btns'>
                        <form action=""><input type="text" placeholder='Name of the Restaurant/Online Grocery Store' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                            <input type='text' placeholder='Location' />
                            <input type='number' placeholder='Pincode' />
                            <button onSubmit='' >Food Donater Sign Up</button>
                        </form>
                    </div>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonaterSignUp