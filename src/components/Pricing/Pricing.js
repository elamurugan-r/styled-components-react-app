import React from 'react';
import { GiRock, GiCrystalBars, GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { PricingData } from './Data';
import { Price, PricingCard, PricingCardIcon, PricingCardsContainer, PricingCardWrapper, PricingFeature, PricingFeatures, PricingHeader, PricingPeriod, PricingPlan, PricingSection, PricingWrapper } from './Pricing.elements';


const Icons = {
  GiRock : GiRock,
  GiCrystalBars: GiCrystalBars,
  GiCutDiamond: GiCutDiamond,
};

const Pricing = () => {

  return (
    <IconContext.Provider value={{color:'#a9b3c4', size:64}}>
      <PricingSection id="pricing-section">
        <PricingWrapper id="pricing-wrapper">
          <PricingHeader id="pricing-header">Our Services</PricingHeader>
          <PricingCardsContainer id="pricing-cards-container">
            {
              PricingData.map(data => {
                const Icn = Icons[data.icon];
                return(
                  <PricingCard id="pricing-card" key={data.id}>
                    <PricingCardWrapper id="pricing-card-wrapper">
                      <PricingCardIcon id="pricing-card-icon">
                        <Icn></Icn>
                      </PricingCardIcon>
                      <PricingPlan id="pricing-plan">{data.plan}</PricingPlan>
                      <Price id="price">{data.price}</Price>
                      <PricingPeriod id="pricing-period">{data.period}</PricingPeriod>
                      <PricingFeatures id="pricing-features">
                        {
                          data.features.map((feature, index) => {
                            return(
                              <PricingFeature key={index} id="pricing-feature">{feature}</PricingFeature>
                            );
                          })
                        }
                      </PricingFeatures>
                      <Button primary>Choose Plan</Button>
                    </PricingCardWrapper>
                  </PricingCard>
                );
              })
            }
                    
          </PricingCardsContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;