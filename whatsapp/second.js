import React, { useEffect, useState ,  useCallback,} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Animated,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wd,
  } from "react-native-responsive-screen";
  import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch} from 'react-redux';
import { Chatdata } from './reducer.js/action';
import { Logindetail } from './reducer.js/action';
import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'
import { auth, db } from "../firebase";

const Second = () => {
    const dispatch=useDispatch()
    const finalcredential = useSelector(state => state.Home.chatlogin)
    const [messages, setMessages] = useState([]);
    const [done,setdone]=useState("black")
    const position = new Animated.ValueXY({ x: 0, y: 0 });
    const defaultimage= "https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange.png"
    const navigation = useNavigation()
  const [scanstart, setscanstart] = useState(false);
  const [logindata,setlogindata]=useState({number:"",image:""})
  console.log("jjjjjj")
console.log(finalcredential)

const handleUpload = (image)=>{
  const data = new FormData()
      data.append('file', image)
      data.append("upload_preset", "firecoder")
      data.append("cloud_name", "dqsfpok4o")
      fetch("https://api.cloudinary.com/v1_1/dqsfpok4o/image/upload", {
          method: "POST",
          body: data,
      }).then(res => res.json()). then(data => {
        
           setdone("green")
           setlogindata({...logindata,image:"uploaded successfully"})
           onSend()
           dispatch(Logindetail({phone:logindata.number,image:data.url}))
          }).catch(err => {
            setdone("red")
              Alert.alert(" while uploading imgae")
          })
}
const Camergallery = async (props) => {
     
    const { granted } = await permissions.askAsync(permissions.CAMERA)
    //console.log(granted)
    if (granted) {
        let data = await imagepicker.launchImageLibraryAsync({
            mediaTypes: imagepicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
       // console.log(data)

        if (!data.cancelled) {
            let newfile = { 
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}` 
                
            }
            console.log(newfile)
            handleUpload(newfile)
        }
        
        
    } else {
        Alert.alert("not able to open gallery")
    }
  

}
const onSend = useCallback((messages = []) => {
  const msg = messages[0];
  // console.log(user)
  const mymsg = {
    ...msg,
    sendbyphone: logindata.number,
    image:logindata.image
  };


  db.collection("chats").add(mymsg);
  console.log(messages);
}, []);
  
  let disable="flex";
  let i=0;
    const fun=()=>{
   

      Animated.loop(
Animated.sequence([
  Animated.timing(position, {
  toValue: { x: 0, y: -150 },
  duration: 1000,
  useNativeDriver:true
  
  }),
  Animated.delay(100),
  Animated.timing(position, {
  toValue: { x: 0, y: 0 },
  duration: 1000,
  useNativeDriver:true
  
  })

])
      ).start()
   }
  const stop=()=>{
       disable="none"
    }
      scanstart?fun():stop();


  /*    var reg = /^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/;  
      function PhoneValidation(phoneNumber)
      {  
        var OK = reg.exec(phoneNumber.value);  
        if (!OK)  
          alert("phone number isn't  valid");  
        else  
          alert("phone number is  valid");  
      }  
useEffect(() => {
  PhoneValidation("917827677523")
}, [])*/
  return (
    <>
      <View style={styles.container}>
      <Image
        
            style={{ height: "30%", width: "70%", borderRadius: 50,marginBottom:10}}
            source={{uri:finalcredential[0]==undefined? defaultimage:finalcredential[0]}}
          />
  

        <View style={styles.inputbox}>
        <TextInput
        label="Phone"
        placeholder="PHONE"
        mode="outlined"
      style={styles.inputstyle}
        onChangeText={(text)=>{setlogindata({...logindata,number:text})}}
        ></TextInput>
   
     </View>
        <View style={styles.inputbox}>
        <Text
        
      
        
    

      style={styles.inputstyle}
      
        >{logindata.image}</Text>
     <Entypo name="images" size={24} color={done} onPress={()=>Camergallery({phone:logindata.number,image:logindata.image})} />
     </View>
        <View style={styles.innercontainer2}>
          <TouchableOpacity
            onPressIn={() => {
              ///console.log("in")
              setscanstart(true);
            }}
            onPressOut={() =>{ 
              
              setscanstart(false),
            navigation.navigate("Structure")
            }}
          >
            <Image
              style={{
                height: hp(20),
                width: "100%",
                borderRadius: 50,
                resizeMode: "contain",
                  
   
              }}
              source={require("../finger-removebg-preview.png")}
            />
            <Text style={{ color: "green" }} onPress={() => scanstart()}>
              𝙿̷𝚛̷𝚎̷𝚜̷𝚜̷ 𝚃̷𝚘̷ 𝚁̷𝚎̷𝚌̷𝚘̷𝚗̷𝚐̷𝚗̷𝚒̷𝚣̷𝚎̷ 𝙵̷𝚒̷𝚗̷𝚐̷𝚎̷𝚛̷ 𝙿̷𝚛̷𝚒̷𝚗̷𝚝̷
            </Text>
          </TouchableOpacity>
          <Animated.View
            style={{
              ...styles.scan,display:disable,
              transform: [
                { translateY: position.y },
                { translateX: position.x },
              ],
            }}
          >
            <Text> </Text>
          </Animated.View>
        </View>
       
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    
    display: "flex",

    alignItems: "center",
    
    backgroundColor: "#3e3e3e",
    justifyContent:"center",
    
  },
  innercontainer2: {
    backgroundColor: "#3e3e3e",
    
    
    
    marginTop:hp(10),
    flexDirection:"column",
    
   justifyContent:"flex-end",
   alignItems: "center",
 
   
  },
  textval: {
    fontSize: 40,
    color: "green",
    padding: "10%",
    
  },
  inputstyle: {
    // backgroundColor:"blue",
    textDecorationLine:"none",
   
    width:"80%",
    margin: 5,

    color: "green",
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  inputbox:{
 flexDirection:"row" ,width:"70%"
    
  },
  scan: {
    
    backgroundColor: "red",
    elevation: 20,
    height: "0.5%",
    width: 200,
    shadowColor: "blue",
   
  },
  
});
export default Second;
