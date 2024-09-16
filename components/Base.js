import React, { useState } from "react";

//Componentes
import Header from "./Header.js";
import ListaStocks from "./listaStocks.js";
import InputModal from './inputModal.js';


const Base = () => {

    //Adicionar campo fixo e campo mutável. Ver como formatar elementos no stockStyles
    const primeirosStocks = [{
        title: "Nome: Primeiro Stock",
        quantidade: "Quantidade: 3",
        key: "1"
    }, {
        title: "Segundo Stock",
        key: "2"
    }, {
        title: "Terceiro Stock",
        key: "3"
    }, {
        title: "Quarto Stock",
        key: "4"
    }, {
        title: "Quinto Stock",
        key: "5"
    }, {
        title: "Sexto Stock",
        key: "6"
    }, {
        title: "Setimo Stock",
        key: "7"
    }, {
        title: "Oitavo Stock",
        key: "8"
    }, {
        title: "Nono Stock",
        key: "9"
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