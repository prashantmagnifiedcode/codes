

export const addtodo=(results)=>{
 
   // console.log("addtodo")
   //console.log(results.name)
    return{
        type:"add_todo",
        payload:{
        id:results._id,
        email:results.email,
        name:results.name,
        phone:results.phone,
        img:results.img
        }
    }
}
export const increment=()=>{
    console.log("incrementdata")
    return {type:"incrementdata"}
}