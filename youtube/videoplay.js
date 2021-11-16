import React from 'react'
import { Text, View, FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview';
import { useTheme } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Card from './cards'
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import VideoOptions from './videoption'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Linking } from 'react-native'
const Videoplayer = ({ route }) => {
    const { videoId, title, channel } = route.params
    //console.log(videoId)
    //console.log(channel)



    
    const dispatch = useDispatch();

    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    console.log(width);
    console.log(height);

    const { colors } = useTheme()
    const textcolors = colors.iconColor
    const data = useSelector((state) => { return state.carddata })
    const increments = useSelector((state) => { return state.increment })

    //  console.log(increments)

    return (
        <>
            

            <View style={{ flex: 0, height: "100%", width: "100%" ,flexDirection: "column",marginTop:30}}>
                <View style={{ height: "60%", width: "100%" }}>
                    <View
                        style={{
                            width: "100%",
                            height: "50%",



                        }}
                    >
                        <WebView
                            source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                            onLoad={() => dispatch({ type: "addwatch", payload: { videoId, title, title } })}
                        />

                    </View>
                    <View style={{ backgroundColor: colors.headercolor, height: "13%", alignContent: "center", justifyContent: "center",marginBottom: 1 }}>

                        <Text style={{ color: textcolors }}>{title}</Text>
                    </View>


                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around", backgroundColor: colors.headercolor,
                        height: "13%", padding: 5, marginBottom: 1
                    }}>


                        <View>
                            <AntDesign name="like2" size={24} color={textcolors} onPress={() => dispatch({ type: "i" })} />
                            <Text> {increments.state1}</Text>
                        </View>

                        <View>


                            <AntDesign name="dislike2" size={24} color={textcolors} onPress={() => { dispatch({ type: "d" }) }} />
                            <Text> {increments.state2}</Text>
                        </View>
                        <AntDesign name="sharealt" size={24} color={textcolors} onPress={()=>Linking.openURL(`whatsapp://send?text=${`https://www.youtube.com/embed/${videoId} 
                        and ${title} and ${channel}`}`)} />
                        <AntDesign name="download" size={24} color={textcolors} />
                        <AntDesign name="save" size={24} color={textcolors} />
                    </View>


                    <View style={{ height:"15%", flexDirection: "row", justifyContent: "space-around" }}>

                        <View style={{ marginLeft: -13, marginTop: 5, flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="account-circle" size={37} color={textcolors}
                            />
                            <View style={{ marginLeft: 5, marginTop: 7 }}>
                                <Text style={{ color: textcolors, width: 110 }}>{channel}</Text>
                                </View>
                        </View>

                        <View style={{ flexDirection: "row",  marginTop: 10, width: width * 0.4166, justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={() => dispatch({ type: "channelsuscribe", payload: { videoId, channel, title } })}>

                                <View style={{ borderRadius: 10 }}>
                                    <Text style={{ fontSize: 20, color: textcolors }} >subscribe</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <Feather name="bell" size={32} color={textcolors} />

                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


                

                <View style={{ backgroundColor: colors.headercolor ,height:"50%",marginTop: -40}}>
                    <View style={{ height:"100%" }}>

                        <ScrollView>

                            <FlatList
                                data={data}
                                renderItem={({ item }) => {
                                    return <Card


                                        videoId={item.id.videoId}
                                        title={item.snippet.title}
                                        channel={item.snippet.channelTitle} />
                                }}
                                keyExtractor={item => item.id.videoId}

                            />

                        </ScrollView>
                    </View>
                </View>
            </View>
        </>
    )
}
export default Videoplayer