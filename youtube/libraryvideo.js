import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import {useTheme} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
const Minilibrary=(prop)=>{
    //console.log("propt")
    const {colors}=useTheme()
    const textcolors=colors.iconColor
    const navigation=useNavigation()
    //console.log(prop)
    return (
        <>
            
        <View style={{flexDirection: "column",margin: 1,height:"100%"}}>

            <View style={{backgroundColor:"black",height:"58%",marginBottom:1,width:150}} >
          <TouchableOpacity
          onPress={() => navigation.navigate('Videoplayer', { videoId:prop.videoId, title:prop.title, channel:prop.channelTitle }) }>
            <Image style={{ height: "100%", width:"100%",margin:0,borderTopLeftRadius:15,borderBottomColor: "red" ,borderBottomWidth: 10}} source={{ uri: `https://i.ytimg.com/vi/${prop.videoId}/hqdefault.jpg` }} />
            </TouchableOpacity>
            </View>

            <View style={{ marginLeft:1 ,borderRadius:5,height:"41%",flexWrap:"wrap",width:150}}>
            <Text style={{height:"100%",width:"100%",color: textcolors}}>{prop.title}</Text>
                
            </View>


            </View>
        




        </>
    )
}
export default Minilibrary;