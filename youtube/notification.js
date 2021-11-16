import React from 'react'
import { Text, View, ScrollView ,FlatList,TouchableOpacity} from 'react-native'
import Header from './headernav'
import NotificationMini from './notificationvideo'
import { useSelector } from 'react-redux'

const Notification = () => {

    const data = useSelector(state => { return state.carddata })
    
    return (
        <>  
        <View>

            <Header />
            <FlatList
                            data={data}
                            renderItem={({ item }) => {
                                return (

                            <NotificationMini
                                    videoId={item.id.videoId}
                                    title={item.snippet.title}
                                    channel={item.snippet.channelTitle} />)
                            
                            }}
                            keyExtractor={item => item.id.videoId}

                        />
        </View>
          
        </>
            )
}
export default Notification;