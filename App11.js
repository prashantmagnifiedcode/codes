import * as React from 'react';
import { StyleSheet,Text, View, Alert, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'
import Header from './home';
import Collection from './collection';
import Form from './form'
import HomeScreen from  './part/Home1'
//import Car from './part/design'
import store from "./reducer/store";
import { Provider } from 'react-redux'

<HomeScreen/>
const Stack = createStackNavigator();
function App() {
  return (
    <>



      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ 
          title: "prashant", headerTitleColors: 'white', headerStyle: { backgroundColor: "rgb(0,0,0.5)" }, headerTintColor: "rgb(115, 215, 255)",
          headerTitleStyle: { fontWeight: "bold" }
        }} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Collection" component={Collection} />
        
      </Stack.Navigator>


    </>


  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  )
}
