import React, { useState } from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';  
import { ActivityIndicator, View } from 'react-native-web';

const getFonts=()=> Font.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':regular('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false);
  if(fontsLoaded){
    return(
      <Home/>
    )
  }
  else{
    return(
      <View>
        <AppLoading
          startAsync={getFonts}
          onFinish={()=>setFontsLoaded(true)}
        />
        <ActivityIndicator/>
      </View>   
    )
  }
}
