import React from 'react'
import '../Styles/Hero.css'

const Hero = () => {
  return (
    <main>
        <div className='hero-section'>
            <img src="./image/bg.jpg" alt="Background" className='hero-image' />

          <div className='discover'>
            <h1>Discover Timeless <br /> Elegance in Every Piece</h1>
            <p>Explore our exquisite collection of handcrafted jewelry designed to <br /> elevate your style. 
                Each piece tells a unique story, perfect for any <br /> occasion.</p>

              <div className='hero-btn'>
                  <button className='hero-btn1'>Shop</button>
                  <button className='hero-btn2'>Learn more</button>
            </div>

            <div className='hero-img'>
              <img src="./image/bg1.jpg" alt="" />
              <img src="./image/bg2.jpg" alt="" />
              <img src="./image/bg3.jpg" alt=""  className='image-up'/>
              <img src="./image/bg4.jpg" alt="" />
            </div>

          </div>

            
        </div>

    </main>
  )
}

export default Hero