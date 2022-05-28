import React from 'react';
import Logo from '../../assets/img/logo.png'
import Button from '../Button';
import ButtonLink from './components/ButtonLink';
import './Menu.css'
import { LogoImage, MenuWrapper } from './style';

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage className="Logo" src={Logo} alt="HisaoFlix logo"/>
            </a>

            <ButtonLink as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    );
};

export default Menu;