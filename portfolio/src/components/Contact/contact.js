import React,{ useRef } from 'react';
import './contact.css'
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.webp';
import Facebook from '../../assets/facebook.png';
import GithubIcon from '../../assets/github.png'
import InstagramIcon from '../../assets/instagram.png'
import XIcon from '../../assets/twitter.png'
import LinkedinIcon from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vmz98zb', 'template_ctro7mu', form.current, '4C0nqNF899zs3Em4M')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');

          }, (error) => {
                   console.log(error.text);
          });
      };
  return (
   <section id='contactPage'>
    <div id='clients'>
      <h1 className='contactPageTitle'>My Clients</h1>
      <p className='clientDesc'>
        I have had the opportunity to work with a diverse group of companies.
      </p>
    </div>
    <div className='clientImgs'>
        <img src={Adobe} className='clientImg' />
        <img src={Microsoft} className='clientImg' />
        <img src={Facebook} className='clientImg' />
    </div>

    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='to_name' />
            <input type='email' className='email' placeholder='Your Email' name='your_email' />
            <textarea className='msg' name='message' rows="5" placeholder='Message' ></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
              <a href="https://github.com/Alessandro-Velasco" target="_blank">
             <img src={GithubIcon} alt='Github' className='link' />
             </a>
             
             <a href="https://www.linkedin.com/in/alessandro-velasco-2b992263/" target='_blank'>
             <img src={LinkedinIcon} alt='Linkedin' className='link' />
             </a>
            </div>
        </form>
        
        </div>
   </section>
  )
}

export default Contact;
