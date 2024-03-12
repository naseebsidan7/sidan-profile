import React from 'react'
import './box_profile.css'
import icon from '../../assets/images/IMG_20230613_211956.jpg'

 
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Box_profile = () => {
  return (
    <div className='box_container'>
          <div className='profile'>
               <img src={icon} alt="icon-person" />
               <h2>Naseeb Sidan</h2>
               <h4>Kerala,India</h4>
               <p> Front-End Developer And Web Designer. </p>
          </div>
          <div className='links_container'>
               <button className='button_custom' ><a href="https://github.com/naseebsidan7" target='_blank' >GitHub <span className='links-icons'><FaGithub/> </span></a>  </button>
               <button className='button_custom'><a href="https://www.linkedin.com/in/naseeb-sidan-16b371267/" target='_blank'> Linkdin <span className='links-icons'><FaLinkedin/> </span> </a></button>
               <button className='button_custom'><a href="https://github.com/naseebsidan7" target='_blank'> Twitter <span className='links-icons'><FaTwitter/> </span> </a></button>
               <button className='button_custom'><a href="https://www.instagram.com/sidan07_/" target='_blank'> Instagram <span className='links-icons'><FaInstagram/> </span> </a></button>
          </div>
    </div>
  )
}

export default Box_profile