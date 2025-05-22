import React from 'react'

import Welcome from './sections/Welcome'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import AskUs from './sections/AskUs'
import SectionFive from './sections/SectionFive'
import Prices from './sections/Prices'
import AskUsSecond from './sections/AskUsSecond'
import Footer from './sections/Footer'
import TelegramButton from './sections/TelegramButton'
import MenuModal from './sections/MenuModal'

function App() {
    return (
        <>
            <MenuModal />
            <div id="pageContent" className="App">
                <>
                    <Welcome />
                </>
                <>
                    <SectionTwo />
                </>
                <>
                    <SectionThree />
                </>
                <AskUs />
                <>
                    <SectionFive />
                </>
                <>
                    <Prices />
                </>
                <AskUsSecond />
                <TelegramButton />
                <>
                    <Footer />
                </>
            </div>
        </>
    )
}

export default App
