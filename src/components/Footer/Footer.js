import React from 'react';
import { Button } from '../../globalStyles';
import { footerLinks } from './Data';
import { FooterContainer, FooterForm, FooterFormInput, FooterLink, FooterLinks, FooterLinksContainer, FooterLinksItem, FooterLinksWrapper, FooterLinkTitle, FooterSubscription, FooterSubText, FooterSubTitle } from './Footer.elements';

const map2 = function(callback, thisref) {
  let obj = thisref;
  let len = obj.length;
  let index = 0;
  let result = new Array(len/2);
  while(index < len) {
    if(index in obj) {
      let val1 = obj[index];
      let val2;
      let mappedValue;
      index += 1;
      if(index in obj) {
        val2 = obj[index];
      }
      mappedValue = callback(val1, val2, index);
      result.push(mappedValue);
    }
    index += 1;
    console.log('index:',index);
  }
  return result;
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubTitle>Join our exclusive membership to receive the latest news and tresnd.</FooterSubTitle>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <FooterForm>
          <FooterFormInput type="email" name="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </FooterForm>
      </FooterSubscription>
      <FooterLinksContainer id="linksContainer">
                    
        {
          map2((prev, curr, index) => {
            return(
              <FooterLinksWrapper key={index} id="LinksWrapper">
                <FooterLinksItem id="item">
                  <FooterLinkTitle>{prev}</FooterLinkTitle>
                  <FooterLinks>
                    {
                      footerLinks[prev].map((link, ind) => {
                        return (
                          <FooterLink key={ind}>{link}</FooterLink>
                        );
                      })
                    }
                  </FooterLinks>
                </FooterLinksItem>
                <FooterLinksItem id="item">
                  <FooterLinkTitle>{curr}</FooterLinkTitle>
                  <FooterLinks>
                    {
                      footerLinks[curr].map((link, ind) => {
                        return (
                          <FooterLink key={ind}>{link}</FooterLink>
                        );
                      })
                    }
                  </FooterLinks>
                </FooterLinksItem>
              </FooterLinksWrapper>
            );
          }, footerLinks.titles)
        }
      </FooterLinksContainer>
    </FooterContainer>
  );
};
export default Footer;