
import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'

  const imagepick = async () => {
    const { granted } = await permissions.askAsync(permissions.CAMERA_ROLL)
    if (granted) {
      let data = await imagepicker.launchImageLibraryAsync({
        mediaTypes: imagepicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5
  
      })
      console.log(data)
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test/${data.uri.split(".")[1]}`,
        }
        handleupload(newfile);
      }
    } else {
      Alert.alert("not able to open gallery")
  
    }
  }
  export default imagepick