import React from 'react'
import { View, Text, Animated, PanResponder } from 'react-native'
import Header from './headernav'
import SwipButton from './swip'
import SelectDropdown from 'react-native-select-dropdown'
const Settingcomponent = () => {
    const position = new Animated.ValueXY({ x: 0, y: 0 })
    console.log(position.x)


    const data = ["Egypt", "Canada", "Australia", "Ireland"]



    return (
        <>
            <Header />
            <View style={{ backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>

                <View style={{ backgroundColor: "white", width: 355, height: 672 }}>
                    <View style={{ width: "100%", height: 50, flexDirection: "row", marginBottom: 2 }}>
                        <View style={{ width: "40%", height: "100%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 15 }}>----theme----------</Text>

                        </View>

                        <View style={{ width: "60%", height: "100%", }}>


                            <SwipButton />

                        </View>
                    </View>
                    <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
                        <View style={{
                            width: "40%",
                            height: "100%", justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 15 }}>---Font yf-----</Text>

                        </View>
  
                        <View style={{ width: "60%", height: "100%" }}>


                            <SelectDropdown
                            
                           
                                defaultButton-Text='Font style'
                                data={data}
                               buttonStyle={{fontFamily:"PaletteMosaic-Regular", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 50, width: "98%", height: "86%" }}
                               // rowTextStyle={{backgroundColor: "blue", borderRadius: 50}}
                               // rowStyle={{backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50}}
                                statusBarTranslucent={true}
                                buttonTextAfterSelection={(item, index) => {
                                    return item
                                }}
                                dropdownStyle={{backgroundColor: "red",borderRadius: 5}}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />

                        </View>
                    </View>

                </View>
            </View>

        </>
    )
}
export default Settingcomponent;