"use client";
import image from 'next/image';
import  CustomButton from './CustomButton';
const Hero = () => {
  const handeleScroll = () => {

  }
  return (
    <div className='hero'>
    <div className='flex-1 pt-36 padding-x'> 
    <h1 className='hero_title'>
    Find, book, rent a car—quick and super easy!
    </h1>
    <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
        title="Explore Cars"
        containerStyles='bg-primary-blue
        text-white rounded-full mt-10
        handeleClick={handleScroll}'
        />
        </div>
        <div className="hero__image-container">
        <div className="hero__image">
          <img src="/hero.png" alt="hero" className='object-contain'/>
        </div>
        <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero
