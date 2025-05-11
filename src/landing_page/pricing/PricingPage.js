import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from "../OpenAccount";


function PricingPage({ showOpenAccount = true }) {
    return ( 
        <main>
        <Hero/>
        {showOpenAccount && <OpenAccount/>}
        <Brokerage/>
        </main>
     );
}

export default PricingPage;