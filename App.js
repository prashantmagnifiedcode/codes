import React from "react";

import Structure from "./whatsapp/structure";
import Cards from "./whatsapp/card";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const stack= createStackNavigator()
import Callmake from './whatsapp/Callmaker'
import github from './whatsapp/github'
import stores from "./whatsapp/reducer.js/store";
import { Provider} from "react-redux";
import Contact from "./whatsapp/contact";
import Font from './whatsapp/frontpage'
import Second from './whatsapp/second'
export const App1=()=>{
    return(
        <>


 <NavigationContainer>
     <stack.Navigator headerMode="none">
        <stack.Screen name="Font" component={Font}/>
        <stack.Screen name="Second" component={Second}/>
        <stack.Screen name="Structure" component={Structure}/>
        <stack.Screen name="Cards" component={Cards}/>
        <stack.Screen name="Callmake" component={Callmake}/>
        <stack.Screen name="github" component={github}/>
        <stack.Screen name="Contact" component={Contact}/>
     </stack.Navigator>
 </NavigationContainer>


        </>
    )
}
const App=()=>{
    return(
        <>
 <Provider store={stores}>

     <App1/>
 </Provider>
        </>
    )
}


export default App;