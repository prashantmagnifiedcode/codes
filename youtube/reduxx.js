const initialstate=[]
const reducer =(state=initialstate,action)=>{
     if(action.type=='add'){
         return action.payload
     }
    
    
    return state

}

export default reducer;