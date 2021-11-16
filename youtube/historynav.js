import React  from  'react'
import { View, Text, Image, TouchableOpacity,Dimensions,FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import VideoOptions from './videoption';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Historynav =(prop)=>{
    const { colors } = useTheme()
    const textcolors = colors.iconColor
    const iconcolorchange = colors.iconColor
    const navigation = useNavigation()

    return(
        <>

        
<View style={{
                flexDirection: "row", marginTop: hp(5),
                elevation: 1, height: hp(6), backgroundColor: colors.headercolor,elevation:2
            }}>
                <View style={{ marginLeft: wp(2), paddingTop: hp(1) }}>
                    <Ionicons name="md-arrow-back" size={24} color="black" onPress={() => navigation.navigate('/')} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, marginLeft: wp(2), marginTop: hp(1) }}> {prop.name}  </Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: wp(27) }}>


                    <TouchableOpacity style={{ marginTop: hp(0.5) }} color={iconcolorchange} onPress={() => navigation.navigate('Searchs')}  >
                        <Icon name='search' size={35} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <VideoOptions />
                    </TouchableOpacity>



                </View>

            </View>
        
        
        
         
        

        </>
    )
}
export default Historynav 