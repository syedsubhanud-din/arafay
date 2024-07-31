import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style = {styles.container}>
      <Text styles = {styles.textBlack}>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
    },
    textBlack: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#000',
    }
})