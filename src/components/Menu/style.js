import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 168px;
    
    @media(max-width: 800px){
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom: 2px solid var(--primary);
    background-color: var(--black);

    @media(max-width: 800px){
        height: 40px;
        justify-content: center;
    }
`;