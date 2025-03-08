import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import NewsPage from './ImageSection'
import SubscribeSection from './Updates'
import CardsSection from './Newrequirement'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <NewsPage/>
      <SubscribeSection/>
      <CardsSection/>
      <Footer/>
    </>
  )
}

export default Home
