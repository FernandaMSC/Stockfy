import React from 'react';
import {FontAwesome} from "@expo/vector-icons";

//styled components
import { HeaderView, HeaderTitle } from '../styles/stockStyles';

const Header = () => {
    return (
        <HeaderView>
            <HeaderTitle>Meu Stock</HeaderTitle>
        </HeaderView>
    );
}

export default Header;