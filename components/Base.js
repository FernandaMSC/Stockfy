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
        produto: "Primeiro Stock lalalalaalala",
        estoque: 4
        
    }, {
        title: "Nome",
        quantidade: "Quantidade:",
        key: "2",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Terceiro Stock",
        key: "3",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Quarto Stock",
        key: "4",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Quinto Stock",
        key: "5",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Sexto Stock",
        key: "6",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Setimo Stock",
        key: "7",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Oitavo Stock",
        key: "8",
        produto: "Primeiro Stock",
        estoque: 4
    }, {
        title: "Nono Stock",
        key: "9",
        produto: "Primeiro Stock",
        estoque: 4
    }]

    const [stocks, setStocks] = useState(primeirosStocks);

    //Visibilidade do Modal
    const [modalVisible, setModalVisible] = useState(false);



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
            />
        </>
    );
}

export default Base;