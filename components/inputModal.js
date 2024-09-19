import React from "react";
import { Modal } from "react-native";

//Components
import { ModalButton, ModalContainer, ModalView, StyledInput, ModalAction, ModalActionGroup, ModalIcon, HeaderTitle, cores } from "../styles/stockStyles";

//ícones
import {AntDesign} from '@expo/vector-icons';


const InputModal = (modalVisible, setModalVisible, stockInputValue, setStockInputValue) => {

    const handleCloseModal = () =>{
        setModalVisible(false);
        
    }

    return (
        <>
            <ModalButton onPress={() => {}}>
                <AntDesign name="plus" size={30} color={cores.secundaria}/>
            </ModalButton>

            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalIcon>
                    <AntDesign name="edit" size={30} color={cores.terciaria}/>
                    </ModalIcon>

                    <StyledInput
                        placeholder="Add a stock"
                        placeholderTextColor={cores.alternativa}
                        selectionColor={cores.secundaria}
                        autoFocus={true}
                        onChangeText={(text) => setStockInputValue(text)}
                    />
                </ModalContainer>
            </Modal>
        
        </>
    )
}

export default InputModal; 