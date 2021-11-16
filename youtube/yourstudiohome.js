import React, { useContext } from "react";
import { View, Text, Image ,FlatList} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import "../car.jpg";
import { useNavigation } from "@react-navigation/core";

import Card from "./cards";

const Yourstud = () => {
  
    const Navigation=useNavigation()
  const data = useSelector((state) => {
    return state.carddata;
  });


  const namedata= useSelector((state)=>{ return state.Update})
  
  console.log(namedata)
  
  

  return (
    <>
     
      <View style={{ height: "67%", with: "100%", flex: 1 }}>
        <View style={{ height: "20%",marginBottom:0 }}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../car.jpg")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            
            width: "100%",
            height:hp(7),

            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <View
            style={{
              width: "84%",
              flexWrap: "wrap",
              height:"100%",
            }}
          >
            <Icon name="account-circle" size={hp(7)} color="black" />
            <View
              style={{
                height: "100%",

                justifyContent: "center",
              }}
            >
              <Text>{namedata}</Text>
              <Text>no subscriber</Text>
            </View>
          </View>
          <View>
            <Icon name="settings" size={hp(7)} color="black" onPress={()=>Navigation.navigate('Studiosetting')} />
          </View>
        </View>
        <Text style={{ textTransform: "uppercase" }}>upload</Text>
        <View style={{ height: "70%"}}>
        <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      
      />
        </View>

      </View>
    </>
  );
};
export default Yourstud;
