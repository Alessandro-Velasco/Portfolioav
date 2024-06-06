import React from 'react';
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';



const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
       <span className='hello'>Hello,</span>
       <span className='introText'>I'm <span className='introName'>Alessandro Velasco</span> <br />Front-End Developer</span>
       <p className='introPara'>I am a skilled Front-End Developer with experience in creating <br />visually and user friendly websites. </p>
       <a href="/velasco-alessandro-cv.pdf.pdf" download>
          <button className='btn'>
            <img src={btnImg} alt='Hire me' className='btnImg' />
            Hire me
          </button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
