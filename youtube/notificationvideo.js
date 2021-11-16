import React ,{useState}from 'react'
import { View, Text, Image ,TouchableOpacity} from 'react-native'
import {useTheme} from '@react-navigation/native'
import VideoOptions from './videoption'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu, { MenuItem } from 'react-native-material-menu';
import { Linking } from "react-native";
const NotificationMini=(prop)=>{
    //console.log("propt")
    const {colors}=useTheme()
    const textcolors=colors.iconColor
    
    const navigation=useNavigation()
    const [titlename,settitlename]=useState("")
    
    const MenuItems = [
    "Hide this notification",
    `Turn off all from ${titlename}`
        ];
   _menu = null;

  setMenuRef = ref => {
    _menu = ref;
  };
  

 const  hideMenu = (e) => {
   console.log(e)
   switch(e){
     case MenuItems[0]:
       
          _menu.hide();
          break
        case MenuItems[1]:
          _menu.hide();
          break
        default:
          break
        }
        
      };
      
      showMenu = (data) => {
        settitlename(data)
    _menu.show();
  };

  

    return (
        <>

         <View style={{ height:60,paddingHorizontal:0, paddingTop: 5, paddingBottom: 20, flexDirection: 'row', marginTop: 2 }}>
                
            
            <View style={{ paddingHorizontal: 0,marginBottom: 4,width:269,marginLeft:5 }}>
              <Text style={{ fontWeight: '600', fontSize: 10, color: textcolors, flex: 1, flexWrap: 'wrap' }}>
              {prop.channel}
              </Text>
              <Text style={{ fontSize: 14, color: textcolors }}>
              {prop.title}
              
                
              </Text>
              
            </View>
            <TouchableOpacity
          onPress={() => navigation.navigate('Videoplayer', { videoId:prop.videoId, title:prop.title, channel:prop.channelTitle }) }>
                            
              <Image
                style={{ width: 65, height: 60,marginLeft:2, marginRight: 1,borderBottomRightRadius:20,borderTopLeftRadius:20 }}
                source={{uri: `https://i.ytimg.com/vi/${prop.videoId}/hqdefault.jpg`}} />
                </TouchableOpacity>
                <Menu
        ref={setMenuRef}

        button={
          <Icon name='more-vert' size={25} color={'#3e3e3e'} onPress={()=>showMenu(prop.title)} />
        }>
        {
          
          MenuItems.map((data,i) => {
              
            return (
              <MenuItem
                onPress={()=>hideMenu(data)}
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                textStyle={{ color: "white"}}
                underlayColor={"#121212"}
              
                key={i}>{data}</MenuItem>
            );
          })
        }
      </Menu>
            <View>

              

            </View>
            </View>
         




        </>
    )
}
export default NotificationMini;