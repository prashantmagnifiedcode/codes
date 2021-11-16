export const  Tranferdatas=(data)=>{
   // console.log(data)
    return {
        type:"tranferdata",
        payload: data
    }


}
export const  Tranferprofiledatas=(data)=>{
 // console.log("hh")
    return {
        type:"add",
        payload: data
    }


}
export const  Deleteprofiledatas=(data)=>{
 // console.log("hh")
    return {
        type:"del",
        payload: data
    }


}
export const  Chatdata=(data)=>{
 // console.log("data",data)
    return {
        type:"chatdatas",
        payload: data
    }


}
export const  Clearchat=(data)=>{
  console.log("data cler")
    /*return {
        type:"clear",
        payload: data
    }*/


}
export const  Logindetail=(data)=>{
 console.log("data cler")
    return {
        type:"login",
        payload: data
    }


}
