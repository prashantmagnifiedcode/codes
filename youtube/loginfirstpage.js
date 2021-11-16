import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { Camergallery } from './Imagepickeryoutube';
const Loginfirstpage = (prop) => {
    const themedata= useSelector((state) => { return state.themes })
  console.log("theme")
  console.log(themedata)
 const dispatchtheme=useDispatch()
    const navigation=useNavigation()
    
    return (
        < >

             

            <View style={{ position: "absolute", marginTop: 20,opacity: 2, marginLeft: 55, backgroundColor: "white", elevation: 15, height: 280, width: 250, marginRight: 55 }}
            
            >
                <View >
                    <Text style={{ fontSize: 25, textAlign: "center" }}>Acount</Text>

                </View>

                <View style={{ flexDirection: "row" }}>
                
                    <Image style={{height:70,width:70,borderRadius:hp(10),borderWidth:2}} source={{uri:"https://res.cloudinary.com/dqsfpok4o/image/upload/v1630219858/fj8cf7j6fmyeo5gg6tyv.jpgs"}}/>
                    <View style={{ marginTop: 18 }}>

                        <Text>prashant SRIVASTAVA</Text>
                    </View>
                </View>

                <Text style={{ borderBottomWidth: 1 }}></Text>
                <View>

                    <Text style={style.fonts}>Your channel</Text>
                    <Text style={style.fonts}>Manage account</Text>
                    <Text style={style.fonts - 2}>learn more about account option</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text onPress={()=>{prop.setclose(false)} } style={{textAlign: "center"}}>goBack</Text>
                </View>






            </View>








            






      
        </>
        
    )
}

const style = StyleSheet.create({

    same: { flexDirection: "row", margin: 8 },
    fonts: { fontSize: 18, margin: 7 }


}

)
export default Loginfirstpage;