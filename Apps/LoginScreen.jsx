import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

import Logo from '../assets/images/yeeef.png'
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import {client} from '../Utils/KindConfig'

export default function LoginScreen() {
    const {height} = useWindowDimensions();
    const handleSignUp = async () => {
        const token = await client.register();
        if (token) {
          // User was authenticated
          console.log('Authenticated Success');

        } else {
            console.log('something went wrong');
        }
      };
      
      const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
            console.log('Authenticated Success');
          // User was authenticated
        }
      };
    
  return (
    <View style={styles.root}>
        
    <View>
        <Image source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'/>
        
        <CustomButton text="Login" onPress={handleSignIn}/>
        <CustomText text="Create A New Account" onPress={handleSignUp}/>

       
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