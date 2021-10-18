import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.section`
    width: 100%;
    background-color: #4b59f7;
    padding: 50px 100px;
`;

export const PricingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PricingHeader = styled.div`
    color: #fff;
    text-align: center;
    font-size: 48px;
    margin-bottom: 30px;
`;

export const PricingCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:960px) {
        flex-direction: column;
    }
`;

export const PricingCard = styled(Link)`
    width: 280px;
    height: 450px;
    color: #fff;
    background-color: #242424;
    box-shadow: 0 6px 20px rgba(56, 125, 255,0.2);
    text-decoration: none;
    padding: 10px 50px;
    transition: all 0.3s ease;

    &:nth-child(2) {
        margin: 24px;
    }

    &:hover{
        transform: scale(1.1);
    }

    @media screen and (max-width:960px) {
        width: 380px;
    }
`;

export const PricingCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PricingCardIcon = styled.div`
    margin: 24px;
`;

export const PricingPlan = styled.h2`
`;

export const Price = styled.h1`
    font-size: 48px;
`;

export const PricingPeriod = styled.h4`
`;

export const PricingFeatures = styled.ul`
    color: #a9b3c1;
    list-style: none;
    padding: 30px 0;
`;

export const PricingFeature = styled.li`
    font-size: 12px;
    margin-bottom: 10px;
    font-size: 14px;
`;
