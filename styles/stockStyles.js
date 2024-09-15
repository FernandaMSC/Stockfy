import styled from "styled-components/native";
import {Text, View, TouchableOpacity, TouchableHighlight, SafeAreaView, TextInput} from "react-native";
import Constants from "expo-constants";
import { setStatusBarBackgroundColor } from "expo-status-bar";

//Cores de teste

export const cores= {
    primaria: "#190019",
    secundaria: "#2B124C",
    terciaria: "#FBE4D8",
    alternativa: "DFB6B2",
};
//Container

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
    background-color: ${cores.primaria};
    padding: 20px;
    padding-bottom: 0px;
    flex: 1;
    padding-top: ${statusBarHeight}px;
    `;

//Header

export const HeaderView = styled.View`
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const HeaderTitle = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: ${cores.terciaria};
    letter-spacing: 2px;
    font-style: italic;
    padding-top: 20px;
`;

export const HeaderButton = styled.TouchableOpacity`
    font-weight: bold;
    color: ${cores.terciaria};
`;

//Listas
export const ListView = styled.TouchableHighlight`
    background-color: ${cores.secundaria};
    min-height: 85px;
    width: 100%;
    padding: 15px;
    justify-content: space-around;
    margin-bottom: 15px;
    border-radius: 10px;
`;
//Textos
export const StocksText = styled.Text`
    font-size: 16px;
    letter-spacing: 1px;
    color: ${cores.terciaria};
`;



