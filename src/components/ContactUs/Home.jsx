import React from 'react'
import Navbar from '../Navbar'
import ContactHero from './Hero'
import Footer from '../Footer'
import ContactInfo from '../ContactInfo'

const ContactHome = () => {
  return (
    <>
    <ContactInfo/>
      <Navbar/>
      <ContactHero/>
      <Footer/>
    </>
  )
}

export default ContactHome
