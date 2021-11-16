const initial={listsubscribe:[]}
 const Exportscribe =(state=initial,action)=>{
    switch(action.type){
        case 'channelsuscribe':
            const {videoId,channel,title}= action.payload;
      console.log("su")
      console.log(title)
            return {
                ...state,listsubscribe:[
                     ...state.listsubscribe,
                    
                    {id:videoId,
                    name:channel,
                    detail:title,
                    image:videoId}
                ]
            }

      default:return state
    }
}
export default Exportscribe