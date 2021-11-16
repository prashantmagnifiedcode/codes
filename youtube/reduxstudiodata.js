export const initialvalue="jjjj"
export const reducer=(state,action)=>{
    if(action.type=="changename"){
        return action.payload;
    }
    return state;

}