import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro' sans-serif;
}
`;

export const Container = styled.div`
    padding: 0px 50px;
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
    z-index: 1;

    @media screen and (max-width:991px) {
        padding: 0px 30px ;
    }
`;


export const Button = styled.button`
    color: #fff;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    background-color: ${({primary}) => (primary ? '#4B59f7' : '#0467fB')};
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    font-family: 'Source Sans Pro' sans-serif;
    cursor: pointer;

    &:hover{
        background-color: ${({primary}) => (primary ? '#0467fB' : '#4B59f7')};
        transition: all 0.3s ease;
    }

    @media screen and (max-width:991px) {
        width: 100%;
        padding: 10px 20px;
    }
`;