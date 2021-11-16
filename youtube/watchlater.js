import React from "react";
import image from "../assets/adaptive-icon.png";

import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import SwipeButton from "rn-swipe-button";

const watchlater = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "50%", backgroundColor: "yellow" }}>
        <SwipeButton
          disabled={false}
          height={47}
          width={300}
          swipeSuccessThreshold={50}
          onSwipeSuccess={() => {
            alert("Submitted Successfully!");
          }}
          //shouldResetAfterSuccess={true}
          titleMaxFontScale={20}
          railBackgroundColor="red"
          railBorderColor="yellow"
          thumbIconBackgroundColor="lightblue"
          thumbIconBorderColor="white"
          railFillBackgroundColor="yellow"
          railBorderColor="white"
          screenReaderEnabled={(e) => console.log(e)}
          thumbIconImageSource={image}
          onSwipeFail={() => console.log("Incomplete swipe!")}
          onSwipeStart={() => console.log("Swipe started!")}
        />
      </View>
    </SafeAreaView>
  );
};
export default watchlater;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    height: 500,
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
