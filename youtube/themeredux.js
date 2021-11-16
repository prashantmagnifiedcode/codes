const initialstate=false
const themereducer =(state=initialstate,action)=>{
     if(action.type=='changetheme'){
         return action.payload
     }
    
    
    return state

}

export default themereducer;