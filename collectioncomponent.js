import React from 'react';
import { View, Text, Image} from 'react-native';


const Collectioncomponent = (prop) => {
    const { names, email, imgs } = prop.Name
   
    return (
        <>
            <View style={{ flexDirection: "row", marginLeft: 5, }} >
                <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, marginRight: 10 }} source={{ uri: `${imgs}` }} />
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text>{names}</Text>
                    <Text>{email}</Text>

                </View>
            </View>
        </>
    )
}
export default Collectioncomponent;
