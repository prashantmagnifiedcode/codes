
import React, {  useEffect,useContext } from 'react';
import { View,Alert, ActivityIndicator} from 'react-native';
import { Card} from 'react-native-paper';
import Collectioncomponent from './collectioncomponent';
import { useSelector, useDispatch } from 'react-redux';
import { addtodo } from './reducer/action'
import {contexts} from './App'
const Collection = ({ navigation }) => {
    console.log(contexts)
    const {state,dispatch}=useContext(contexts);
    const list = useSelector((state) => state.TodoReducer.list);
    const Dispatchs = useDispatch();
    
    const callabout = async () => {
        try {
            fetch("http://1d2ab853ff04.ngrok.io/collection")
            .then(res => res.json())
            .then(results => {
                console.log(state);
                console.log(state);
                dispatch({type:"USER",payload:false})
                Dispatchs(addtodo(results));
            }
                ).catch(_err => {
                    Alert.alert("someting went wrong")
                })
        } catch (e) {
            console.log("signin");
        }
    }
 const thenrender=()=>{
           return(
            <>
            <View style={{ backgroundColor: "#ffd42c", height: "100%" }}>
                        {list.map((e) => {
                         
                            return (
                             state?<ActivityIndicator size="small" color="blue" />:
                                <Card style={{ margin: 1, height: "8%" }} 
                                onPress={() => { navigation.navigate('Header', { key: { ...e } }) }} key={e._id} >
                                    <Collectioncomponent Name={e} />
            
                                </Card>
                            )
            
                        })}
            
                    </View>
                </>
           )
 }


 
 useEffect(() => {
     console.log("value of laod");
     console.log(state)
     if(state){
         callabout();
        }
        thenrender();
    }, [])
return (
    thenrender()
)
}
export default Collection;
