import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

import Logo from '../assets/images/yeeef.png'
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

export default function LoginScreen() {
    const {height} = useWindowDimensions();
    const signInPress = () => {
        console.log('Signing In');
    }
    
  return (
    <View style={styles.root}>
    <View>
        <Image source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'/>
        <CustomButton text="Login" onPress={signInPress}/>
        <CustomText text="Create A New Account"/>

       
    </View>
    
     </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width: '100%',
        maxWidth: 300,
        maxHeight: 300,
    },
    root:{
        alignContent: 'center',
        padding: 20,
    },
    buttonContainer:{
        marginHorizontal: 20,
        
    }
})