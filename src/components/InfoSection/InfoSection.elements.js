import styled from 'styled-components';

export const InfoSec = styled.div`
    padding: 80px 0;
    background-color: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
    color: #fff;
    /* border: 1px solid red; */
`;

export const InfoRow = styled.div`
    margin: 0 -15px -15px -15px;
    display: flex;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
    flex-wrap: wrap;
    align-items: center;
    /* border: 1px solid yellow; */
`;

export const InfoColumn = styled.div`
    max-width: 50%;
    flex-basis: 50%;
    flex: 1;
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    /* border: 1px solid green; */

    @media screen and (max-width:768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 60px;
    padding-top: 0;
    /* border: 1px solid pink; */

    @media screen and (max-width:768px) {
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 16px;
    letter-spacing: 1.4px;
`;

export const Heading = styled.div`
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
    line-height: 1.1;
    font-size: 48px;
    margin-bottom: 24px;
`;

export const SubTitle = styled.div`
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    font-size: 18px;
    line-height: 24px;
    max-width: 440px;
    margin-bottom: 35px;
`;

export const ImageWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    max-width: 100%;
    padding-right: 0;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;