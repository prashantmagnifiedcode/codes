import React from "react";
import { useState } from "react";
///import { WebView } from 'react-native-webview';
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

// import Call API

const Callmake = (props) => {
  const {number,name}=props.route.params
  console.log(props)
  const [inputValue, setInputValue] = useState("9999999999");

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 10) {
      alert("Please insert correct contact number");
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };


  return (
    <>
      

      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:"black",height:"100%",display:"flex",borderRadius:5
    
    }} >
          <Text style={{color:"green",width:"100%",height:"10%",
           textAlign:"center"
           ,fontSize:25
        }} >
            Coder Whatsapp Call
          </Text>
          <Text style={{color:"green",width:"100%",textAlign:"center"
        }} >
            ....................
          </Text>
          <View style={{display:"flex",justifyContent:"center",alignItems:"center",height:"20%"}} >
              <View style={{width:"30%",borderRadius:100,display:"flex",justifyContent:"center",alignItems:"center"}}>

            <Icon name='call' size={80} color={"green"}  />
              </View>

          </View>
        
          <Text style={{color:"green",width:"100%",height:"5%",fontSize:25,textAlign:"center"
        }} >
           {name}
          </Text>
          <Text style={{color:"green",width:"100%",textAlign:"center"
        }} >
            ..................
          </Text>
        
          <Text
          
            style={{color:"green",width:"100%",height:"40%",textAlign:"center" ,fontSize:25
        }}
            
            
          >{number}</Text>
          <View style={{display:"flex",flexDirection:"row",height:"10%",width:"100%",justifyContent:"space-evenly"}}>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={triggerCall}
            style={{color:"green",
            borderColor:"#5DFF17",
    
            borderWidth:2,
            color:"green"
            ,
            width:"40%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center" ,fontSize:25,borderRadius:50
        }}
          >
            <Text style={{color:"green"}}>Make a Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
          
          
            style={{color:"green",width:"40%",
            borderColor:"#5DFF17",
            
            borderWidth:2,
            color:"green"
            ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center" ,fontSize:25,borderRadius:50
        }}
          >
            <Text  style={{color:"green"}}      >Discard Call</Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop:31,
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    
    color:"green"
  },
  
 
});
export default Callmake;
