import React, { useEffect, useState,  useLayoutEffect,} from 'react';
import * as Contacts from 'expo-contacts';
import { StyleSheet, View, Text, FlatList,TouchableOpacity ,
  } from 'react-native'
import Header from './header'

import {useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/core';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { Tranferprofiledatas}from './reducer.js/action'

import { auth, db } from "../firebase";
export default function Contact() {
  
  const navigation= useNavigation()
  const dispatch=useDispatch()
  const [contacts, setContacts ] = useState([])
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
       if (data.length > 0) {
          setContacts(data)
   //   console.log({contacts})
        }
      }
    })();
  }, []);

  
    
  
        

  /*const firstcheck=(data)=>{
    
     
       db.collection("chats").onSnapshot((snapshot) =>snapshot.docs.map((doc) => {
          if(data.number!=doc.data().sendbyphone){
            dispatch(Tranferprofiledatas({name:data.name,number:data.number }))
            navigation.navigate("Structure")
          }else{
                  alert("NOT USING THIS WHATSAPP !SORRRY")
                }
                
              }));
          
    
          
  
  }*/
  return (
    <>
    <Header data={'login',455}/>
    <View style={styles.container}>
    <FlatList 
        data={contacts}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=>{ dispatch(Tranferprofiledatas({name:item.name,number:item.phoneNumbers[0].number }))}}>

            <View style={styles.contactform}>

              <Text  style={styles.st}>{`${item.name}`}</Text>
              <Text style={styles.st} >{`(${item.phoneNumbers ? item.phoneNumbers[0].number : ''})`}</Text>
              

            </View>
            </TouchableOpacity>
          )
        }}
        
      />
    </View>
            </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
 
    
  },
  contactform:{
    height:hp(8),
    width:"100%",
    
    margin:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    
    
  },
  st:{
    fontSize:hp(2.5),
    color:"green",
    padding:10

  }
});