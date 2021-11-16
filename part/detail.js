import React from 'react';
import {  Text, View, Alert, Button } from 'react-native';
import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'



const DetailsScreen=({ route, navigation })=> {
  
    /* 2. Get the param */
    const { itemId } = route.params;
    const { otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => imagepick()
  
          }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const imagepick = async () => {
    const { granted } = await permissions.askAsync(permissions.CAMERA_ROLL)
    if (granted) {
      let data = await imagepicker.launchImageLibraryAsync({
        mediaTypes: imagepicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5
  
      })
      console.log(data)
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test/${data.uri.split(".")[1]}`,
        }
        handleupload(newfile);
      }
    } else {
      Alert.alert("not able to open gallery")
  
    }
  }
  
  const image = async () => {
    const { granted } = await permissions.askAsync(permissions.CAMERA)
    if (granted) {
      let data = await imagepicker.launchCameraAsync({
        mediaTypes: imagepicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5
        
      })
    } else {
      Alert.alert("not able to open gallery")
  
    }
  }
  
  
  const handleupload = (image) => {
    const data = new FormData();
    data.append('file', image)
    data.append("upload_preset", "firecoder")
    data.append("cloud_name", "dqsfpok4o")
    
    fetch("https://api.cloudinary.com/v1_1/dqsfpok4o/image/upload ", {
      method: "POST",
      body: data,
    }).then(res => res.json()).then(data => { console.log(data) })
  }
  
  
  export default DetailsScreen