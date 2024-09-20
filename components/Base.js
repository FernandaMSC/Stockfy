import React, { useState } from "react";

//Componentes
import Header from "./Header.js";
import ListaStocks from "./listaStocks.js";
import InputModal from './inputModal.js';


const Base = () => {

    //Adicionar campo fixo e campo mutável. Ver como formatar elementos no stockStyles
    const primeirosStocks = [{
        title: "Nome:",
        quantidade: "Quantidade:",
        key: "1",
        produto: "Primeiro produto",
        estoque: 4
        
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "2",
        produto: "segundo Stock",
        estoque: 2
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "3",
        produto: "Terceiro Stock",
        estoque: 4
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "4",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "5",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "6",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "7",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "8",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "9",
        produto: "Primeiro Stock",
        estoque: 4
    }]

    const [stocks, setStocks] = useState(primeirosStocks);

    //Visibilidade do Modal e input value
    const [modalVisible, setModalVisible] = useState(false);
    const [stockInputNome, setStockInputNome] = useState();
    const [stockInputUnid, setStockInputUnid] = useState();

    //Função para adicionar um produto no estoque
    const handleAddStock = (stock) => {
        const novoStock = [...stocks, stock];
        setStocks(novoStock);
        setModalVisible(false);

    }

    return (
        <>
            <Header/>
            <ListaStocks
                stocks={stocks} 
                setStocks={setStocks}
            />
            <InputModal
                modalVisible = {modalVisible}
                setModalVisible = {setModalVisible}
                stockInputNome = {stockInputNome}
                stockInputUnid = {stockInputUnid}
                setStockInputNome = {setStockInputNome}
                setStockInputUnid = {setStockInputUnid}
                handleAddStock= {handleAddStock}
                stocks={stocks}
            />
        </>
    );
}

export default Base;