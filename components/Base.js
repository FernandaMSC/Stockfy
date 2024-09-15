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