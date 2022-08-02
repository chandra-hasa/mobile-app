import React from 'react'
import { Text, View } from 'react-native'
import {GlobalStyles} from '../styles/GlobalStyles'


function About() {
  return (
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>
            About
        </Text>
    </View>
  )
}

export default About