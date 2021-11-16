
import React from 'react';
import { View, Text, Image,Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { keys } from '@material-ui/core/styles/createBreakpoints';



export default function Header({route,navigation}) {
  const {id,names,email,phones,imgs}=route.params.key
 
  const themes = {
    colors: {
      primary: "#17529b"
    }
  }
  const opendial =(e)=>{
    if(Platform.OS==="android"){
      console.log(e);
      Linking.openURL("tel:455255")
    }else{
      
    }
  }
  const login=()=>{
    console.log("donew")
  }
  return (
    <View
      style={{
        flex: 1,
        borderColor: 'blue',
        borderRadius: 20,
        borderWidth: 2,
      }}
    >
      <LinearGradient
        colors={["#19547b", "#ffd89b"]}
        style={{ height: 150 }}
      />
      <View style={{ alignItems: 'center' }}>
      
      <Image style={{ height: 100, width: 100, borderRadius: 50 / 2 ,marginTop:-50}} 
      source={{uri:`${imgs}`}} />
        <Text>{names}</Text>
        <Text>{id}</Text>

      </View>
      <View style={{ marginTop: 140, height: 50 }}>


        <Card style={{ marginBottom: 5 }} onPress={()=>{Linking.openURL("mailto:prashantsrivastava5116@gmail.com")}}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <MaterialCommunityIcons name="email" size={22} color="blue" style={{ marginRight: 5 }} />
            <Text>{email}</Text>
          </View>

        </Card>
      <Card style={{ marginBottom: 5 }} onPress={()=>opendial()}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <MaterialCommunityIcons name="phone" size={22} color="blue" style={{ marginRight: 5 }} />
            <Text >{phones}</Text>
          </View>

        </Card>
       
        <Card style={{ marginBottom: 5 }} onPress={()=>login()}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <MaterialCommunityIcons name="github" size={22} color="blue" style={{ marginRight: 5 }} />
            <Text>prashantsrivastava5116</Text>
          </View>

        </Card>
        <Card style={{ marginBottom: 5 }}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <MaterialCommunityIcons name="facebook" size={22} color="blue" style={{ marginRight: 5 }} />
            <Text>prashantsrivastava5116</Text>
          </View>

        </Card>
        <Card style={{ marginBottom: 5 }}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <MaterialCommunityIcons name="facebook" size={22} color="blue" style={{ marginRight: 5 }} />
            <Text>prashantsrivastava5116</Text>
          </View>

        </Card>
       
      

     
      

        <View style={{justifyContent: 'space-between'}}>

          <Button style={{marginBottom:5}}
            icon="account-edit"
            mode="contained"
            theme={themes}
            onPress={()=>opendial()}
          >press

          </Button>
          <Button
            icon="email"
            mode="contained"
            theme={themes}
          >press

          </Button>
        </View>




      </View>

    </View>












  );
}