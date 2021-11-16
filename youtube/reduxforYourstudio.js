

const initialstate="";
const Updataname=(state=initialstate,action)=>{
if(action.type==='changename'){
    return action.payload;
}
return state;
}
export default Updataname;