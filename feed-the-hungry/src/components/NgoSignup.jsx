import React from 'react';
import Background from '../media/back.jpg';
import { MdOutlineFastfood } from 'react-icons/md';
import './NgoSignup.css';


const NgoSignup = () => {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover', }}>
            <div className='ngoSignup'>
                <div className='ngoNavbar'>
                    <div className='ngologo'><MdOutlineFastfood /> Feed the Hungry</div>
                    <div className='ngonavbar-contents'>
                        <ul className='ngoUl'>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Plan Event?</li>
                            <li>Have a Problem?</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </div>
                <div className='ngosignup'>
                    <div className='ngosignup-btns' style={{padding:'0'}}> 
                        <form action="">
                           <input type="text" placeholder='Name of the consumer...' className='ngoInput' />
                           <input type="email" placeholder='Email...' className='ngoInput' />
                           <input type="password" placeholder='Password...'  className='ngoInput'/>
                           <input type="password" placeholder='Confirm Password...'  className='ngoInput'/>
                           <input type='text' placeholder='Location' className='ngoInput'/>
                           <input type='number' placeholder='Pincode' className='ngoInput'/>
                           <button onSubmit='' className='ngoSignup-btn' >Consumer Sign Up</button>
                        </form>
                    </div>
                    <div className=''>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NgoSignup