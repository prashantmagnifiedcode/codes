import React from 'react'
import {Text,View,Image,ScrollView,FlatList} from 'react-native'
import Header from './headernav'
import Subscribedlist from './subscribevideo'
import { useSelector } from 'react-redux'

const Subscribes=()=>{
    const data= useSelector((state)=>state.Exportscribe.listsubscribe)
    console.log("subscribe")
    data.map((e)=>console.log(e.image))


    return(
        <>
        <Header/>
        <View >
        <View style={{flexDirection:"row",marginTop:10}}>
        {
            data.map((e)=>{
                return(

        <View style={{flexDirection:"column",marginRight: 4}}>
        <Image
                style={{ width: 50, height: 50, borderRadius: 20,marginLeft:10 }}
                source={{uri: `https://i.ytimg.com/vi/${e.image}/hqdefault.jpg`}} 
                    key={e.id}
                />
                <Text>{e.name}</Text>
                </View>
                )
            })
        }

        </View>
        <Text style={{width:"100%",borderBottomWidth: 0.3}}></Text>

            <Text>Video and posts</Text>
        
        </View>
        <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <Subscribedlist
              videoId={item.image}
              title={item.detail}
              channel={item.name} 
              
               />
          }}
          keyExtractor={item => item.id} 

         />

      </ScrollView>
        </>
    )
}
export default Subscribes;