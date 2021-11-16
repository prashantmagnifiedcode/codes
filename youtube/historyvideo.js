import React, { useState } from 'react'
import { View, TextInput, FlatList, ActivityIndicator, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux';
import Mini from './minicard';
import { useNavigation, useTheme } from '@react-navigation/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Historynav from './historynav'
import Searchvideo from './searchingvideo'
const Historyvideo = () => {
    const getdata = useSelector((state) => {return state.watch.list })
    console.log(getdata);
    const [cancel, setcancel] = useState(true)
    const { colors } = useTheme()
    const textcolors = colors.iconColor
    const iconcolorchange = colors.iconColor
    const [entersearch, setentersearch] = useState(" ")
    const navigation = useNavigation()
    return (
        <>

            <Historynav name="History                 " />
           
            <Searchvideo />

        </>
    )
}
export default Historyvideo