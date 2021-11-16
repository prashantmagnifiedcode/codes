
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux';
import Mini from './minicard';
import { useNavigation, useTheme } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Searchvideo = () => {
  const getdata = useSelector((state) => { return state.watch.list })
  console.log(getdata.video)
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [cancel, setcancel] = useState(false)
  const { colors } = useTheme()
  const textcolors = colors.iconColor
  const iconcolorchange = colors.iconColor
  const navigation = useNavigation()
  
  useEffect(() => {
       
    if (getdata) {

      setFilteredDataSource(getdata);
      setMasterDataSource(getdata);
      
    } else {

    }
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        console.log(item);
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (

      <Mini
        videoId={item.video}
        title={item.title}
        channel={item.channelTitle} />



    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={{ flexDirection: "row", backgroundColor: "rgba(0,0,0,0.5)" }} >
          <TouchableOpacity style={{ marginTop: hp(0.5) }} color={iconcolorchange}      >
            <Icon name='search' size={25} color="black" />

          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{

              width: wp(70), borderRadius: 7, height: hp(5)
            }}


            >
              <TextInput
                label="search"
                style={{ color: textcolors, height: "100%", width: "100%" }}
                onFocus={() => setcancel(!cancel)}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"


              />



            </View>
          </TouchableOpacity>
          {cancel ? null : <View style={{ backgroundColor: "rgba(0,0,0,0.8)", width: wp(23), alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "white" }} >Cancel</Text>
          </View>
          }
        </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default Searchvideo;
