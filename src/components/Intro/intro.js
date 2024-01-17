import React from 'react';
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
       <span className='hello'>Hello,</span>
       <span className='introText'>I'm <span className='introName'>Velasco</span> <br />Front-End Developer</span>
       <p className='introPara'>I am a skilled Front-End Developer with experience in creating <br />visually and user friendly websites. </p>
       <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'></img>Hire me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
