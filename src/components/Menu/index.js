import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import { LogoImage, MenuWrapper} from './style';

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage className="Logo" src={Logo} alt="HisaoFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
};

export default Menu;