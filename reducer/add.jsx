/*const initialdata=0;
export const Add=(state=0,action)=>{
    switch(action.type){
        case 'incrementdata':
            console.log("data")
            return (state+1);
        default:
            return state;
    }


}*/
const initial=0
const Changenumber =(state=initial,action)=>{
    switch(action.type){
        case "incrementdata":
            
        if(state<2){

            return  state +1;
        }else{
            
            return  state=0 ;
        }
        
        case "dec": return state -1;
        
        default :return state;
    }
}



export default Changenumber