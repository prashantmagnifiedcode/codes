import React, { useState, createContext, useReducer,useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Historynav from "./historynav";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-gesture-handler";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useSelector, useDispatch } from "react-redux";
const Studiosetting = ({children}) => {
  const dispatch= useDispatch()

  const [changegranted, setchangegranted] = useState({
    name: true,
    name1: true,
  });
  
  const [values, setvalues] = useState(namedata);
  
  const [changetoggle, setchangetoggle] = useState({
    toggles1: "toggle-off",
    toggles2: "toggle-off",
  });
  
  const namedata= useSelector((state)=>{ return state.Update})


  return (
    <>
        <Historynav name="Channel Settings" />
        <View style={{ height: "67%", with: "100%" }}>
          <View style={{ height: "20%", marginBottom: 0 }}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../car.jpg")}
            />
          </View>

          <View style={{ height: hp(10), padding: hp(2) }}>
            <Text style={{ fontSize: hp(2) }}>Name</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {changegranted.name ? (
                <Text>{namedata}</Text>
              ) : (
                <TextInput
                  style={{
                    fontSize: hp(2),
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                  value={values}
                  onChangeText={(text) => setvalues(text)}
                  placeholder="acr"
                  onSubmitEditing={() => {
                    setchangegranted({ ...changegranted, name: true });
                    dispatch({type:"changename",payload:values})
                  }}
                  blurOnSubmit={false}
                />
              )}

              {changegranted.name ? (
                <Icon
                  name="edit"
                  size={hp(3)}
                  color="black"
                  onPress={() => {
                    setchangegranted({ ...changegranted, name: false });
                  }}
                />
              ) : null}
            </View>
          </View>

          <View style={{ padding: hp(2) }}>
            <Text style={{ fontSize: hp(2) }}>Description</Text>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18 }}>Global developer</Text>
                {changegranted.name1 ? (
                  <Icon
                    name="edit"
                    size={hp(3)}
                    color="black"
                    onPress={() => {
                      setchangegranted({ ...changegranted, name1: false });
                    }}
                  />
                ) : null}
              </View>
              {changegranted.name1 ? null : (
                <View
                  style={{
                    height: 150,
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,7)",

                    position: "absolute",
                    padding: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>Description</Text>
                  <View>
                    <View>
                      <TextInput
                        placeholder="Description"
                        outline={false}
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: "white",
                          color: "white",
                        }}
                      ></TextInput>
                    </View>

                    <Text style={{ color: "white", marginLeft: "80%" }}>
                      10/100
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity>
                      <Text style={{ color: "white" }}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}>oK</Text>
                  </View>
                </View>
              )}
              <View>
                {changegranted.name1 ? (
                  <TextInput
                    title="text"
                    style={{ borderBottomWidth: 1 }}
                  ></TextInput>
                ) : null}
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 15 }}>Privacy</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 17 }}>keep all my subscription</Text>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 17 }}>
              keep all my saved playlist private
            </Text>

            <Icon
              name={changetoggle.toggles2}
              size={hp(7)}
              color={
                changetoggle.toggles2 == "toggle-on"
                  ? "green"
                  : "rgba(0,0,0,0.5)"
              }
              onPress={() =>
                setchangetoggle({
                  ...changetoggle,
                  toggles2:
                    changetoggle.toggles2 == "toggle-off"
                      ? "toggle-on"
                      : "toggle-off",
                })
              }
            />
          </View>
          <Text></Text>
        </View>
         
      
    </>
  );
};
export default Studiosetting;
