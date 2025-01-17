import React from 'react'
import '../Styles/Testimonial.css'
const Testimonial = () => {
  return (
    <main className='main-t'>
      <div className='test'>
        <h3>Customer Testimonials</h3>
        <p>Our customers love our unique jewelry designs!</p>
      </div>

      <div className='testimonials-container1'>
        <div className='testimonial1'>
          <div className='Test-img'>
            <img src="./image/Group 2.png" alt="Customer testimonial" />
            <h4>"The quality of the jewelry is outstanding! I <br /> wear it every day."</h4>
            <img src="./image/Text1.png" alt="" />
            <p className='Test-p1'>Emily Eliza <br /> Designer, Fashion Co. |</p>
            <img src="./Image/dot).png" alt="" />
          </div>
        
        </div>
        
        <div className='testimonial2'>
          <div className='Test-img'>
            <img src="./image/Group 2.png" alt="Customer testimonial" />
            <h4>"I received so many compliments on my <br /> necklace!"</h4>
            <img src="./image/Test2.png" alt="" />
            <p className='Test-p2'>Michael Smith <br /> Manager, Retail Inc. |</p>
            
          </div>
          
          <div className='img-dot2'>
          <img src="./image/dot2.png" alt="" />
          </div>

        
          
     
    
        </div>
      </div>
    </main>
  )
}

export default Testimonial