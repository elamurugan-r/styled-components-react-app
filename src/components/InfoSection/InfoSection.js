import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { Heading, ImageWrapper, Img, InfoColumn, InfoRow, InfoSec, SubTitle, TextWrapper, TopLine } from './InfoSection.elements';

const InfoSection = (
  {
    lightBg, 
    imgStart,
    primary,
    lightTopLine,
    lightText,
    lightTextDesc,
    topLine,
    text,
    textDescription,
    buttonLabel,
    img,
    alt,
    start,
  }
) => {
  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{text}</Heading>
              <SubTitle lightTextDesc={lightTextDesc}>{textDescription}</SubTitle>
              <Link to={`/${buttonLabel}`}>
                <Button primary={primary}>{buttonLabel}</Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImageWrapper start={start}>
              {console.log('Image:',img)}
              <Img src={img} alt={alt}></Img>
            </ImageWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

InfoSection.propTypes = {
  lightBg: PropTypes.bool, 
  imgStart: PropTypes.bool, 
  primary: PropTypes.bool, 
  lightTopLine: PropTypes.bool, 
  lightText: PropTypes.bool, 
  lightTextDesc: PropTypes.bool, 
  topLine: PropTypes.string,
  text: PropTypes.string,
  textDescription: PropTypes.string,
  buttonLabel: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  start: PropTypes.bool,
};

export default InfoSection;