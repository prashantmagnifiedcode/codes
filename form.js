import React, { useState,useContext } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'
import {contexts} from './App'
const Form = () => {
    const {state,dispatch}=useContext(contexts);
    const [name, setname] = useState(" ")
    const [email, setemail] = useState(" ")
    const [phone, setphone] = useState(" ")
    const [uploadimg, setuploadimg] = useState()
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
              handleUpload(newfile)
            }
        } else {
            Alert.alert("not able to open gallery")

        }
    }
    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "firecoder")
        data.append("cloud_name", "dqsfpok4o")
        fetch("https://api.cloudinary.com/v1_1/dqsfpok4o/image/upload ", {
            method: "POST",
            body: data,
        }).then(res => res.json()).
            then(data => {
                setuploadimg(data.url)
                Alert.alert(" uploading")
            }).catch(err => {
                Alert.alert(" while uploading imgae")
            })
    }
   
        const submit = async () => {
        try {
            dispatch({type:"USER",payload:true})
            console.log("call")
            const res = await fetch("http://1d2ab853ff04.ngrok.io/message ", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, uploadimg })
            })
            const datas = await res.json()
        } catch (e) { 
            Alert.alert("not connected to internet")
         }
    }
    return (
        <> 
        <View>
                <Text>prashant</Text>
                <TextInput
                    label="name"
                    mode="outlined"
                    value={name}
                    onChangeText={text => setname(text)}
                ></TextInput>
                <TextInput
                    label="email"
                    mode="outlined"
                    value={email}
                    onChangeText={text => setemail(text)}
                ></TextInput>
                <TextInput
                    label="phone"
                    mode="outlined"
                    value={phone}
                    onChangeText={text => setphone(text)}
                ></TextInput>
            </View>
            <View>
    
              <Button title="imguplad" onPress={() => imagepick()}></Button>

        
                <Button title="submit" onPress={() => { submit() }}  ></Button>

            </View>


        </>
    )
}

export default Form ;