import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.PNG'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'


const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'></span>
        <div className='worksImgs'>
            <a href="https://mern-estate-xdt0.onrender.com/">
            <img src={Portfolio1} alt='' className='worksImg' />
            </a>
            <img src={Portfolio2} alt='' className='worksImg' />
            <img src={Portfolio3} alt='' className='worksImg' />
             </div>
             <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works;
