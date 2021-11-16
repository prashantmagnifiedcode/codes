import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
import profile from './profile'
import Status from './status'
import Call from './Call'

const tapnavigation= createMaterialTopTabNavigator({



    Home:{
        screen:profile,
        navigationOption:{
            tabBarOptions:"contact",
        }
 
    },
    Status:{
        screen:Status,
        navigationOption:{
            tabBarOptions:"contact",
        }
    },
    Calls:{
        screen:Call,
        navigationOption:{
            tabBarOptions:"contact",
        }
    }

},

    {
        tabBarOptions: {
          
          horizontal: true,
    
          style: {
              marginTop:hp(4.3),
              backgroundColor:"black",
              height:"10%",
              display:"flex",
              justifyContent:"center",
              
              
              
               
            
          },
        },
      }
)
const Navigator = createAppContainer(tapnavigation);

const Structure=()=>{
    
    return(
        <>
   
        <Navigator  >
        
         
        </Navigator>
        </>
    )
}


export default Structure;