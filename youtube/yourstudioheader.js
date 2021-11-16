import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/core";
import Imagepick from "./Imagepickeryoutube";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import ProfileScreen from "./yourstudiohome";
import Studiovideo from "./yourstduiovideo";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Video: {
      screen: Studiovideo,
      navigationOptions: {
        tabBarLabel: "Video",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },

    Playlist: {
      screen: Studiovideo,
      navigationOptions: {
        tabBarLabel: "Playlist",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },

    channel: {
      screen: Studiovideo,
      navigationOptions: {
        tabBarLabel: "channels",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },

    About: {
      screen: Studiovideo,
      navigationOptions: {
        tabBarLabel: "About",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },

  {
    tabBarOptions: {
      showIcon: false,
      horizontal: true,

      style: {
        backgroundColor: "rgba(0,0,0,0.8)",
        
      },
    },
  }
);
const Navigator = createAppContainer(TabNavigator);
const Headerstudio = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const iconcolorchange = colors.iconColor;

  return (
    <>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          backgroundColor: colors.headercolor,
          marginTop: "10%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: hp(8),
            paddingTop: "5%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Ionicons name="md-arrow-back" size={24} color="black" />
            <Text style={{ fontSize: 20, marginLeft: 10 }}>Prashant</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ paddingHorizontal: 8 }}
              onPress={() => Imagepick()}
            >
              <Icon name="videocam" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingHorizontal: 8 }}
              onPress={() => navigation.navigate("Searchs")}
            >
              <Icon name="search" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 8 }}>
              <Icon name="account-circle" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={{height:"85%"}}>
          <Navigator>
            <ProfileScreen />
          </Navigator>
        </View>
      </View>
    </>
  );
};
export default Headerstudio;
