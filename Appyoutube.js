import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {DefaultTheme,DarkTheme,NavigationContainer, useTheme,}from "@react-navigation/native";
import Headeryoutube from "./youtube/header";
import Header from "./youtube/headernav";
import themereducer from "./youtube/themeredux";
import Login from "./youtube/login";
import Icon from "react-native-vector-icons/MaterialIcons";
import Library from "./youtube/library";
import Notification from "./youtube/notification";
import Searchs from "./youtube/search";
import Mini from "./youtube/minicard";
import Subscribes from "./youtube/subscribe";
import Explore from "./youtube/explore";
import Videoplayer from "./youtube/videoplay";
import reducer from "./youtube/reduxx";
import { Provider } from "react-redux";
import { Store } from "react-redux";
import { useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import increments from "./youtube/reduxincrement";
import Watch from "./youtube/reduxwatched";
import Exportscribe from "./youtube/reduxscribe";
import Historyvideo from "./youtube/historyvideo";
import Download from "./youtube/download";
import Dashboard from "./youtube/youtubevideo";
import Setting from "./youtube/setting";
import watchlater from "./youtube/watchlater";
import Yourstud from "./youtube/yourstudio";
import Studiosetting from './youtube/yourstudiosetting'
import General from './youtube/general'
import Updataname from './youtube/reduxforYourstudio'
const combineallreducer = combineReducers({
  Update:Updataname,
  carddata: reducer,
  themes: themereducer,
  increment: increments,
  watch: Watch,
  Exportscribe: Exportscribe,
});
//console.log(increments)
const stores = createStore(combineallreducer);
const stack = createStackNavigator();
const tab = createBottomTabNavigator();

const customdarktheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headercolor: "#404040",
    iconColor: "white",
    tabicon: "white",
  },
};

const customDefaulttheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headercolor: "white",
    iconColor: "dark",
    tabicon: "red",
  },
};

const roothomes = () => {
  const { colors } = useTheme();
  const tabiconcolor = colors.tabicon;
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "explore";
          } else if (route.name === "subscribe") {
            iconName = "subscriptions";
          } else if (route.name === "Notification") {
            iconName = "notifications";
          } else if (route.name == "Library") {
            iconName = "my-library-add";
          }

          return <Icon name={iconName} size={30} color={tabiconcolor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <tab.Screen name="home" component={Headeryoutube} />

      <tab.Screen name="Explore" component={Explore} />
      <tab.Screen name="subscribe" component={Subscribes} />
      <tab.Screen name="Notification" component={Notification} />
      <tab.Screen name="Library" component={Library} />
    </tab.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={stores}>
      <Navigations />
    </Provider>
  );
}

export function Navigations() {
  console.log("nav");
  let currentheme = useSelector((state) => {
    return state.themes;
  });
  console.log(currentheme);
  return (
    <NavigationContainer
      theme={currentheme ? customdarktheme : customDefaulttheme}
    >
      <stack.Navigator headerMode="none">
        <stack.Screen name="roothomes" component={roothomes} />
        <stack.Screen name="Searchs" component={Searchs} />
        <stack.Screen name="Mini" component={Mini} />
        <stack.Screen name="Videoplayer" component={Videoplayer} />
        <stack.Screen name="Library" component={Library} />
        <stack.Screen name="Notification" component={Notification} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Historyvideo" component={Historyvideo} />
        <stack.Screen name="Download" component={Download} />
        <stack.Screen name="Dashboard" component={Dashboard} />
        <stack.Screen name="Setting" component={Setting} />
        <stack.Screen name="watchlater" component={watchlater} />
        <stack.Screen name="Yourstud" component={Yourstud} />
        <stack.Screen name="Studiosetting" component={Studiosetting} />
        <stack.Screen name="General" component={General} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
