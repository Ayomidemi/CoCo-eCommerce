import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import '../styles/sass/Footer.scss'


const footerAboutLinks = [
  {
      display: "Clothing",
      path: "/about"
  },
  {
      display: "Assesories",
      path: "/about"
  },
  {
      display: "Lingerie",
      path: "/about"
  },
  {
      display: "Jwellery",
      path: "/about"
  }
]

const footerCustomerLinks = [
  {
      display: "About Us",
      path: "/about"
  },
  {
      display: "Contact Us",
      path: "/about"
  },
  {
    display: "Privacy Policy",
    path: "/about"
},
  {
      display: "Shipping & Delivery",
      path: "/about"
  }
]
const Footer = () => {
  return (
      <footer className="footer">
          <div className="container">
              <Grid
                 col={4}
                  mdCol={2}
                  smCol={1}
                  gap={10}
              >
                  <div> 
                      <div className="footer__title">
                          CONTACT
                      </div>
                      <div className="footer__content">
                          <p>
                              Phone: <strong>+234 81456789</strong>
                          </p>
                          <p>
                              Email: <strong>ade@gmail.com</strong>
                          </p>
                          <p>
                              Address: <strong>Lagos, Nigeria</strong>
                          </p>
                      </div>
                  </div>
                  <div>
                      <div className="footer__title">
                          CATEGORIES
                      </div>
                      <div className="footer__content">
                          {
                              footerAboutLinks.map((item, index) => (
                                  <p key={index}>
                                      <Link to={item.path}>
                                          {item.display}
                                      </Link>
                                  </p>
                              ))
                          }
                      </div>
                  </div>
                  <div>
                      <div className="footer__title">
                          Information
                      </div>
                      <div className="footer__content">
                          {
                              footerCustomerLinks.map((item, index) => (
                                  <p key={index}>
                                      <Link to={item.path}>
                                          {item.display}
                                      </Link>
                                  </p>
                              ))
                          }
                      </div>
                  </div>
                  <div className="footer__about">
                      <p>
                          <Link to="/">
                             <div className='foot'> CoCo </div>
                          </Link>
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiatalias sunt, distinctio illum.
                      </p>
                  </div>
              </Grid>
          </div>

          <div className="footer__flex"
      style={{ padding: "2rem", zIndex: "100", textAlign: "center", background: "#ffb399"}}>
      <span
        className="copyright"
        style={{ color: "#000", fontSize: "14px", opacity: "0.75", alignContent: 'center'}}>
     Copyright © 2022  | Created by <b>Peace Adeniji</b>
      </span>
    </div>
      </footer>
  )
}

export default Footer