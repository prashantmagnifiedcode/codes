import React from 'react'
import { Text, View, StyleSheet, FlatList,ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import Header from './headernav';
import Card from './cards'
import Minilibrary from './libraryvideo';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
const Library = () => {

    const data = useSelector((state) => { return state.watch.list })
    const navigation=useNavigation()
    
    const { colors } = useTheme()
    const textcolors = colors.iconColor
    //const val = data.map((e) => e.id)
   // console.log("listsubscribe")
    //console.log(val)



    return (
        <>
        
            <Header />

            <View style={{ height: "23%", width: "100%" }} >
               <View>
                <FlatList

                    horizontal
                   

                    data={data}
                    renderItem={({ item }) => {
                        //console.log("render")
                        // console.log(item)
                        return <Minilibrary
                            videoId={item.video}
                            title={item.title}

                            style={{  height: "100%", width: "100%"  }}
                        />
                    }}
                    keyExtractor={item => item.id}

                />
             
                </View>





            </View>

            <Text style={{
                borderBottomWidth: 1, borderColor: "white", elevation: 1, marginTop: "1%"
            }}></Text>
            <ScrollView>
            <View style={style.same}>
                <MaterialIcons name="history" size={33} color={textcolors} />

                <Text style={{ marginLeft: "1.5%", marginTop: "1.2%", fontSize: 19 ,color:textcolors}} onPress={()=>navigation.navigate('Historyvideo')}>History</Text>
                
                </View>

            <View style={style.same}>
                <MaterialIcons name="file-download" size={24} color={textcolors} />
                <Text style={{ marginLeft: "1.5%", marginTop: "0.2%", fontSize: 19 ,color:textcolors}} onPress={()=>navigation.navigate('Download')}>Download</Text></View>
            <View style={style.same}>
                <Entypo name="folder-video" size={24} color={textcolors} />
                <Text style={{marginLeft: "1.5%", marginTop: "0.2%", fontSize: 19 ,color:textcolors}} onPress={()=>navigation.navigate('Dashboard')}>Youtube video</Text></View>
            <View style={style.same}>
                <MaterialCommunityIcons name="movie" size={24} color={textcolors} />
                <Text style={{ marginLeft: "1.5%", marginTop: "0.2%", fontSize: 19 ,color:textcolors}}>Your movies</Text></View>
            <View style={style.same}>
                <MaterialIcons name="timelapse" size={24} color={textcolors} />
                <Text style={{ marginLeft: "1.5%", marginTop: "0.2%", fontSize: 19 ,color:textcolors}}
                onPress={()=>navigation.navigate('watchlater')}
                >Watch later</Text></View>




















            <Text style={{ borderBottomWidth: 1, borderColor: "white", elevation: 1 }}></Text>


            <View>
                
            <View style={style.same}>
            <AntDesign name="like2" size={24} color={textcolors} />
                <Text style={{marginLeft: "2.5%",marginTop: "0.5%", fontSize: 19 ,color:textcolors}}>Like Video</Text>

            </View>
                <View style={style.same}>
                    <MaterialIcons name="help" size={33} color={textcolors} />
                    <Text style={{ marginLeft: "1.7%", fontSize: 19,color:textcolors,smarginTop: "0.8%" }}>Help & Feedback</Text></View>

            </View>
            </ScrollView>










        </>
    )
}


const style = StyleSheet.create({

    same: { flexDirection: "row", margin: "2%" }


}

)






export default Library;