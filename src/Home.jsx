import { Button } from '@material-ui/core';
import React from 'react'
import img from './images/KaranAvatar.svg';
function Home() {
    return (
        <div className='container-fluid'>
            <div className='homes row'>
            <div className=' leftyHomes col-lg-6'>
               <div className='lf'>
               <h2 >Hey There! Thank You for visiting my page.<br/> I am Fullstack Developer and this website is made with ReactJs.</h2>
               <Button >Hire Me</Button>
               </div>
            </div>
            <div className='rightyHomes col-lg-6'>
                <img src={img} alt=' ' />
            </div>
        </div>
        </div>
        
    )
}

export default Home
