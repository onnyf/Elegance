import React from 'react'
import '../Styles/Body.css'
const Body = () => {
  return (
    <main className='main2'>
      <div>
        <p>Elegance</p>
         <h2>Discover the Art of Timeless Jewelry</h2>
         <p>Our jewelry is crafted with precision and passion, ensuring <br /> 
          each piece tells a unique story. Experience the perfect blend <br />
         of quality materials and exquisite designs.</p>
         
         <div className='exp'>
         <div>
         <h4>Exceptional Craftsmanship</h4>
         <p>Every piece is meticulously <br />
         crafted to enhance your style <br />
         and celebrate your <br />
          individuality.</p>
         </div>
         
         <div>
         <h4>Quality Materials</h4>
         <p>We source only the finest <br />
          materials to ensure lasting <br />
           beauty and durability.</p>
         
         </div>
         </div>
         
         <div className='body-btn'>
          <button className='body-btn1'>Shop</button>
          <a href="##" className='body-btn2'>Learn More <img src="./Image/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" className='icon'/></a>
         </div>
         
         <div className='body-img'>
          <img src="./image/bg5.jpg" alt="" />
         </div>

         <div>
               <div className='jewelry'>
                   <h2 className='text-center'>Discover Our Unique Custom Jewelry Designs <br /> Tailored Just for You</h2>
               </div>

               <div className='the-jewelry'>

               <div>
                <img src="./image/bg6.jpg" alt="" />
                <h4>Enjoy Free Shipping on All Orders, No <br /> Minimum Required</h4>
                <p>Experience peace of mind with our lifetime <br /> warranty on every piece.</p>

                <a href="##">Shop now <img src="./Image/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" className='arrow-mi' /></a>
               </div>

               <div>
                <img src="./image/bg7.jpg" alt="" />
                <h4>Elevate Your Style with Our Exquisite Jewelry <br /> Collections</h4>
                <p>Crafted with precision, our jewelry is <br /> designed to make a statement.</p>

                <a href="##">Shop now <img src="./Image/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" className='arrow-mi' /></a>
               </div>

               <div>
                <img src="./image/bg8.jpg" alt="" />
                <h4>Personalized Service to Help You Find <br /> the Perfect Piece</h4>
                <p>Our experts are here to guide you in <br /> selecting your ideal jewelry.</p>

                <a href="##">Shop now <img src="./Image/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" className='arrow-mi' /></a>
               </div>

               

               

               </div>
             </div>
          
      </div>
    </main>
  )
}

export default Body