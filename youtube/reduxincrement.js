
const initialsecondvalue={"state1":0, "state2":0}
const increments =(state=initialsecondvalue,action)=>{

    switch(action.type){
        
        case "i":
            
             return {...state,state1:++initialsecondvalue.state1};
        case "d":
            

                return {...state,state2:++initialsecondvalue.state2};
            
            
        
        default :return state;
    }
}
export default increments