import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
      
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.SECONDARY,
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 180,

       
        
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})