import React from 'react'
import { StyleSheet, View } from 'react-native'
import WelcomeScreen from './src/screen/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screen/HomeScreen'
import { RootStackParamList } from './src/screen/types'



function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
 
    return (
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
      
    )
  
}

const styles = StyleSheet.create({})
export default App;