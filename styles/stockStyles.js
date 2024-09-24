import styled from "styled-components/native";
import {Text, View, TouchableOpacity, TouchableHighlight, SafeAreaView, TextInput} from "react-native";
import Constants from "expo-constants";
import { setStatusBarBackgroundColor } from "expo-status-bar";

//Cores

export const cores= {
    primaria: "#D4B3A0",
    secundaria: "#B85C46",
    terciaria: "#591613",
    alternativa: "#CABCAB",
    perigo: "#B85C48", //cor do ícone da lixeira
};


//Container

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
    background-color: ${cores.primaria};
    padding: 20px;
    padding-bottom: 110px;
    flex: 1;
    padding-top: ${statusBarHeight}px;
    `;

//Header

export const HeaderView = styled.View`
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: ${cores.terciaria};
    letter-spacing: 2px;
    font-style: italic;
    padding-top: 20px;
`;


//Listas

//Ajeita o texto dentro da lista

export const ListView = styled.TouchableHighlight`
    background-color: ${cores.secundaria};
    min-height: 85px;
    width: 100%;
    padding: 5px;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
    border-radius: 10px;
`;

export const ListInputView = styled.View`
    min-height: 40px;
    width: 50%;
    padding: 10px;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 5px;
`;
    
export const ListConstView = styled.View`
    min-height: 40px;
    width: 40%;
    padding: 10px;
    justify-content: flex-start;
    align-items: start;
    margin-bottom: 5px;
    border-radius: 5px;
`;


export const ListViewHidden = styled.View`
    background-color: ${cores.terciaria};
    min-height: 85px;
    width: 100%;
    padding: 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 11px;
`;

//Textos
//Esse vai ser usado para o constante
export const StocksText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${cores.terciaria};
`;

//Texto do que é inputado
export const StocksInputText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${cores.primaria};
`;

export const SwipedStockText = styled(StocksText)`
    color: ${cores.alternativa};
    font-style: italic;
    text-decoration: line-through;
`;

//Botão de apagar
export const HiddenButtonTrash = styled.TouchableOpacity`
    width: 25px;
    align-items: start;
`;

//Botão para "ver detalhes/editar"
export const HiddenButtonEye = styled.TouchableOpacity`
    width: 30px;
    align-items: end;
`;


//Modal
export const ModalContainer = styled.View`
    padding: 20px;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${cores.primaria};
`;

export const ModalView = styled.View`
    background-color: ${cores.secundaria};
    border-radius: 20px;
    padding: 35px;
    gap: 15px;
`;

export const ModalButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${cores.terciaria};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    bottom: 40px;
`;

export const StyledInput = styled.TextInput`
    width: 300px;
    height: 50px;
    background-color: ${cores.terciaria};
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    color: ${cores.secundaria};
    letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${(props) => props.color};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    align-self: center;
`;

export const ModalActionGroup = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
`;

export const ModalIcon = styled.View`
    align-items: center;
    margin-bottom: 30px;
`;
