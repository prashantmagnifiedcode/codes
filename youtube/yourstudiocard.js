import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,Dimensions,TextInput } from 'react-native'
const Descriptions=(prop)=>{
    console.log(prop)
    
    return(
        <>
        <View
                  style={{
                    height: 150,
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,7)",
                    
                    position:"absolute",
                    padding: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>Description</Text>
                  <View>
                    <View >

                    <TextInput
                placeholder="Description"
                outline={false}
                style={{ borderBottomWidth: 1,borderBottomColor:"white",color: "white" }}
              ></TextInput>
                      </View>
                      
                    <Text style={{ color: "white",marginLeft:"80%"}}>10/100</Text>

                      
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <TouchableOpacity >

                    <Text style={{ color: "white" }} onPress={()=>prop.setchangegranted.name1(true)} >Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}>oK</Text>
                  </View>
                </View>
        </>
    )
}
export default Descriptions;