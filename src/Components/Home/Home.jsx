import React from 'react'
import './home.scss'
import video from '../../assets/video1.mp4'
import {GrLocation} from 'react-icons/gr'

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>

                    <h1 className="homeTitle">Search your holiday</h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>

                        <div className="input flex">
                            <input type="text" placeholder='enter name here...' />
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>

                        <div className="input flex">
                            <input type="text" placeholder='enter name here...' />
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>

                        <div className="input flex">
                            <input type="text" placeholder='enter name here...' />
                            <GrLocation className='icon' />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Home