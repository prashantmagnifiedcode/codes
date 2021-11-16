import React from 'react '
import { Dimensions,PixelRatio } from 'react-native'
const {width ,height}=Dimensions.get('window')
const widthtodo=number=>{
    let givewidth=
    typeof number==='number'?number:parseFloat(number)
    return PixelRatio.roundToNearestPixel({layoutSize:(width*givewidth/100)})
}
const heighttodo=number=>{
    let giveheight=
    typeof number==='number'?number:parseFloat(number)
    return PixelRatio.roundToNearestPixel({layoutSize:(height*giveheight/100)})
}
const listentoorientation =ref=>{
    Dimensions.addEventListener({type:'change',handler:(newDimension)=>{
 console.log("change")
 width= newDimension.screen.width
 height= newDimension.screen.height

 ref.setState({state:{orientation:height>width?'portrait':'landscape'}})
    }})
}
const removeorientationchange=()=>{
    Dimensions.removeEventListener({type:'change'})
}
export {widthtodo,heighttodo,listentoorientation,removeorientationchange}

