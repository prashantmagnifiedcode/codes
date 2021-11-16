import React from 'react'
import { Text, View,ScrollView,TouchableOpacity,Alert } from 'react-native'
import {Entypo,Ionicons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/core'
import Imagepick  from './Imagepickeryoutube'

const Header = () => {
  const navigation= useNavigation()
  const {colors}=useTheme()
  const iconcolorchange=colors.iconColor

 

    return (
      <>
        <View style={{backgroundColor:colors.headercolor,marginTop:29,paddingTop:11,height:55,flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between" }}>
            <Entypo name="youtube" size={40} color="red"/>
            <Text style={{fontSize: 15,marginLeft:10,paddingTop:9}}>ʏᴏᴜᴛᴜʙᴇ</Text>
        </View>
        <View  style={{flexDirection:"row",}}>
   
          <TouchableOpacity style={{ paddingHorizontal: 8 }}  onPress={()=>Imagepick()}>
            <Icon name='videocam' size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={()=>navigation.navigate('Searchs')}  >
            <Icon name='search' size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 8 }}>
            <Icon name='account-circle' size={35} color="black" />
          </TouchableOpacity>
             
        </View>
        </View>


        
        </>
        
    )

}
export default Header;