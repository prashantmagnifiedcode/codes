import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import Mini from "./minicard";
import { useNavigation, useTheme } from "@react-navigation/native";

const Searchs = () => {
  const dispatch = useDispatch();
  const [entersearch, setentersearch] = useState(" ");
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);
  const getdata = useSelector((state) => {
    return state.carddata;
  });
  console.log(getdata);
  const { colors } = useTheme();
  const textcolors = colors.iconColor;

  const fetchapi = () => {
    setloading(true);
    console.log("fetch");
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${entersearch}&type=video&key=AIzaSyB3y_ilQenBcu0nlOn_XJ8ra2gYcCTLns8`
    )
      .then((res) => res.json())
      .then((data) => {
        setloading(false),
          console.log(data.items),
          dispatch({ type: "add", payload: data.items });
      });
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          elevation: 1,
          height: 48,
          backgroundColor: colors.headercolor,
        }}
      >
        <View style={{ marginLeft: 3, paddingTop: 10 }}>
          <Ionicons
            name="md-arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.navigate("home")}
          />
        </View>
        <View style={{ margin: 4 }}>
          <View
            style={{
              backgroundColor: colors.headercolor,
              padding: 7,
              width: 300,
              borderRadius: 7,
              height: 40,
              elevation: 2,
            }}
          >
            <TextInput
              label="search"
              style={{ marginTop: 3, height: 20, color: textcolors }}
              value={entersearch}
              onChangeText={(text) => setentersearch(text)}
          
          onSubmitEditing={() => {
            fetchapi()
          }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Ionicons
            name="md-send"
            size={24}
            color="black"
            onPress={() => fetchapi()}
          />
        </View>
      </View>

      <View>
        {loading ? (
          <ActivityIndicator size="large" color="blue" size={32} />
        ) : null}
        <FlatList
          data={getdata}
          renderItem={({ item }) => {
              return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Videoplayer", {
                  videoId: getdata.videoId,
                  title: getdata.title,
                  channel: getdata.channel,
                })
              }
            >
              <Mini
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            </TouchableOpacity>)
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </View>
    </>
  );
};
export default Searchs;
