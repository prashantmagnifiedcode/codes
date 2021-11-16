
import React from 'react';
import { Text, View, Button} from 'react-native';
//import { Card, CardSection, FAB } from 'react-native-paper';
//import Contentlik from './buggatilink';
//import { useSelector, useDispatch } from 'react-redux';
//import { increment } from '../reducer/action';
//import buggatilink from './buggatilink'
import Car from './design'
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>



      <View style={{ flex: 1/18, flexDirection: "row" ,backgroundColor: "red"}} >
      
        <View style={{ borderRadius: 4, width: "25%", marginLeft: 1  }}>

          <Button
            title="Header"
            onPress={() => {
              navigation.navigate('Header', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />

        </View>
        <View style={{ borderRadius: 4, width: "25%", marginLeft: 1 }}>

          <Button

            title="imgspick"
            onPress={() => imagepick()

            } />
        </View>
        <View style={{ borderRadius: 4, width: "28%", marginLeft: 1 }}>

          <Button

            title="collection"
            onPress={
              () => {
                navigation.navigate('Collection')
              }
            }
          />
        </View>

        <View style={{ borderRadius: 4, width: "25%", marginLeft: 1 }}>

          <Button

            title="form"
            onPress={
              () => {
                navigation.navigate('Form')
              }
            }

          />
        </View>

      </View>
      <View style={{flex: 1}}>

      <Text style={{color: "red",backgroundColor:"rgba(0,0,0,0.2)" }}>Bugatti</Text>
      <Car/>
      </View>



    </View>
  )

}

export default HomeScreen;