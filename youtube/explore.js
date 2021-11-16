import React from 'react'
import { Text, View, FlatList, ScrollView, TouchableOpacity, Button, Image } from 'react-native'
import { DataTable } from 'react-native-paper'
import Header from './headernav'
import { useSelector, useDispatch } from 'react-redux'
import Mini from './minicard'
import { useTheme } from '@react-navigation/native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

const Linkcard = (prop) => {

  const dispatch = useDispatch();
  const [entersearch, setentersearch] = useState(" ")
  
  
  const fetchapi = () => {
    
    console.log("fetch")
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${entersearch}&type=video&key=AIzaSyB3y_ilQenBcu0nlOn_XJ8ra2gYcCTLns8`).then(res => res.json())
      .then(data => {
        dispatch({ type: "add", payload: data.items })



      })
  }

  return (
    <>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: 'red',
            height: 40,
            width: 160,
            borderRadius: 20,
            margin: 1,



          }}

        >
          <Image style={{
            position: 'absolute',
            overflow: "hidden",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: 0.7
          }} source={{ uri: prop.img }}
          >
          </Image>
          <Text style={{
            textAlign: "center",
            fontSize: 18,
            marginTop: 10,
            color: "white",
          }}
            onPress={() => { setentersearch(prop.name), fetchapi(), console.log("h") }}
          >

            {prop.name}

          </Text>
        </View>
      </TouchableOpacity>
    </>)
}
const Explore = () => {
  const data = useSelector((state) =>  {return  state.carddata} )
  console.log(data)
  const { colors } = useTheme()
  const navigation=useNavigation()
  const textcolors = colors.iconColor
  return (
    <>
      <Header />
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: 4
      }}>

        <Linkcard name="Gaming" img="https://www.vgr.com/wp-content/uploads/2018/12/Fortnite-Game-Awards-2018.jpg" />
        <Linkcard name="Treading" img="https://images.freecreatives.com/wp-content/uploads/2015/04/Video-Game-Desktop-Backgrounds-2.jpg" />
        <Linkcard name="music" img="http://allhdwallpapers.com/wp-content/uploads/2015/05/Artistic-51.jpg" />
        <Linkcard name="movie" img="https://th.bing.com/th/id/OIP.aFxEqBDrgHYa0gGrxZ0csQHaE8?pid=ImgDet&w=1920&h=1280&rs=1" />
        <Linkcard name="enteraiment" img="https://cef540709efad2c95eeb-7c60bbaa3d60143a0fce5342fc547001.ssl.cf1.rackcdn.com/affiliate/58322.jpg" />
        <Linkcard name="news" img="https://ak3.picdn.net/shutterstock/videos/7816963/thumb/3.jpg" />
        
        

      </View>
      <Text style={{
        margin: 8,
        fontSize: 22,
        borderBottomWidth: 1,
        color: textcolors
      }}> Treading video

      </Text>

      <ScrollView>

        <View>
          

            <FlatList
              data={data}
              renderItem={({ item }) => {
                return(
                  <>
          <TouchableOpacity
          onPress={() => navigation.navigate('Videoplayer', { videoId:item.id.videoId, title:item.snippet.title, channel:item.snippet.channelTitle }) }>
                 <Mini
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                  channel={item.snippet.channelTitle} />
          </TouchableOpacity>
          </>
          )
              }}
              keyExtractor={item => item.id.videoId}

            />
        </View>


      </ScrollView>

    </>
  )
}
export default Explore