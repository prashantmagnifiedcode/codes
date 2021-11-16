import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList,ScrollView,   TouchableOpacity, Button, TextInput } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }])
  const pressdone=(id)=>{
   /* const select= todos.filter((todo)=>todo.id===id)
    console.log(select);*/
    let returnval=[...todos];
    returnval.forEach(
      todo=>{
        if(todo.id==id){
          todo.completed=true;
        }
      }
    )
    setTodos(returnval)

  }
  const [text,settext]=useState("login");
  const [logins,setlogins]=useState(true);
  const [lod,setlod]=useState(false);
  const login=()=>{
      if(logins){
        setlod(true)
        settext("logout")
        alert("login successfully")
        setlogins(false)
      }else{
        settext("login")
        setlogins(true)
        setlod(false
      }
    //logins?settext("login")||alert("login successfully")||settext("logout"):setlogins(true)
  }

  return (
     
    lod?
      <View style={styles.container}>
    {
/*<FlatList
numColumns={2}
    keyExtractor={(item)=> item.id.toString()}
      data={todos}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>pressdone(item.id)}>
        <Text style={{...styles.todo,backgroundColor:item.completed?'green':'deeppink'}}>{item.title}</Text>

        </TouchableOpacity>
      )}
  
    ></FlatList>*/}
    <View style={styles.text}>
    

       <View  style={styles.inner} >
        <Text>WELCOME </Text>
        <Text>TO THE PRASHANT SRIVASTAVA</Text>
        <Text>PLATEFORM</Text>
        <Text>LEARNING</Text>
        </View>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        <Text>jkhjkhhkhkj</Text>
        </View>
      
      <View>
        <TextInput placeholder="enter">

        </TextInput>
      </View>
    
    
     
     
    <Button styles={styles.Button} title={text} onPress={()=>login()}></Button>
    
    {
      /*<ScrollView>
        {todos.map(todo => (<View key={todo.id} style={styles.todo}>
          <Text>{todo.title}</Text>
        </View>)
        )}
      </ScrollView>*/}
      </View>:
      <View style={styles.login}>
      <View styles={styles.text}>

      <Text >prashant android app</Text>
      </View>
      <View>
        <Text>prashant android app</Text>
      </View>
      <Button style={styles.Button} title={text} onPress={()=>login()}></Button>
      </View>||   <Text>prashant android app</Text>

        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:40,
    borderColor:'blue',
    backgroundColor: '#fff',
    borderWidth:2,
    backgroundColor: "skyblue",
    borderRadius: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inner:{
    //flex:1,
    paddingTop:10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    
    borderColor:'green',
    height:70,
    

    borderRadius: 20,
    borderWidth:2,

  },
  todo: {
    margin: 30,
    borderColor:'blue',
    borderRadius: 20,
    borderWidth:2,
    color: 'white',
    fontSize: 30,
    padding: 30
  },
  text:{
  
    flex:1,
  
    borderColor:'yellow',
    alignItems:'baseline',

    borderRadius: 20,
    borderWidth:2,
  },
  login:{
    flex:1,
    height:100,
    alignItems: 'center',
    borderColor:'blue',
    borderRadius: 20,
    borderWidth:2,
    

    /*margin: 30,
    borderColor:'blue',
    borderRadius: 20,
    borderWidth:2,
    color: 'white',
    fontSize: 30,
    padding: 30*/

  },
  Button:{
    backgroundColor: "skyblue",
    borderColor:'blue',
    borderRadius: 20,
    borderWidth:2,
  }

});








/*import { StatusBar } from 'expo-status-bar';
import React from 'react';*/
/*import { StyleSheet, Text, View ,Touch} from 'react-native';


export default function App() {
 const [data,setdata]=useState("pradha")
  press=()=>{
    setdata("done")
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  }
})
  return (
    < style={styles.container}>
    <FlatList
    keyExtractor={(iteam)=>iteam.id.toString()}
    data={todo}
    renderItem={({iteam})=>{
      return <Text>{iteam.title}</Text>
    }}
    renderItem={({iteam})=>{
      <TouchableOpacity>
       <Text>{iteam.title}</Text>

      </TouchableOpacity>
    }}

    </FlatList>
    {/*<ScrollView>
      <Text>hdfhakh</Text>
      <StatusBar style="auto" />
      <Button title="change" onPress={press}></Button>
     <TextInput
      multilines
      onChange={}
      ></TextInput>
      <TextInput
      multilines
      KeybordType="numeric"
      onChange={}
      ></TextInput>

    </ScrollView>*/





import React, { useState } from 'react';
//import Button from '@material-ui/core/Button'
import {  Text, View,Animated,PanResponder } from 'react-native';

export default function App() {
  const position =new Animated.ValueXY({x:0,y:0})
  Animated.timing(position ,{
    toValue:{x:100,y:100},
    duration:500
  }).start()
  const rotate= position.x.interpolate({
    inputRange:[0 ,51],
    outputRange:['0deg','360deg']
  })
  const pos= PanResponder.create({
    onMoveShouldSetPanResponder:()=>true,
    //onPanResponderEnd:(e,c)=>{
    //  console.log(e,c)
    //}
    onPanResponderMove:Animated.event([
      null,
      { dx:position.x,dy:position.y }
    ]),
   
    onPanResponderRelease:()=>{
     // position.setValue({x:0,y:0})
    Animated.spring(position,{
       toValue:{x:0,y:0}
     }).start()
     
    }
  })

  

  return (
      <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
      }}>
      <Animated.View 
      {...pos.panHandlers}

      style={{
              height:80,
              width:80,
              alignContent: 'center',
              justifyContent: 'center',
              backgroundColor:'red',
              transform: [{translateX:20},
              {translateY:20},{rotateX:rotate}
               ]
          }}>

          <Text >p</Text>
      </Animated.View>
      </View>
    
    
        
  );









};








<Text  style={{color: "skyblue"}}>{contents[indexSelected].name}</Text>

<Text  style={{color: "skyblue"}}>
{contents[indexSelected].content}
</Text>

