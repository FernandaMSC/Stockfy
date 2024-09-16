import React from "react";
import { Modal } from "react-native";

//Components
import { ModalButton, ModalContainer, ModalView, StyledInput, ModalAction, ModalActionGroup, ModalIcon, HeaderTitle, cores } from "../styles/stockStyles";

//ícones
import {AntDesign} from '@expo/vector-icons';


const InputModal = (modalVisible, setModalVisible) => {

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
                
            </Modal>
        
        </>
    )
}

export default InputModal; 