import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

//componentes
import Base from "./components/Base";

//styled components
import {Container} from "./styles/stockStyles";

//Persistencia de dados
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from "expo-splash-screen";
//import AppLoading from "expo-splash-screen"; 

SplashScreen.preventAutoHideAsync();

 export default function App() {
  
  const [ready, setReady] = useState(false);

   //Adicionar campo fixo e campo mutável. Ver como formatar elementos no stockStyles
  const primeirosStocks = [];

  const [stocks, setStocks] = useState(primeirosStocks);


  const carregueStocks = async () => {
    try {
      const data = await AsyncStorage.getItem("storedStocks");
      if (data !== null) {
        setStocks(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const prepareApp = async () => {
      await carregueStocks();  // Carregar dados
      setReady(true);          // Define o estado como pronto
      await SplashScreen.hideAsync();  // Esconde a splash screen
    };

    prepareApp();
  }, []);
//  const carregueStocks = () => {
 //   AsyncStorage.getItem("storedStocks").then(data => {
 //     if (data !== null) {
 //       setStocks(JSON.parse(data))
 //     }
  //  }).catch((error) => console.log(error));
 // }

 // if (!ready) {
  //  return (
   //   <AppLoading
    //    startAsync={carregueStocks}
     //   onFinish={() => setReady(true)}
      //  onError={console.warn}
     // />
   // )
 // }

  return (
    <NavigationContainer>        
      <Container>
      <Base stocks={stocks} setStocks={setStocks}/>
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


