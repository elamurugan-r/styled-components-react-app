import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    /* padding: 16px 24px; */
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #101522;
    color: #fff;
`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    padding: 24px;
`;

export const FooterSubTitle = styled.p`
    font-size: 24px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
`;

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 18px;
    color: #b9b9b9;
`;

export const FooterForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FooterFormInput = styled.input`
    padding: 10px 20px;
    border: 1px solid #fff;
    outline: none;
    border-radius: 2px;
    margin-right: 10px;
    font-size: 16px;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width:768px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width:768px) {
        flex-direction: column;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    justify-content: center;
    align-items: flex-start;
`;

export const FooterLinksItem = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-right: 48px; */
    margin: 0 48px 48px 0;
`;

export const FooterLinkTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 18px;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 10px;
    color: #b9b9b9;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
        color: #4b59f7;
    }
`;