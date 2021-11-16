
import React from 'react'
import {Text ,View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu, { MenuItem } from 'react-native-material-menu';
import { Linking } from "react-native";
const VideoOptions =()=> {
  
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
  

 const  hideMenu = (e) => {
    
      let val= e.data;
      switch(val){
        case MenuItems[0]:
          Linking.openURL(`whatsapp://send?text=${e.data}}`);
          _menu.hide();
          break
        case MenuItems[1]:
          Linking.openURL(`whatsapp://send?text=${e.data}}`);
          _menu.hide();
          break
        case MenuItems[3]:
          Linking.openURL(`whatsapp://send?text=${e.data}}`);
          _menu.hide();
          break
        case MenuItems[4]:
          Linking.openURL(`whatsapp://send?text=${e.data}}`);
          _menu.hide();
          break
        case MenuItems[5]:
          Linking.openURL(`whatsapp://send?text=${e.data}}`);
          _menu.hide();
          break
        case MenuItems[6]:
          Linking.openURL(`whatsapp://send?text=${e.data}}`);
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
        <Menu
          ref={setMenuRef}
          button={
            <Icon name='more-vert' size={25} color={'#3e3e3e'} onPress={showMenu} />
          }>
          {
            MenuItems.map((data, i) => {
              
                
              return (
                <MenuItem
                  onPress={()=>hideMenu({data})}
                  style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                  textStyle={{ color: "white"}}
                  underlayColor={"#121212"}
                
                  key={i}>{data}</MenuItem>
              );
            })
          }
        </Menu>
      </View>
      
      </>
    )
  
}
export default VideoOptions