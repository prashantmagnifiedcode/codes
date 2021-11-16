import { Alert } from "react-native"

///const initials={list:[],chatdata:[{person:"",name:[]}]}
const initials={list:[],chatdata:[],chatlogin:[]}

 const Home=(state=initials,action)=>{
     //console.log(state)
     switch(action.type){
         case "add":
            const profiledata= action.payload
       
            return {...state,list:[...state.list,profiledata]}
            break
        case 'del':
            const deletep= action.payload;
           // console.log("l")
           // console.log(deletep);
            const filterdata= state.list.filter((item)=>{return item.number!==deletep.number&& item.name!== deletep.name})
           // console.log("hello")
           // console.log(filterdata)
            return {...state,list:filterdata}
        case 'chatdatas':
            //console.log(action.payload);
            const chatinformation=action.payload.name;
            const chatemail=action.payload.emails;
            
            //const person=action.payload.person;
          //  const filterchatdata= state.chatdata.filter((item)=>{return  item.person===person })
          //  console.log(action.payload)

               return {
                    ...state,chatdata:[...state.chatdata,chatinformation,chatemail]
                }
        case 'login':
                  
                    const chatphone=action.payload.phone;
                    const chatimage=action.payload.image;
                    
                    //const person=action.payload.person;
                  //  const filterchatdata= state.chatdata.filter((item)=>{return  item.person===person })
                  //  console.log(action.payload)
         if(chatimage===""||chatphone===""){
            Alert("Successfully uploaded")
            return {...state,chatlogin:[]}
         }else{
             return {
                  ...state,chatlogin:[...state.chatlogin,chatimage,chatphone]
              }

         }
        case 'clear':
            /*const cleardata= action.payload;
            const filterchatdata= state.chatdata.filter((item)=>{return  item.person!=cleardata.person })
            const updatedata= {name:cleardata.name,person=cleardata.person}
              // filterchatdata.push(updatedata)
               return{
                ...state,chatdata:[...state.chatdata]
            }*/

          
        default: 
             return state

     }

    return state
}
export default Home;