import React, { useState } from "react";

//Componentes
import Header from "./Header.js";
import ListaStocks from "./listaStocks.js";


const Base = () => {

    const primeirosStocks = [{
        title: "Primeiro Stock",
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


    return (
        <>
            <Header/>
            <ListaStocks
                stocks={stocks} 
                setStocks={setStocks}
            />
        </>
    );
}

export default Base;