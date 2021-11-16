import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Card from "./cards";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";
import { Camergallery, Camera } from "./Imagepickeryoutube";
import { diffClamp } from "react-native-reanimated";

const Headeryoutube = ({ navigation }) => {

  const scrolly = new Animated.Value(0);
  const diffclamp= Animated.diffClamp(scrolly,0,88)
  const translatey = diffclamp.interpolate({
    inputRange: [0, 55],
    outputRange: [0, -55],
    
  });

  const { colors } = useTheme();
  const iconcolorchange = colors.iconColor;

  const data = useSelector((state) => {
    return state.carddata;
  });
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  ;
  return (
    <>
    <Animated.View
        style={{
          transform: [
            {
              translateY: translatey,
            
              

            },
            
          ],
        }}
      >
        <View
          style={{
            backgroundColor: colors.headercolor,
            marginTop: 31,
            height:55,
            flexDirection: "row",
            justifyContent: "space-between",
            //position:"absolute"
          //  backgroundColor:"red"
            
          }}
        >
           <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Entypo
              style={{ marginLeft: 5 }}
              name="youtube"
              size={41}
              color="red"
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                paddingTop: 9,
                color: iconcolorchange,
              }}
            >
              ʏᴏᴜᴛᴜʙᴇ
            </Text>


          <View style={{ flexDirection: "row" ,marginLeft:85}}>
            <TouchableOpacity
              style={{ paddingHorizontal: 8 }}
              onPress={() => {
                Camergallery();
              }}
            >
              <Icon name="videocam" size={35} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingHorizontal: 8 }}
              color={iconcolorchange}
              onPress={() => navigation.navigate("Searchs")}
            >
              <Icon name="search" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingHorizontal: 8 }}
              color={iconcolorchange}
              onPress={() => navigation.navigate("Login")}
              >
              <Icon name="account-circle" size={35} color="black" />
            </TouchableOpacity>
          </View>
         
        </View>
              </View>

      <View>

     
          </View>
  
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
          onScroll={(e) => {
            scrolly.setValue(e.nativeEvent.contentOffset.y);
          }}
          />
          </Animated.View>
    </>
  );
};
export default Headeryoutube;
