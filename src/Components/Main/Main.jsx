import React, { useEffect } from 'react'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../assets/img/beach.jpg'
import beach2x from '../../assets/img/beach@2x.jpg'
import goldenBeachImg from '../../assets/img/goldenBeach.jpg'
import goldenBeach2xImg from '../../assets/img/goldenBeach@2x.jpg'
import portoKatsikiImg from '../../assets/img/portoKatsiki.jpeg'
import portoKatsiki2xImg from '../../assets/img/portoKatsiki@2x.jpeg'
import redBeachImg from '../../assets/img/redBeach.jpg'
import redBeach2xImg from '../../assets/img/redBeach@2x.jpg'
import sardiniaImg from '../../assets/img/sardinia.jpg'
import sardinia2xImg from '../../assets/img/sardinia@2x.jpg'
import orlandoImg from '../../assets/img/orlando.jpg'
import orlando2xImg from '../../assets/img/orlando@2x.jpg'
import zanzibarImg from '../../assets/img/zanzibar.jpg'
import zanzibar2xImg from '../../assets/img/zanzibar@2x.jpg'
import canaryIslandsImg from '../../assets/img/canaryIslands.jpg'
import canaryIslands2xImg from '../../assets/img/canaryIslands@2x.jpg'
import boracayImg from '../../assets/img/boracay.jpg'
import boracay2xImg from '../../assets/img/boracay@2x.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img,
        img2xSrc: beach2x,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 2,
        imgSrc: goldenBeachImg,
        img2xSrc: goldenBeach2xImg,
        destTitle: 'Golden beaches',
        location: 'Ciprus',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Golden beach in the Karpaz Peninsula, which is over 6 km long and perfect for a relaxing day immersed in nature as you enjoy the riches of the Mediterranean.'
    },
    {
        id: 3,
        imgSrc: portoKatsikiImg,
        img2xSrc: portoKatsiki2xImg,
        destTitle: 'Porto Katsiki',
        location: 'Greece',
        grade: 'CULTURAL RELAX',
        fees: '$100',
        description: 'Featuring a half-moon shape, Porto Katsiki showcases a mesmerizing pebbly shore that blends perfectly with the bright, turquoise-colored waters of the sea! Its deep seabed makes it perfect for a refreshing swim, though keep in mind that this shore gets populated during the high season!'
    },
    {
        id: 4,
        imgSrc: redBeachImg,
        img2xSrc: redBeach2xImg,
        destTitle: 'Red Beach',
        location: 'Greece',
        grade: 'CULTURAL RELAX',
        fees: '$300',
        description: 'The Red Beach is arguably one of the most famous and enchanting beaches of Santorini. It is located in the area of Akrotiri and lies only a few steps away from the ancient site of Akrotiri.'
    },
    {
        id: 5,
        imgSrc: sardiniaImg,
        img2xSrc: sardinia2xImg,
        destTitle: 'Sardinia',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Sardinia, an exquisite gem nestled within the Mediterranean’s azure expanse, is the perfect blend of culture, beauty and adventure. Sardinia, with its unspoiled coastline, delectable local cuisine, and dynamic markets, is the epitome of the Italian experience. Don’t forget to reserve space in your luggage for the island’s renowned pecorino cheese and cannonau wine — tangible reminders of your Sardinian adventure.'
    },
    {
        id: 6,
        imgSrc: orlandoImg,
        img2xSrc: orlando2xImg,
        destTitle: 'Orlando',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'Orlando is a diverse tapestry of excitement and tranquility, perfect for those looking for a dynamic mix of exploits. This city is home to world-famous water parks and theme parks such as Universal Studios, Disney World, and SeaWorld, making it a haven for thrill-seekers.'
    },
    {
        id: 7,
        imgSrc: zanzibarImg,
        img2xSrc: zanzibar2xImg,
        destTitle: 'Zanzibar',
        location: 'Tanzania',
        grade: 'CULTURAL RELAX',
        fees: '$850',
        description: 'Zanzibar, an archipelago adorning the Tanzanian coast, enchants travelers with its flavorful cuisine, rich historical sites and vibrant culture. Here, you can revel in the crystal-clear waters and lush forests that provide a backdrop for some of the world’s best snorkeling, diving and fishing.'
    },
    {
        id: 8,
        imgSrc: canaryIslandsImg,
        img2xSrc: canaryIslands2xImg,
        destTitle: 'Canary Islands',
        location: 'Spain',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: 'Venture into Lanzarote‘s volcanic landscape within Timanfaya National Park, or experience the verdant forests and dramatic coastal views in La Palma. Gran Canaria offers a splash of adventure with myriad water sports, while La Gomera’s rugged landscape and hiking trails beckon nature enthusiasts.'
    },
    {
        id: 9,
        imgSrc: boracayImg,
        img2xSrc: boracay2xImg,
        destTitle: 'Boracay',
        location: 'Philippines',
        grade: 'CULTURAL RELAX',
        fees: '$1200',
        description: 'In search of paradise? Look no further than Boracay. This tiny island boasts of white sand beaches, crystal-clear waters and tranquility. Whether you prefer basking under the tropical sun on White Beach or exploring the laid-back vibe of Puka Beach, Boracay has it all. Indulge in water sports, dine at beachfront restaurants and bars, or just relax and enjoy the breathtaking scenery. Make sure to savor local delicacies, including fresh seafood and traditional Filipino dishes.'
    },
    
]

const Main = () => {

     useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
        <section className="main container section">
            <div className="secTite">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, img2xSrc, destTitle, location, grade, fees, description}) => {
                         
                        return (
                            <div key={id} 
                            data-aos="fade-up"
                            className="singleDestination">
                                <div className="imageDiv">
                                    <picture>
                                        <source srcSet={` ${imgSrc} 1x, ${img2xSrc} 2x`} media="(max-width: 699px)" />
                                        <img src={img2xSrc ? imgSrc : img2xSrc} alt={destTitle} />
                                    </picture>

                                    
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Main