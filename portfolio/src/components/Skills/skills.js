import React from 'react';
import './skills.css';
import FrontEnd from '../../assets/frontend.png';
import AppDesign from '../../assets/app-design.png'; 
import ReactDesign from '../../assets/react.png';


const Skills = () => {
    return(
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I  am a skilled Front-end Developer, these are my skills:</span>
        <div className='skillBars'>
           
        <div className='skillBar'>
                <img src={FrontEnd} alt='FrontEnd' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Front-End Design</h2>
                    <p>Whether it's React, Angular, or Vue.js, I have hands-on experience with leading front-end frameworks to build scalable and efficient web applications.</p>
                </div>
                
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Armed with proficiency in industry-standard design tools and a commitment to staying ahead of the curve with the latest trends, I bring a fresh perspective to every project. Whether it's creating seamless user experiences, solving complex design challenges, or collaborating with cross-functional teams, I thrive on transforming ideas into interactive and delightful applications.</p>
                </div>
                
            </div>

            <div className='skillBar'>
                <img src={ReactDesign} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>React Developer</h2>
                    <p>From crafting interactive components to architecting dynamic front-end solutions, I thrive in the ever-evolving landscape of web development. My expertise extends to state management, component lifecycle optimization, and integrating third-party APIs, all while adhering to best practices and staying attuned to the latest industry trends.</p>
                </div>
                
            </div>
        </div>

    </section>
    )
}



export default Skills;
