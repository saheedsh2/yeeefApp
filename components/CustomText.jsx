import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

const CustomText = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textColor}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomText

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
        padding: 20
    },
    textColor:{
        color: Colors.SECONDARY,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.7
    }
})