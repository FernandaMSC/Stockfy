import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

//componentes
import Base from "./components/Base";

//styled components
import {Container} from "./styles/stockStyles";


import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoanding from "expo-app-loading"; 


 export default function App() {
  
  const [ready, setReady] = useState(false);

  return (
    <NavigationContainer>        
      <Container>
      <Base />
      <StatusBar style="auto" />
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


