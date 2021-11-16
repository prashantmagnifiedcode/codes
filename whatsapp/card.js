import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { auth, db } from "../firebase";
import { GiftedChat, Bubble,InputToolbar } from "react-native-gifted-chat";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "./header";
import { Animated, PanResponder } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { Chatdata } from "./reducer.js/action";
import { useSelector, useDispatch } from "react-redux";

const Cards = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const { name, number, user } = route.params;
  const final = useSelector((state) => state.Home.chatdata);
  const finalcredential = useSelector((state) => state.Home.chatlogin);
const senderphone= finalcredential[1]
  useLayoutEffect(() => {
    const datas = db
      .collection("chats")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => {
            // console.log(name,number)
            const receivername = doc.data().sendername;
            const receiverphone = doc.data().sendbyphone;
            const sendtoname = doc.data().sendto;
            const sendtophone = doc.data().sentophone;
            if (
              receiverphone === finalcredential[1] &&
              number === sendtophone
            ) {
              console.log("i amd");
              return {
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
              };
            } else if (
              number === receiverphone &&
              sendtophone === finalcredential[1]
            ) {
              console.log("receive");
              return {
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
              };
            } else {
              return {
                _id: doc.data()._id,
              };
            }
          })
        )
      );

    return datas;
  }, []);
  const onSend = useCallback((messages = []) => {
    const msg = messages[0];
    // console.log(user)
    const mymsg = {
      ...msg,
      sendto: name,
      sentophone: number,
      sendbyphone: senderphone,
      sendername: name,
    };

    /// console.log(messages)
    setMessages((previousMessages) => {
      GiftedChat.append(previousMessages, mymsg);
    });
    db.collection("chats").add(mymsg);
    console.log(messages);
  }, []);
  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          
          borderRadius:10,
           backgroundColor:"#3e3e3e",
          padding: 8,
          elevation:20,
          color:"green"
          
        }}
      />
    );
  };
 
  return (
    <>
      <Header data={route.params} />
      <View style={styles.containers}>

        <KeyboardAvoidingView behavior="position">
      <View style={styles.chatbox}>

        <GiftedChat
          messages={messages}
        
          onSend={(messages) => onSend(messages)}
          user={{
            _id: auth?.currentUser?.email,
          }}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: {
                    borderRadius: 10,
                    padding: 3,
                    color: "#207512",
                    borderColor: "orange",
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 4,
                    
                    backgroundColor:"#3e3e3e",
                    marginBottom:15
                  },
                  left: {
                    borderRadius: 10,
                    padding: 7,

                    marginLeft: -24,
                    color: "#207512",
                    backgroundColor: "#3e3e3e",
                    borderColor: "#067505",
                    borderTopWidth: 1,
                    margin: 10,
                    borderLeftWidth: 1,

                    borderRightWidth: 3,
                    marginBottom: 5,
                    borderRadius: 10,
                    padding: 7,
                    margin: 7,
                    color: "#207512",
                    
                    borderColor: "#3e3e3e",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 7,
                  },
                }}
                />
                
                
                );
              }}
              renderInputToolbar={props => customtInputToolbar(props)}
              
              />
      </View>
              </KeyboardAvoidingView>
</View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "10%",
    flexDirection: "column",
  },
  containers:{
    backgroundColor: "#3e3e3e",
    height:hp(100),
    width:wd(100)
  },
  chatbox: {
    //backgroundColor:"#3e3e3e",

    height:"91.3%"
  },
  inputbox: {
    height: "10%",
    borderRadius: 5,
  },

  inputtext: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "8%",

    backgroundColor: "#3e3e3e",
    backgroundColor: "black",
    color: "green",

    justifyContent: "space-evenly",
  },
  inputs: {
    width: "65%",
    height: "97%",
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 10,
    color: "green",
    borderColor: "#5DFF17",
    borderWidth: 0.4,
  },
  send: {
    width: "30%",
    height: "97%",
    borderRadius: 40,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004D00",
    borderWidth: 1.5,
  },
});
export default Cards;
