import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {GlobalStyles} from '../styles/GlobalStyles'

function Home() {
  return (
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>Home Screen</Text>
    </View>
  )
}

export default Home