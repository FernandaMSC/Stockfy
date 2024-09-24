import React, { useState } from "react";

//Componentes
import Header from "./Header.js";
import ListaStocks from "./listaStocks.js";
import InputModal from './inputModal.js';

//Persistencia de dados
import AsyncStorage from '@react-native-async-storage/async-storage';

const Base = ({stocks, setStocks}) => {

    //Visibilidade do Modal e input
    const [modalVisible, setModalVisible] = useState(false);
    const [stockInputNome, setStockInputNome] = useState();
    const [stockInputUnid, setStockInputUnid] = useState();

    //Função para adicionar um produto no estoque
    const handleAddStock = (stock) => {
        const novoStock = [...stocks, stock];
        
        AsyncStorage.setItem("storedStocks", JSON.stringify(novoStock)).then(() => {
            setStocks(novoStock);
            setModalVisible(false);
        }).catch(error => console.log(error));
    };

    //Edição
    const [stockASerEditado, setstockASerEditado] = useState(null);


    const handleTriggerEdit = (item) => {
        setstockASerEditado(item);
        setModalVisible(true);
        setStockInputNome(item.produto);
        setStockInputUnid(item.estoque);
        
    };

    const handleEditStock = (stockEditado) => {
        const novoStock = [...stocks];
        const stockIndex = stocks.findIndex((stock) => stock.key === stockEditado.key);
        novoStock.splice(stockIndex, 1, stockEditado);
       
        AsyncStorage.setItem("storedStocks", JSON.stringify(novoStock)).then(() => {
            setStocks(novoStock);
            setModalVisible(false);
            setstockASerEditado(null);
        }).catch(error => console.log(error));
    };

    return (
        <>
            <Header/>
            <ListaStocks
                stocks={stocks} 
                setStocks={setStocks}
                handleTriggerEdit={handleTriggerEdit}
            />
            <InputModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                stockInputNome={stockInputNome}
                stockInputUnid={stockInputUnid}
                setStockInputNome={setStockInputNome}
                setStockInputUnid={setStockInputUnid}
                handleAddStock={handleAddStock}
                stockASerEditado={stockASerEditado}
                setstockASerEditado={setstockASerEditado}
                handleEditStock={handleEditStock}
                stocks={stocks}
            />
        </>
    );
}

export default Base;