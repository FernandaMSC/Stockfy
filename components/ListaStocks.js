import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

//Ícones
import {Octicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";

//styled components
import {ListView, ListViewHidden, StocksText, SwipedStockText, HiddenButtonTrash, HiddenButtonEye, cores} from "../styles/stockStyles";




const ListaStocks = ({stocks, setStocks}) => {

    const handleDeleteStocks = (rowMap, rowKey) => {
        const newStocks = [...stocks];
        const stockIndex = stocks.findIndex((stock) => stock.key === rowKey);
        newStocks.splice(stockIndex, 1); 
        setStocks(newStocks);
    }

    return (
        <SwipeListView
            data={stocks}
            renderItem={(data) => {
                return (
                    <ListView>
                        <>
                            <StocksText>{data.item.title}</StocksText>
                            <StocksText>{data.item.quantidade}</StocksText>
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
                        <HiddenButtonEye> 
                            <MaterialCommunityIcons name="eye-outline" size={25} color={cores.secundaria}/>   
                        </HiddenButtonEye>
                    </ListViewHidden>
                )
            }}
            leftOpenValue={80}
            rightOpenValue={-80}
            previewRowKey='1'
            previewOpenValue={80}
            previewOpenDelay={3000}
           // disableLeftSwipe={true}
            showsVerticalScrollIndicator={false}
            style={(flex= 1, paddingBottom= 30, marginBottom= 40)}
        />
    );
}

export default ListaStocks;