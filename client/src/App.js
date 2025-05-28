import React from 'react'

import Welcome from './sections/Welcome'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import AskUs from './sections/AskUs'
import SectionFive from './sections/SectionFive'
import Prices from './sections/Prices'
import Footer from './sections/Footer'


function App() {
    return (
        <div className="App">
            <Welcome />
            <SectionTwo />
            <SectionThree />
            <AskUs bg="./images/form-bg.svg" bgImg="./images/form-img.svg" color="#91A0E2" />
            <SectionFive />
            <Prices />
            <AskUs bg="./images/form-bg2.svg" bgImg="./images/form-img2.svg" color="#D2F267" />
            <Footer /> 
        </div>
    )
}

export default App
