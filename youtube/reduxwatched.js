
const initialsecondvalue = { list: [
  
] }
console.log("initialsecondvalue")
//console.log(initialsecondvalue)
const Watch = (state = initialsecondvalue, action) => {

  switch (action.type) {


    case "addwatch":

      const { videoId, title } = action.payload;

      const val = state.list.filter((e) => { return (e.id != action.payload.id) })


      console.log("val",action.payload.videoId)
      //console.log("video",videoId)

      if (1) {

        return {
          ...state,

          list: [
            ...state.list,
            {
              id: new Date().getTime().toString(),
              video: videoId,
              title: title

            },
          ],
        };

      } else {
        console.log("stater")
        return state;
      }
      break;






    default: return state;
  }
}
export default Watch;