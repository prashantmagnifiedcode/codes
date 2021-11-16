import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'
import { Alert } from 'react-native'

const Camera = async () => {

    const {granted} =  await permissions.askAsync(permissions.CAMERA)
    if(granted){
         let data =  await imagepicker.launchCameraAsync({
              mediaTypes:imagepicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
          if(!data.cancelled){
            let newfile = { 
              uri:data.uri,
              type:`test/${data.uri.split(".")[1]}`,
              name:`test.${data.uri.split(".")[1]}` 

          }
          console.log(newfile)
            handleUpload(newfile)
        }
    }else{
       Alert.alert("you need to give up permission to work")
    }
}


const handleUpload = (image)=>{
    const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "firecoder")
        data.append("cloud_name", "dqsfpok4o")
        fetch("https://api.cloudinary.com/v1_1/dqsfpok4o/image/upload", {
            method: "POST",
            body: data,
        }).then(res => res.json()).
            then(data => {
                setuploadimg(data.url)
                Alert.alert("Successfully uploaded")
            }).catch(err => {
                Alert.alert(" while uploading imgae")
            })
}
const Camergallery = async () => {
    const { granted } = await permissions.askAsync(permissions.CAMERA)
    console.log(granted)
    if (granted) {
        let data = await imagepicker.launchImageLibraryAsync({
            mediaTypes: imagepicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        console.log(data)

        if (!data.cancelled) {
            let newfile = { 
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}` 

            }
              handleUpload(newfile)
        }


    } else {
        Alert.alert("not able to open gallery")
    }

}




export  {Camera,Camergallery}