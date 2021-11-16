import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth, db } from "../firebase";

import { useSelector,useDispatch} from 'react-redux';
import { Chatdata } from './reducer.js/action';
import { Logindetail } from './reducer.js/action';
const Font = () => {
  const navigation = useNavigation()
  const [scanstart, setscanstart] = useState(false);
  const [logindata,setlogindata]=useState({email:"",password:"",number:"",image:""})
  const [signdata,setsigndata]=useState({name:"",email:"",password:"",image:""})
  const [loginwith,setloginwith]=useState("ꜱɪɢɴ-ɪɴ")
  const [uids,setuid]=useState("")
  const dispatch = useDispatch()
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  let disable="flex";
  let i=0;
  console.log(logindata.email)
const handleSignUp = () => {
 console.log(logindata.email, logindata.password)
    auth.createUserWithEmailAndPassword(logindata.email, logindata.password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        //setlogindata({...logindata,email:"",password:""})
      })
      .catch(error => console.log(error.message))
     
  }
 
  const handlelogin= () => {
    auth.signInWithEmailAndPassword(logindata.email, logindata.password).then(userCredentials => {
        const user = userCredentials.user;
        console.log(user)
        dispatch(Chatdata({name:user.uid,emails:user.email}))
       /// dispatch(Logindetail({phone:logindata.number,image:logindata.image}))
        navigation.navigate("Second")
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  
 /* const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }*/

const loginfun=(data)=>{
  if(data){
    return(
      <>
      <TextInput
              label='email'
              placeholder="email"
              mode="outlined"
              
              onChangeText={(text)=>{setlogindata({...logindata,email:text})}}
              style={styles.inputstyle}
              
            ></TextInput>
                 <TextInput
              label='password'
              placeholder="password"
              mode="outlined"
              
              onChangeText={(text)=>{setlogindata({...logindata,password:text})}}
              style={styles.inputstyle}
              
            ></TextInput>
                 <TextInput
              label='number'
              placeholder='number'
              mode="outlined"
              
              onChangeText={(text)=>{setlogindata({...logindata,number:text})}}
              style={styles.inputstyle}
              
            ></TextInput>
                 <TextInput
              label='image'
              placeholder='image'
              mode="outlined"
              
              onChangeText={(text)=>{setlogindata({...logindata,image:text})}}
              style={styles.inputstyle}
              
            ></TextInput>
      </>
    )
  }else{
    return(
      <>
      <TextInput
              label='email'
              placeholder="email"
              mode="outlined"
              
              onChangeText={(text)=>{setlogindata({...logindata,email:text})}}
              style={styles.inputstyle}
              
            ></TextInput>
                 <TextInput
              label='password'
              placeholder="password"
              mode="outlined"
              
              onChangeText={(text)=>{setlogindata({...logindata,password:text})}}
              style={styles.inputstyle}
              
            ></TextInput>
      </>
    )
  }
  
}

 

  return (
    <>
      <View style={styles.container}>
        

          <Text style={styles.textval} onPress={()=>{ handlelogin()}}>{loginwith}</Text>
         
          {
            
            loginwith==='ʟᴏɢɪɴ'?loginfun(true):loginfun(false)}
          

    

     {loginwith==='ꜱɪɢɴ-ɪɴ'?<Text  style={{marginTop:10,fontSize:20}} onPress={()=>loginwith=='ꜱɪɢɴ-ɪɴ'?setloginwith("ʟᴏɢɪɴ"):setloginwith("ꜱɪɢɴ-ɪɴ")}>ʟᴏɢɪɴ</Text>:<Text  style={{marginTop:10,fontSize:20}} onPress={()=>loginwith=='ꜱɪɢɴ-ɪɴ'?setloginwith("ʟᴏɢɪɴ"):setloginwith("ꜱɪɢɴ-ɪɴ")}>ꜱɪɢɴ-ɪɴ</Text>}


        
       
       
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    color: "white",
    display: "flex",

    alignItems: "center",
    
    backgroundColor: "#3e3e3e",
    justifyContent:"center"
    
  },

  
  textval: {
    fontSize: 40,
    color: "black",
    padding: "5%",
    
  },
  inputstyle: {
    // backgroundColor:"blue",
    textDecorationLine:"none",
    width: "50%",
    height: "8%",
    margin: 1,
    color: "green",
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  scan: {
    
    backgroundColor: "green",
    elevation: 20,
    height: "0.5%",
    width: "70%",
    shadowColor: "blue",
  },
});
export default Font;
/* <Text style={styles.textval} onPress={()=>handlelogin()}>login</Text>*/