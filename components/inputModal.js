import React from "react";
import { Modal } from "react-native";

//Components
import { ModalButton, ModalContainer, ModalView, StyledInput, ModalAction, ModalActionGroup, ModalIcon, HeaderTitle, cores } from "../styles/stockStyles";

//ícones
import {AntDesign} from '@expo/vector-icons';


const InputModal = ({modalVisible, setModalVisible, stockInputNome, setStockInputNome, setStockInputUnid, stockInputUnid, handleAddStock, stocks}) => {

    const handleCloseModal = () => {
        setModalVisible(false);
        
    };

    const handleSubmit = () => {
        //alert("Submitted");
        handleAddStock({
            title: "Nome:",
            quantidade: "Quantidade",
            produto: stockInputNome,
            estoque: stockInputUnid,
            key: `${(stocks[stocks.length-1] && parseInt(stocks[stocks.length -1].key) + 1) || 1 }`
        });
        setStockInputNome("");
        setStockInputUnid("");
    };

    return (
        <>
            <ModalButton onPress={() => {setModalVisible(true)}}>
                <AntDesign name="plus" size={30} color={cores.secundaria}/>
            </ModalButton>

            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderTitle>Produto</HeaderTitle>
                            <AntDesign name="edit" size={30} color={cores.terciaria}/>
                        </ModalIcon>

                        <StyledInput
                            placeholder="Nome do produto"
                            placeholderTextColor={cores.alternativa}
                            selectionColor={cores.secundaria}
                            autoFocus={true}
                            onChangeText={(text) => setStockInputNome(text)}
                            value={stockInputNome}
                            onSubmitEditing={handleSubmit}
                            
                        />
                        <StyledInput
                            placeholder="Quantidade"
                            placeholderTextColor={cores.alternativa}
                            selectionColor={cores.secundaria}
                            autoFocus={true}
                            onChangeText={(text) => setStockInputUnid(text)}
                            value={stockInputUnid}
                            onSubmitEditing={handleSubmit}
                            
                        />

                        <ModalActionGroup>
                            <ModalAction color={cores.primaria} onPress={handleCloseModal} > 
                                <AntDesign name="close" size={28} color={cores.terciaria}/>

                            </ModalAction>
                            <ModalAction color={cores.terciaria} onPress={handleSubmit} >
                                <AntDesign name="check" size={28} color={cores.secundaria}/>

                            </ModalAction>
                        </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        
        </>
    )
};

export default InputModal; 