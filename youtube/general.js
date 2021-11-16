import React,{useState} from 'react'
import { View, Text, Animated, StyleSheet ,ScrollView} from 'react-native'
import Historynav from './historynav'
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector,useDispatch } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
const General=()=>{
    const [changetoggle, setchangetoggle] = useState({
        toggles1: "toggle-off",
        toggles2: "toggle-off",
      });
      const dispatchtheme=useDispatch()
      if(changetoggle.toggles1=="toggle-on"){
        dispatchtheme({type:"changetheme",payload:true})
      }else{
        dispatchtheme({type:"changetheme",payload:false})
      }
      
    return(
        <>
        <Historynav name="General              " />
    
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 17 }}>Themes</Text>
            <Icon
              name={changetoggle.toggles1}
              size={hp(7)}
              color={
                changetoggle.toggles1 == "toggle-on"
                  ? "green"
                  : "rgba(0,0,0,0.5)"
              }
              onPress={() =>
                setchangetoggle({
                  ...changetoggle,
                  toggles1:
                    changetoggle.toggles1 == "toggle-off"
                      ? "toggle-on"
                      : "toggle-off",
                })
              }
            />
          </View>
        

        </>
    )
}
export default General