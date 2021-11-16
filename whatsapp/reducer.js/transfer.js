const initial={}
const Tranfer =(state=initial,action)=>{
    if(action.type =='tranferdata'){
        const datas= action.payload;
        return {...state,datas}
    }
    return state
}

export default Tranfer