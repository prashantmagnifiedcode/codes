import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  FlatList
} from 'react-native';

import Car from './part/design'
import Contentlik from './part/buggatilink';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const App = () => {
   const datas =[
     { "id":1,
   "componentd":<Car/>}
    ]
  return (
    
    


      <FlatList
      
        data={datas}
        keyExtractor={item=>item.id}
        renderItem={()=>{
          return <Car/>
        }}

      />
      
   
      
    

    
   

  );


}

export default App; 