import React,{useState} from 'react'
import {View,Text,Image,StyleSheet, Animated,} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";
const defaultimage= "https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange.png"
const Call=()=>{
    const [mkcall,setmkcall]=useState(false)

    const position = new Animated.ValueXY({ x: 0, y: 0 });
    const finalcredential = useSelector(state => state.Home.chatlogin)
    Animated.loop( 
        Animated.sequence([ 
          
          Animated.timing(position, {
            toValue: { x:200, y:0 },
            duration: 2000,
            useNativeDriver:true
            
          }
          ), 
          Animated.delay(100),
          Animated.timing(position, {
            toValue: { x:-40, y:0 },
            duration: 2000,
            useNativeDriver:true
            
          }
          ),
          Animated.delay(100),
          Animated.timing(position, {
            toValue: { x:0, y:0 },
            duration: 1000,
            useNativeDriver:true
            
          }
          ),
         
      ]),
        
      ).start(); 
      
    let  disable;
const animating=()=>{
    return(
        <>
        
        <View style={styles.movement}>
<Animated.View
 style={{
    ...styles.movementline,display:disable,
    transform: [
        { translateY: position.y },
        { translateX: position.x },
      ],

  }}
>


<Text style={styles.movementline} >--------------------------------------</Text>
</Animated.View>
<Text style={styles.movementclick} onPress={()=>setmkcall(false)}>Discard</Text>
</View>
        </>
    )
}
const noanimating=()=>{
    return(
        <>
         <View style={styles.detailcontainer}>
                <View style={styles.detailcontainer1}>
                <Text>name</Text>
                <Text>45:75</Text>

                </View>
                <View>
                <Text >tap to status</Text>
           

                </View>
            </View>
            <View style={styles.container1}>
            <Image
            style={styles.images}
            source={{uri:finalcredential[0]==undefined? defaultimage:"https://jooinn.com/images/dramatic-landscape-7.jpg"}}
             
          />
            </View>
        </>
    )
}
    return (
        <>

      

         <View style={styles.container}>
             <View style={styles.phone}>
            <Icon name='call' size={40} color='green' onPress={()=>setmkcall(true)} />

             </View>
{mkcall?animating():noanimating()}
             
           
            
      
 
      
    </View>
        </>
    )
}
const styles=StyleSheet.create({

    container:{
       height:hp(10),width:wd(98),borderRadius:10,flexDirection:"row",
       borderColor:"#3e3e3e",borderWidth:1,borderRadius:7,margin:2,backgroundColor:"#3e3e3e",borderBottomWidth:4,borderBottomColor:"green"
    },
    phone:{
        height:hp(100),  marginTop:hp(2), width:"13%" 
    },
    container1:{
       width:wd(70),height:hp(100)
    },
   images:{
       height:hp(7), width: wd(15), borderRadius: 50 ,marginTop:5,       
   },
   detailcontainer:{
       width:wd(70),height:hp(100),padding:3
   },
   detailcontainer1:{
       flexDirection:"row",justifyContent:"space-between"
   },
   separator:{
       backgroundColor:"black",height:1
   },
   movement:{
       
       height:"100%",
       width:"87%",
       borderTopRightRadius:7,
       overflow:"hidden"
       
   },
   movementline:{
       color:"green",
       marginTop:"3%",
       width:"100%",
     
      
       
   },
   movementclick:{
       width:"20%",
       height:"30%",
       color:"red",
       marginTop:"1%",
       
       alignSelf:"flex-end"

   }
   
   
   })
export default  Call;