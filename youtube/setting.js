import React from 'react'
import { View, Text, Animated, StyleSheet ,ScrollView} from 'react-native'
import Header from './headernav'
import SwipButton from './swip'
import SelectDropdown from 'react-native-select-dropdown'
import General from './general'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/core'
const Setting = () => {
   const navigation= useNavigation()


    return (
        <>
           <Header/>
            <View style={{height:"100%",width:"100%"}} >


                   <ScrollView>
                       <View>
                        <Text  style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}  onPress={()=>navigation.navigate('General')}>Genrel</Text>
                  

                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Autoplay</Text>
                  

                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Download</Text>
                  

                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Watch on TV</Text>
                  

                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>History & privacy</Text>
                  

                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Purchase ans membership</Text>
                  

                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Billing &Payment</Text>
                  

                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Notification</Text>
                  
                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Connection apps</Text>
                  
                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Live chat</Text>
                    
                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:14, borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>Caption</Text>
                    
                    
                   
                        <Text style={{height:hp(4),fontSize:hp(2.3),margin:19,borderBottomWidth:0.5,borderBottomColor:"rgba(0,0,0,0.5)"}}>About</Text>
                        </View>
                        </ScrollView>
                   


           </View>
              
            

        </>
    )
}
export default Setting;
