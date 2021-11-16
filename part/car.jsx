

import React, { useState } from 'react';
import { Text, View, Button, Image, SafeAreaView, ScrollView, ImageComponent } from 'react-native';

import Contentlik from './buggatilink';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../reducer/action';

const car=(Contentlik)=>{




    return (
        <>
        
        <View style={{ backgroundColor: "red", position: "relative" }} key={e.id}>
                <View>
                  <Image source={{ uri: `${loaddata[0].imglik[mystate]}` }}
                    style={{

                      width: " 100%",
                      height: 200,

                    }}
                  />
                  <View style={{ position: "absolute", color: "white", width: "10%", justifyContent: 'center', marginLeft: "90%", backgroundColor: "white" }}>

                    <View>

                      <View style={{ margin: 1, backgroundColor: "red" }}>
                        <Button title=".." style={{ backgroundColor: "red" }} 
                        options={
                          
                        }
                        onPress={() => {
                          dispatch(increment()),
                       setimgchange(1)
                         }} />
                      </View>

                    </View>

                  </View>

                </View>

                <SafeAreaView>

                  <Text>DIVINE COMFORT</Text>

                  <Text>
                  {e.content}

                  </Text>
                </SafeAreaView>


              </View>
        </>

    )
}

export default car;