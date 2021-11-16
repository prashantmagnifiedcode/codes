import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
const Status=()=>{
    const finalcredential = useSelector(state => state.Home.chatlogin)
    const defaultimage= "https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange.png"
    return (
        <>
     <View style={styles.container}>
            <View style={styles.container1}>
            <Image
            style={styles.images}
            source={{uri:finalcredential[0]==undefined? defaultimage:finalcredential[0]}}
             
          />
            </View>
            <View style={styles.detailcontainer}>
                <View style={styles.detailcontainer1}>
                <Text>name</Text>
                <Text>45:75</Text>

                </View>
                <View>
                <Text >tap to status</Text>
           

                </View>
            </View>
            
        </View>
        <View style={styles.separator}>
            <Text></Text>
        </View>
        <View style={styles.container}>
            <View style={styles.container1}>
            <Image
            style={styles.images}
            source={{uri:finalcredential[0]==undefined? defaultimage:"https://jooinn.com/images/dramatic-landscape-7.jpg"}}
             
          />
            </View>
            <View style={styles.detailcontainer}>
                <View style={styles.detailcontainer1}>
                <Text>name</Text>
                <Text>45:75</Text>

                </View>
                <View>
                <Text >tap to status</Text>
           

                </View>
            </View>
            
        </View>  
       
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
export default  Status;