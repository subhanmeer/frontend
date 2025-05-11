import React from 'react';

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection"
import Universe from './Universe';




function PricingPage({
  products =  [
    {
      type: 'left',
      imageURL: "media/images/kite.png",
      productName: "BazaarX Pro",
      productDescription: "Pakistan's fastest trading platform with real-time PSX data, advanced Islamic finance tools, and Urdu language support. Available on Android and iOS.",
      tryDemo: "/try-bazaarx",
      learnMore: "/features",
      googlePlay: "https://play.google.com/store/bazaarx",
      appStore: "https://apps.apple.com/pk/app/bazaarx"
    },
    {
      type: 'right',
      imageURL: "media/images/console.png",
      productName: "Investor Dashboard",
      productDescription: "Your central hub for portfolio tracking with Shariah-compliance reports and tax calculations tailored for Pakistani investors.",
      learnMore: "/dashboard-features"
    },
    {
      type: 'left',
      imageURL: "media/images/coin.png",
      productName: "Al-Meezan Funds",
      productDescription: "Invest in SECP-approved Islamic mutual funds commission-free, directly to your CDS account. Available on mobile and web.",
      tryDemo: "/try-funds",
      learnMore: "/islamic-funds",
      googlePlay: "https://play.google.com/store/bazaarx-funds",
      appStore: "https://apps.apple.com/pk/app/bazaarx-funds"
    },
    {
      type: 'right',
      imageURL: "media/images/kiteconnect.png",
      productName: "BazaarX API",
      productDescription: "Build Pakistan's next fintech solution with our REST APIs. Startups can showcase their apps to our user base.",
      learnMore: "/api-docs"
    },
    {
      type: 'left',
      imageURL: "media/images/varsity.png",
      productName: "BazaarX Academy",
      productDescription: "Learn stock market fundamentals with Urdu/English lessons tailored for Pakistani investors, available in bite-sized mobile lessons.",
      tryDemo: "/try-academy",
      learnMore: "/education",
      googlePlay: "https://play.google.com/store/bazaarx-academy",
      appStore: "https://apps.apple.com/pk/app/bazaarx-academy"
    }
  ]
}) {
    return (
        <main>
        <Hero/>
        {products.map((product, index) => (
          product.type === 'left' ? (
            <LeftSection
            key={index}
            imageURL={product.imageURL}
            productName={product.productName}
            productDescription={product.productDescription}
            tryDemo={product.tryDemo}
            learnMore={product.learnMore}
            googlePlay={product.googlePlay}
            appStore={product.appStore}
          />
          ) : (
            <RightSection
            key={index}
            imageURL={product.imageURL}
            productName={product.productName}
            productDescription={product.productDescription}
            learnMore={product.learnMore}
          />
          )
        ))}

        <p className="text-center my-5 text-muted">
        Interested in our technology? Visit our <a href="/tech-blog" className="text-primary">engineering blog</a>.
      </p>

      <Universe />


        </main>
    )
}


export default PricingPage;