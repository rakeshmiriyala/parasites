import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import NewsPage from './ImageSection'
import Footer from './Footer'
import OurExperts from './Experts'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <NewsPage/>
      <OurExperts/>
      <Footer/>
    </>
  )
}

export default Home
