import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import {useTheme} from '@react-navigation/native'


const Mini=(prop)=>{
    //console.log("propt")
    const {colors}=useTheme()
    const textcolors=colors.iconColor
    //console.log(prop)
    return (
        <>
        <View  style={{flexDirection: "row",margin: 4,marginBottom: 10 }}>
            <View  >
            
            <Image style={{ height: 103, width: 155,borderRadius:4,margin:5 }} source={{ uri: `https://i.ytimg.com/vi/${prop.videoId}/hqdefault.jpg` }} />

            </View>
            <View>
                <View style={{height:80,width:190,marginBottom: -5,flexWrap:"wrap"}}>
                    <Text style={{height:70,width:190,color: textcolors}}>{prop.title}</Text>
                </View>
                <View style={{height:10}}>
                    <Text style={{fontsize: 10,color: textcolors}}>{prop.channel}</Text>
                </View>
            </View>

               
            
        </View>




        </>
    )
}
const style= StyleSheet.create
export default Mini;