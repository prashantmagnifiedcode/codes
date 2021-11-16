import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, TextInput ,Button} from 'react-native-paper';
//import ImagesExample from './photo'
export default function New() {
  const themes={
    colors:{
      primary:'red'
    }
  }
  return (
    <View style={{
      flex: 1,
      height: 400,
      width: 400,
      borderColor: 'blue',
      borderRadius: 20,
      borderWidth: 2,


      //alignItems:'center',
      //flexDirection:'column',
      //flexDirection:'row',
      //justifyContent: 'center',
    }}>
      <Card style={{
        borderColor: 'blue',
        borderRadius: 20,
        height: 400,
        borderWidth: 2,
      }}>
        <ScrollView>
          <View style={{
            flexDirection: 'row', shadowColor: 'blue',
            shadowOffset: { width: 400, height: 400 },
            shadowOpacity: 1,
            shadowRadius: 5,
          }}>
            <Image style={{ height: 100, width: 100, borderRadius: 50 / 2 }} source={require('C:/Users/admin/Documents/hhh/AwesomeProject/photo.jpg')} />
            <Text>
              prashnant;dhweyjkwndmsiduew lwl9ui9wu
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ height: 100, width: 100, borderRadius: 50 / 2 }} source={{ uri: "https://images.unsplash.com/photo-1619701959178-8923198fa661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }} />

            <Text>
              prashnant;sjkdkeujwdkn,dnipweuirjemnk
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>

            <Image style={{ height: 100, width: 100, borderRadius: 50 / 2 }} source={require('C:/Users/admin/Documents/hhh/AwesomeProject/photo.jpg')} />
            <Text>
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>

            <Image style={{ height: 100, width: 100, borderRadius: 50 / 2 }} source={require('C:/Users/admin/Documents/hhh/AwesomeProject/photo.jpg')} />
            <Text>
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>

            <Image style={{ height: 100, width: 100, borderRadius: 50 / 2 }} source={require('C:/Users/admin/Documents/hhh/AwesomeProject/photo.jpg')} />
            <Text>
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>

            <Image style={{ height: 100, width: 100, borderRadius: 50 / 2 }} source={require('C:/Users/admin/Documents/hhh/AwesomeProject/photo.jpg')} />
            <Text>
              prashnant; dhkfadshjkfkdsjfkdsjfjkdsfjjks
            </Text>
          </View>

        </ScrollView>
      </Card>
        <TextInput
        style={{borderRadius:5}}
        label="name"
        mode="outlined"
        theme={themes}
        >
          
        </TextInput>
        <Button icon="camera" mode="contained">prss</Button>
    </View>



  );
  

        };