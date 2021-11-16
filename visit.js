import React
, { useCallback } from "react";
import { Alert , Butto , Linking, StyleSheet , Vie , Text , SafeAreaView} from "react-native";
const supportedURL = "https://www.educba.com/";
const unsupportedURL = "sms: +123456789";

const Separator = () => (
    <View style={styles.separator} />
);
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    For Getting More Information about Us:
                </Text>
                <OpenURLButton url={supportedURL}>Click to Visit our Website</OpenURLButton>
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    For Getting Assistance over Chat:
                </Text>
                <OpenURLButton url={unsupportedURL}>Click to Send us SMS</OpenURLButton>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
        , justifyContent: "center"
        , alignItems: "center"
        , backgroundColor: "#faed75"
    },
    title: {
        textAlign: 'center',
        marginVertical: 10,
    },
    separator: {
        marginVertical: 200,
        borderBottomColor: '#d94e9a',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default App;











{list.map((e) => {

    return (
<Card style={{ margin: 1, height: "8%" }} onPress={() => { navigation.navigate('Header',{key:{...e}}) }} key={e._id} >
            <Collectioncomponent Name={e} />

        </Card>
    )

})}




<View style={{ backgroundColor: "#ffd42c", height: "100%" }}>
         
              


{list.map((e) => {

return (
<Card style={{ margin: 1, height: "8%" }} onPress={() => { navigation.navigate('Header',{key:{...e}}) }} key={e._id} >
        <Collectioncomponent Name={e} />

    </Card>
)

})}

            </View>




















    <View style={{ flex: 1,backgroundColor: 'black', alignItems: 'center' }}>
     
     <View>
             <Text style={{color:"red"}}>
      {   Contentlik[0].content}
       </Text>
 
     </View>
   </View>
https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-402757464fbb5010bb66f03c78418dca.webp
const HomeScreen = ({ navigation }) => {
    const mystate = useSelector((state) => state.Changenumber);
    const [loaddata, setloaddata] = useState(Contentlik);
    const [loads, setloads] = useState(0);
  console.log("loadf",loads)
  
  
    const dispatch = useDispatch()
    return (
  
      < >
        <View>
  
  
          <View style={{
            height: 36,
            width: "100%", backgroundColor: "rgb(115, 215, 255)", flexDirection: "row"
          }}>
  
            <View style={{ borderRadius: 4, width: "25%", marginLeft: 1 }}>
  
              <Button
  
                title="Header"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('Header', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}
              />
  
            </View>
            <View style={{ borderRadius: 4, width: "25%", marginLeft: 1 }}>
  
              <Button
  
                title="imgspick"
                onPress={() => imagepick()
  
                } />
            </View>
            <View style={{ borderRadius: 4, width: "28%", marginLeft: 1 }}>
  
              <Button
  
                title="collection"
                onPress={
                  () => {
                    navigation.navigate('Collection')
                  }
                }
              />
            </View>
            <View style={{ borderRadius: 4, width: "25%", marginLeft: 1 }}>
  
              <Button
  
                title="form"
                onPress={
                  () => {
                    navigation.navigate('Form')
                  }
                }
  
              />
            </View>
          </View>
          <View>
            <Text style={{ color: "red" }}>WELCOME TO BUGATTI</Text>
          </View>
  
  
  
          <ScrollView>
  
            <View style={{ backgroundColor: "red", position: "relative" }}>
              <View>
  
                <Image source={{ uri: 'https://th.bing.com/th/id/OIP.VcP1boXSQw5xJZvX2J88LwHaEK?w=283&h=180&c=7&o=5&pid=1.7' }}
                  style={{
  
                    width: " 100%",
                    height: 200,
  
                  }}
                />
                <Text style={{ position: "absolute", color: "white" }}>chiron</Text>
  
              </View>
  
              <SafeAreaView>
  
                <Text>SPORT. DE LUXE.</Text>
                <Text>
                  CHIRON SPORT’s bold exterior encapsulates a firmer chassis setting, all-new dynamic torque vectoring function and a sport focused suspension setup.
                  Expressive design features lend the interior and exterior a compelling, sporting look. Together with an overall weight saving of 18 kg, the result is an all-new character for BUGATTI CHIRON.
  
                </Text>
              </SafeAreaView>
  
  
            </View>
  
            <View style={{ backgroundColor: "red", position: "relative" }}>
              <View>
                  <Image source={{ uri:'https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-26eac1e6cdf0e1830a3060d4d1424342.webp'}} 
                  style={{
  
                    width: " 100%",
                    height: 200,
  
                  }}
                />
                <View style={{ position: "absolute", color: "white", width: "10%", justifyContent: 'center', marginLeft: "90%", backgroundColor: "white" }}>
  
                  <View>
                    
                    <View style={{ margin: 1, backgroundColor: "red" }}>
                      <Button title=".." style={{ backgroundColor: "red" }} onPress={() => {
                        dispatch(increment())
                          
                      }} />
                    </View>
  
                  </View>
  
                </View>
  
              </View>
  
              <SafeAreaView>
  
                <Text>DIVINE COMFORT</Text>
  
                <Text>
  
                  CHIRON SPORT's cabin boasts an extraordinary ambience of distinctive exhilaration and sumptuous luxury with an elegant material mix of Alcantara, leather and carbon, together with drive mode rotary knob and engine start button finished in black anodized aluminium.
  
                  Optionally, all trim parts can be finished with this black sporting touch.
                </Text>
              </SafeAreaView>
  
  
            </View>
  
  
  
  
  
  
  
            {Contentlik.map((e) => {
               console.log("cur");
               //console.log(loaddatas)
              // console.log(loaddata[0].imglik[mystate])
              return (
  
  
                <View style={{ backgroundColor: "sred", position: "relative" }} key={e.id}>
                  <View>
                    <Image source={{ uri:""}}
                      style={{
  
                        width: " 100%",
                        height: 200,
  
                      }}
                    />
                    <View style={{ position: "absolute", color: "white", width: "10%", justifyContent: 'center', marginLeft: "90%", backgroundColor: "red" }}>
  
                      <View>
  
                        <View style={{ margin: 1, backgroundColor: "red" }}>
                          <Button title=".." style={{ backgroundColor: "red" }} key={e.id}
  
                            onPress={() => {
                              const news = Contentlik.filter((ee) => ee.id == e.id)  
                              //console.log(news[0].id)
                            setloads(news[0].id)
                             dispatch(increment())
                              
                            }} />
                         
                        </View>
  
                      </View>
  
                    </View>
  
                  </View>
  
                  <SafeAreaView style={{backgroundColor:"red"}}>
  
                    <Text>DIVINE COMFORT</Text>
  
                    <Text >
                      {e.content}
  
                    </Text>
                  </SafeAreaView>
  
  
                </View>
              )
            }
  
  
  
  
  
  
            )}
          </ScrollView>
  
  
  
  
  
  
  
  
  
  
        </View>
  
  
  
      </>
    );
  }
  