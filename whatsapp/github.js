
import React from 'react'
import {View,Text} from 'react-native'
import WebView from 'react-native-webview';
import Header from './header';
export default function github() {
  
  const runFirst = `
  
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'green';
  
  
  true;
`;


  return (
    <>
    <Header data={"name",45}/>
   <WebView 
   style={{marginTop:-64}}
   injectedJavaScript={runFirst}
   source={{uri:"https://github.com/prashantmagnifiedcode"}}
   >

   </WebView>
     </>       
  );
}

