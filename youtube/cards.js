import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity,Dimensions,Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu, { MenuItem } from 'react-native-material-menu';
import { useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import {useTheme} from '@react-navigation/native'
import { Linking } from "react-native";
const Card = (prop) => {

  const navigation = useNavigation()
  const [datax,setdatax]=useState()
  
  const { colors  }= useTheme()
  const textcolors = colors.iconColor;
  
  const width=Dimensions.get('window').width
  const height =Dimensions.get('window').height
  
    const dispatch = useDispatch();
    const MenuItems = [
      "Save to Watch later", 
      "Save to playlist", 
      "Download",
      "Share", 
      "Not Interested", 
        "Dont recommand channel",
        "Report"
        ];
   _menu = null;

  setMenuRef = ref => {
    _menu = ref;
  };
  

 const  hideMenu = (e,link) => {
    
     // console.log(e)
      
      console.log(e)
      switch(e){
        case MenuItems[0]:
          
          _menu.hide();
          break
        case MenuItems[1]:
          Linking.openURL(`whatsapp://send?text=${"jnjn"}}`);
          _menu.hide();
          break
        case MenuItems[3]:
          Linking.openURL(`whatsapp://send?text=${`https://www.youtube.com/embed/${link}`}`);
          _menu.hide();
          break
        case MenuItems[4]:
        

          Alert.alert(
            "sorry for inconvinents video",
            "this will not happen again"
            ,
            [
              {text:"Dont show",onPress:()=>{console.log("dont show")},style:"destructive"},
              {text:"cancel",onPress:()=>{console.log("dont mind")}}
            ]
          );
           
        
          _menu.hide();
          break
        case MenuItems[5]:
          
          Alert.alert(
            
            "this will not happen again"
            ,
            [
              {text:"Dont show",onPress:()=>{console.log("dont show")},style:"destructive"},
              {text:"cancel",onPress:()=>{console.log("dont mind")}}
            ]
          );
          _menu.hide();
          break
        case MenuItems[6]:

          Alert.alert(
            "sorry for inconvinents video",
            "Report"
            ,
            [
              {text:"Dont show",onPress:()=>{console.log("dont show")},style:"destructive"},
              {text:"cancel",onPress:()=>{console.log("dont mind")}}
            ]
          );
          _menu.hide();
          break
        default:
          break
      }
     
  };

  showMenu = () => {
    _menu.show();
  };
      

  return (
    <>
        <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Videoplayer', { videoId: prop.videoId, title: prop.title, channel: prop.channel }) }
      >
          <View>
            <Image style={{ height: 0.27*height, width:width }} source={{ uri: `https://i.ytimg.com/vi/${prop.videoId}/hqdefault.jpg` }} />
          </View>
      </TouchableOpacity>


          <View style={{ height:0.0894*height,paddingHorizontal:0, paddingTop: 5, paddingBottom: 20, flexDirection: 'row', marginTop: 1 }}>
            <View style={{ marginHorizontal: 10 }}>
              <Image
            
                style={{ width: 0.11*width, height: 0.054*height, borderRadius: 20, margin: 0 }}
                source={{uri: `https://i.ytimg.com/vi/${prop.videoId}/hqdefault.jpg`}} />
            </View>
            <View style={{ paddingHorizontal: 0,marginBottom: 4,width:0.74*width }}>
              <Text style={{ fontWeight: '600', fontSize: 14, color:textcolors, flex: 1, flexWrap: 'wrap' }}>
              
              {prop.channel}
              </Text>
              <Text style={{ fontSize: 14, color:textcolors}}>
              {prop.title}
                
              </Text>
            </View>
              <TouchableOpacity onPress={()=>setvideo("hjdfhjd")}>
                   
      <Menu
        ref={setMenuRef}
        button={
          <Icon name='more-vert' size={25} color={'#3e3e3e'} onPress={showMenu} />
        }>
        {
          MenuItems.map((data, i) => {
            
              
            return (
              <MenuItem
                onPress={()=>hideMenu(data,prop.videoId)}
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                textStyle={{ color: "white"}}
                underlayColor={"#121212"}
              
                key={i}>{data}</MenuItem>
            );
          })
        }
      </Menu>

              </TouchableOpacity>

              

             
            
          </View>

        </View>


    </>

  )
}
export default Card;