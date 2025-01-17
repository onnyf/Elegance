import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <footer>
            <div className='top'>
                <div className="footer-box">
                    <div className='footer-box-child'>
                        <h4>Elegance</h4>
                        <p>Opening Hours:</p>
                        <p>Mon - Sat 10Am - 6PM</p>
                        <p>info@elegance.com</p>
                    </div>
                    <div className='footer-box-child1'>
                        <h4>Contact</h4>
                        <p>11 Broadway Lobby 4</p>
                        <p>New York, NY 10004</p>
                        <p>(234) 08 98 243</p>
                    </div>
                </div>
                <div className="footer-box"></div>
                <div className="footer-box">
                    <div className='footer-box-child'>
                        <h4>Menu</h4>
                        <p><a href="/">Home</a></p>
                        <p><a href="/">Shop</a></p>
                        <p><a href="/">About Us</a></p>
                        <p><a href="/">Contact Us</a></p>
                    </div>
                    <div className='footer-box-child4'>
                        <h4>Fast Links</h4>
                        <p><a href="#cart">Cart</a></p>
                        <p><a href="#account">My Account</a></p>
                        <p><a href="#contact">Contact Us</a></p>
                        <p><a href="#review">Reviews</a></p>
                    </div>
                </div>
                <div className="footer-box"></div>
            </div>


            <div className='bottom'>
                <div className='left'>
                    <p>Copyright@CITYDENTAL.All Rights Reserved.</p>
                </div>
                <div className='right'>
                    <div className="icons-container">
                        <div>
                            <a href=""><img src="./image/face 4.png" alt="" /></a>
                            <a href=""><img src="./image/insta 5.png" alt="" /></a>
                            <a href=""><img src="./image/lind 7.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer