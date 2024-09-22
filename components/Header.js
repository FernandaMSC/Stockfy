import React from 'react';
import {FontAwesome} from "@expo/vector-icons";

//styled components
import { HeaderView, HeaderTitle, HeaderButton, cores } from '../styles/stockStyles';

const Header = () => {
    return (
        <HeaderView>
            <HeaderButton>
                <FontAwesome name="user-circle" size={25} color={cores.terciaria}/>
            </HeaderButton>
            <HeaderTitle>Meu Stock</HeaderTitle>
        </HeaderView>
    );
}

export default Header;