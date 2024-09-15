import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

//styled components
import {ListView, StocksText, cores} from "../styles/stockStyles";





const ListaStocks = ({stocks, setStocks}) => {
    return (
        <SwipeListView
            data={stocks}
            renderItem={(data) => {
                return (
                    <ListView>
                        <>
                            <StocksText>{data.item.title}</StocksText>
                        </>
                    </ListView>
                )
            }} 
        />
    );
}

export default ListaStocks;