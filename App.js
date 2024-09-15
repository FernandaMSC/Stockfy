import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

//componentes
import Base from "./components/Base";

//styled components
import {Container} from "./styles/stockStyles";


 export default function App() {
  return (
    <NavigationContainer>        
      <Container>
      <Base />
      <StatusBar style="light" />
    </Container>
    </NavigationContainer>
  );
}

//const styles = StyleSheet.create({
  //container: {
   // flex: 1,
    //backgroundColor: 'pink',
   // alignItems: 'center',
   // justifyContent: 'center',
 // },
//});

