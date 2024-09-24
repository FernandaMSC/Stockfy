import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

//Ícones
import {Octicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";

//styled components
import {ListView, ListViewHidden, StocksText, HiddenButtonTrash, HiddenButtonEye, cores, StocksInputText, ListInputView, ListConstView} from "../styles/stockStyles";

//Persistencia de dados
import AsyncStorage from '@react-native-async-storage/async-storage';


const ListaStocks = ({stocks, setStocks, handleTriggerEdit}) => {

    const handleDeleteStocks = (rowMap, rowKey) => {
        const novoStock = [...stocks];
        const stockIndex = stocks.findIndex((stock) => stock.key === rowKey);
        novoStock.splice(stockIndex, 1); 

        AsyncStorage.setItem("storedStocks", JSON.stringify(novoStock)).then(() => {
            setStocks(novoStock);
        }).catch(error => console.log(error));
    };

    return (
        <>
        {stocks.length == 0 && <StocksText>Parece que não há nada nesse Stock ainda...</StocksText>}
        {stocks.length != 0 && <SwipeListView
        
            data={stocks}
            renderItem={(data) => {
                return (
                    <ListView>
                        <>
                            <ListConstView>
                                <StocksText>{data.item.title}</StocksText>
                                <StocksText>{data.item.quantidade}</StocksText>
                            </ListConstView>
                            <ListInputView>
                                <StocksInputText>{data.item.produto}</StocksInputText>
                                <StocksInputText>{data.item.estoque}</StocksInputText>
                            </ListInputView>

                        </>
                    </ListView>
                )
            }} 
            renderHiddenItem={(data, rowMap) =>{
                return ( 
                   <ListViewHidden>
                        <HiddenButtonTrash
                            onPress={() => handleDeleteStocks(rowMap, data.item.key)}
                        >
                            <Octicons name="trash" size={25} color={cores.perigo}/>   
                        </HiddenButtonTrash>
                        <HiddenButtonEye
                            onPress={() => handleTriggerEdit(data.item)}
                        > 
                            <MaterialCommunityIcons name="eye-outline" size={30} color={cores.secundaria}/>   
                        </HiddenButtonEye>
                    </ListViewHidden>
                )
            }}
            leftOpenValue={80}
            rightOpenValue={-80}
            previewRowKey='1'
            previewOpenValue={80}
            previewOpenDelay={3000}
            showsVerticalScrollIndicator={false}
            style={(flex= 1, paddingBottom= 30, marginBottom= 40)}
        />}
        </>
        
    );
}

export default ListaStocks;