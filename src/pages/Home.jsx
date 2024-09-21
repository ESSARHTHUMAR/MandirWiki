import React from 'react'
import FaqSlider from './Homepage/Faq/Faq'
import HeroSection from './Homepage/HeroSection/HeroSection'
import Information from './Homepage/Information/Information'
import OurServices from './Homepage/OurServices/OurServices'
import Solution from './Homepage/Solution/Solution'
import TempleSearch from './Homepage/TempleSearch/TempleSearch'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <TempleSearch />
        <OurServices />
        <Solution/>
        <Information />
        <FaqSlider/>
    </div>
  )
}

export default Home