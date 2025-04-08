import React from 'react'
import CustomSynthesis from './Hero'
import CustomSynthesisProcess from './EandE'
import Capabilities from './CandS'
import Points from './Points'
import Paragraphs from './3Paragraphs'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <CustomSynthesis/>
      <br/>
      <br/>
      <CustomSynthesisProcess/>
      <br/>
      <br/>
      <Capabilities/>
      <br/>
      <br/>
      <Points/>
      <br/>
      <Paragraphs/>
      <Footer/>
    </>
  )
}

export default Home
