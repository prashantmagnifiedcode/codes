import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from "react-native-vector-icons/MaterialIcons";
 
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Clearchat from './reducer.js/action'
const Header = (prop) => {
  const dispatch = useDispatch();
  const navigation= useNavigation()
  const finalcredential = useSelector(state => state.Home.chatlogin)
  const {name,number}=prop.data
  const list=[
  
    'Group info',
    'Group media',
    'Search',
    'mute notification',
    'Wallpaper',
    'More',
    'clear'
  ]

  _menu = null;

  setMenuRef = ref => {
    _menu = ref;
  };
 
 const  hideMenu = (e) => {
   console.log("del");
 //console.log(e)
 if(e.name===name){
  dispatch({
    type:"clear",
    payload: e
})
 _menu.hide();
};

}
  showMenu = () => {
    _menu.show();
  };
  return (
    <>
    
      <View
 
 style={{
          height: hp(9),
          width: "100%",
          flexDirection: "row",
          marginTop: 32,
          backgroundColor: "#3e3e3e",
          
          borderColor:"black",
          
          alignSelf:"center",
          elevation:20
        }}
      >
        <View style={{ width: "20%", height: "100%" }}>
   
                <Image
            style={{ height: "100%", width: "100%",borderRadius:50 }}
            source={{uri:finalcredential[0]==undefined? "https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange.png":"https://jooinn.com/images/dramatic-landscape-7.jpg"}}
          />
        </View>
        <View style={{ width: "80%", height: "100%", padding: 5 }}>
          <View style={{ flexDirection: "row",justifyContent:"space-between" ,marginTop:7}}>
           <View style={{flexDirection:"column",width:"60%",marginLeft:2}}>
            <Text>{name}</Text>
            <Text style={{color:"green"}}>45:75</Text>

           </View>
            <TouchableOpacity
              style={{ paddingHorizontal: 8 }}
              onPress={()=>navigation.navigate("github")}
            >
              <Entypo name="github" size={35} color="black"  onPress={()=>navigation.navigate("github")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Callmake",{name,number})}>

            <Icon name='call' size={25} color='black'  />
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Menu
                ref={setMenuRef}

              button={

                <Icon name='more-vert' size={25} color='black' onPress={()=>showMenu()}  />

              }
              >
                {
                  list.map((item,i)=>{
                    
                    return (
                      <MenuItem
                      onPress={()=>hideMenu({name,number})}
                      style={{backgroundColor:"#3e3e3e"}}
                      textStyle={{color:"green"}}
                      underlayColor={"#5DFF17"}
                     key={i}
                      
                      
                      >{item}
                      </MenuItem>
                    )
                  })
                }


              </Menu>

            </TouchableOpacity>
            
          </View>


        </View>


      </View>
    </>
  );
};
export default Header;
