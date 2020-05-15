import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RNBootSplash from "react-native-bootsplash";

const App = () => {
 
  useEffect(() => {
      RNBootSplash.hide({ duration: 250 });
  }, []);
   

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
