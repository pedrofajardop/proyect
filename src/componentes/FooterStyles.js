import styled from "styled-components";
 
export const Box = styled.div`
    padding: 1% 1%;
    background: #9393e0;
    // position: absolute;
    bottom: 0;
    height: auto;
    width: auto;
    @media (max-width: 1000px, max-height: 2000px) {
        // padding: 60px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 0;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 30px;
 
    @media (max-width: 1000px, max-height: 1000px ) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 4px;
    margin-top:5px;
    font-size: 16px;
    text-decoration: none;
    text-align: center;

    &:hover {
        color: pink;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
`;