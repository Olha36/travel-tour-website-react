import React from 'react'
import './footer.scss'
import video2 from '../../assets/video/video2.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa6';
import { FaYoutube, FaTripadvisor,FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex"></div>
                    <input type="text" placeholder='Enter email address' />
                    <button className="btn flex" type='submit'>
                      SEND  <FiSend className='icon' />
                    </button>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <a href="#" className='logo flex'>
                            <MdOutlineTravelExplore className='icon' />  
                            Travel.
                        </a>

                        <div className="footerParagraph">
                        Discover the world with our expertly crafted tours that promise unforgettable experiences. 
                        From captivating cultural excursions to thrilling adventures in breathtaking landscapes, our 
                        tours are designed to cater to every traveler&apos;s wanderlust. Immerse yourself in the beauty 
                        of diverse destinations, guided by knowledgeable locals who ensure an enriching and seamless 
                        journey. Book your next adventure with us and let the exploration begin. Your extraordinary 
                        travel memories start here.
                        </div>

                        <div className="footerSocials flex">
                            <FaTwitter className='icon' />
                            <FaYoutube className='icon' />
                            <FaInstagramSquare className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>

                    </div>

                    <div className="footerLinks grid">
                        <div className="linkGroup"></div>
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className='icon' />
                            Services
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon' />
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon' />
                            Agency
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon' />
                            Tourism
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className='icon' />
                            Payment
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer