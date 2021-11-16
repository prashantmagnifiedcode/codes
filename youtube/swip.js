// Make Swipe Button in React Native for Android and iOS
// https://aboutreact.com/make-swipe-button-in-react-native-for-android-and-ios/

// import React in our code
import React from 'react';
import image from '../assets/adaptive-icon.png'
// import all the components we are going to use

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import SwipeButton from 'rn-swipe-button';
import { useSelector,useDispatch } from 'react-redux';

const SwipButton = () => {
 
  const dispatchtheme=useDispatch()
  return (
    

    <SafeAreaView style={{fontSize:1 }}>
      
        <SwipeButton
        onPress={()=>console.log("done")}
          disabled={false}
          height={35}
          width={200}
          swipeSuccessThreshold={40}
          onSwipeStart={()=>
            dispatchtheme({type:"changetheme",payload:false})
          }
          title=""
          onSwipeSuccess={() => {
            dispatchtheme({type:"changetheme",payload:true})
  }}
  //shouldResetAfterSuccess={true}
  titleMaxFontScale={20}
          railBackgroundColor='rgba(0,0,0,0.5)'
          railBorderColor="#404040"
          thumbIconBackgroundColor="white"
          thumbIconBorderColor="white"
          railFillBackgroundColor="rgba(0,0,0,.4)"
          railFillBorderColor="white"
          
          

        />

        
        
      
    
    </SafeAreaView>
    
  );
};


    export default SwipButton;