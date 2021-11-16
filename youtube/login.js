import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import Loginfirstpage from './loginfirstpage';
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
const Login = () => {
    const [render,setrender]=useState(false)
    const themedata= useSelector((state) => { return state.themes })
  console.log("theme")
  console.log(themedata)
 const dispatchtheme=useDispatch()
    const navigation=useNavigation()
    return (
        <>


            <View style={{ height: 60, width: "100%", elevation: 2, flexDirection: "row-reverse",padding:13,
            backgroundColor: "rgba(0,0,0,0.5)", marginTop: 30 }}
            
            >
                  
            </View>
             <View style={{ height: 100, padding: 5 }}>
                <MaterialCommunityIcons name="account-circle" size={60} color="black" onPress={()=>{setrender(true)}}/>
                <View style={{ marginTop: 10 }}>

            <Text>prashant SRIVASTAVA</Text>
                </View>
            </View>
            <Text style={{ borderBottomWidth: 1 }}></Text>

   <ScrollView>


            <View style={style.same}>
                <MaterialCommunityIcons name="youtube-studio" size={33} color="black" />
                <Text style={{ marginLeft: 10, marginTop: 6 }} onPress={()=>navigation.navigate('Yourstud')}>your Studio</Text></View>

            <View style={style.same}>
                <MaterialCommunityIcons name="timeline" size={33} color="black" />
                <Text style={{ marginLeft: 10, marginTop: 6 }}>Time watched</Text></View>
            <View style={style.same}>
                <Ionicons name="md-logo-youtube" size={33} color="black" />
                <Text style={{ marginLeft: 10, marginTop: 6 }}>Get youtube Premium</Text></View>
            <View style={style.same}>
                <FontAwesome name="dollar" size={24} color="black" />
                <Text style={{ marginLeft: 10, marginTop: 6 }}>Purchase and membership</Text></View>
            <View style={style.same}>
                <MaterialIcons name="account-box" size={24} color="black" />
                <Text style={{ marginLeft: 10, marginTop: 6 }}>SWitch account</Text></View>
            <View style={style.same} >
                <MaterialCommunityIcons name="incognito" size={24} color="black" />
                <Text style={{ marginLeft: 10, marginTop: 6 }}>Turn on Incognito</Text></View>


            <View>
                <View style={style.same}>
                    <MaterialCommunityIcons name="database-settings" size={24} color="black" />
                    <Text style={{ marginLeft: 10, marginTop: 6 }}>your data in youtube</Text>
                </View>


            </View>
            {render?<Loginfirstpage setclose={setrender}/>:null}


















            <Text style={{ borderBottomWidth: 1 }}></Text>


            <View >
                <View style={style.same}>
                    <MaterialIcons name="settings" size={33} color="black" />
                    <Text style={{ marginLeft: 10 }} onPress={()=>navigation.navigate('Setting')}>Settings</Text></View>
                <View style={style.same}>
                    <MaterialIcons name="help" size={33} color="black" />
                    <Text style={{ marginLeft: 10 }}>Help & Feedback</Text></View>

            </View>  
            
           

            



</ScrollView>



        </>
    )
}

const style = StyleSheet.create({

    same: { flexDirection: "row", margin: 8 },
    fonts: { fontSize: 18, margin: 7 }


}

)
export default Login;