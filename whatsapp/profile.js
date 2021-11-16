import React, {useState,useLayoutEffect} from "react";

import {View,Text,Image,TouchableOpacity,FlatList,StyleSheet} from 'react-native'
import {FAB} from 'react-native-paper'
import { Linking } from 'react-native';
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Contact from './contact';
import { useSelector,useDispatch} from 'react-redux';
import { Deleteprofiledatas } from './reducer.js/action';
const Profile =()=>{
 const navigation= useNavigation()
 const finalprofiledata= useSelector((state)=>{ return state.Home.list})
 const [Profilephone, setProfilephones] = useState([]);
 const finalcredential = useSelector(state => state.Home.chatlogin)
 const dispatch = useDispatch()
 console.log(Profilephone)

    return (
        <>
        <FlatList
        data={finalprofiledata}
        renderItem={({item})=>{
            
            console.log(item)
            return(
        <TouchableOpacity
           onLongPress={() => {
               dispatch(Deleteprofiledatas({name:item.name,number:item.number}))
}}
        delayLongPress={2000}
        
        onPress={()=>{navigation.navigate("Cards",{name:item.name,number:item.number})}}>

        <View style={styles.container}>
            <View style={styles.container1}>
        
               <Image
            style={styles.images}
            source={{uri:finalcredential[0]==undefined? "https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange.png":"https://jooinn.com/images/dramatic-landscape-7.jpg"}}
          />
            </View>
            <View style={styles.detailcontainer}>
                <View style={styles.detailcontainer1}>
                <Text style={{color:"green"}}>{item.name}</Text>
                <Text style={{color:"green"}}>45:75</Text>

                </View>
                <View>
                <Text style={{color:"green"}}>onlline/offline</Text>
           

                </View>
            </View>
            
        </View>
        </TouchableOpacity>
               
            )
        }}
        keyExtractor={(i=1) =>i++}
        />
   
        <FAB  
               
                    small={true}
                    icon="plus"
                   
                    onPress={()=>navigation.navigate("Contact")}
                    
                    theme={{colors:{accent:"green"}}}
                    style={{  position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,}}/>
                    </>
        
    )
}
const styles=StyleSheet.create({

    container:{
        height:hp(10),width:"98%",borderRadius:10,flexDirection:"row",
        borderColor:"#3e3e3e",borderWidth:2,borderRadius:7,margin:2,backgroundColor:"#3e3e3e"
    },
    container1:{
        width:"20%",height:"100%"
    },
   images:{
    height: "80%", width: "80%", borderRadius: 50 ,marginTop:5,       

   },
   detailcontainer:{
    width:"80%",height:"100%",padding:5
   },
   detailcontainer1:{
    flexDirection:"row",justifyContent:"space-between"
   },
   separator:{
       backgroundColor:"black",height:1
   }
   
   
   
   })
export default  Profile;