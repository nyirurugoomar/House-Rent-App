import React from 'react'
import About from './About'
import Apartment from './Apartment'
import Details from './Details'
import Features from './Features'
import Hero from './Hero'
import Navbar from './Navbar'


function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Features/>
     <About/>
     <Details/>
     <Apartment/>
    </>
  )
}

export default Home