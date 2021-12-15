import React ,{useState} from 'react';
import { View,Text,TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import path from '../../../constants/imagePath';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import { List } from 'react-native-paper';
const ParentsProfile = ({navigation}) => {
  const [filePath, setFilePath] = useState({});
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

    return (
        <View style={{backgroundColor:'#A7CECB',height:'100%',width:'100%'}}>
            <ScrollView>
              <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:20,fontWeight:'900'}}>My Profile</Text>
                </View>
            <View style={{alignSelf:'center',margin:'2%'}}>
           <Image source={path.ProfileLogo} style={{height:100,width:100}}></Image>
             <View style={{top:-20}}>
             <TouchableOpacity  onPress={() => chooseFile('photo')}>
           <Image source={path.Camera} style={{tintColor:'white',height:20,width:20,alignSelf:'flex-end',}}></Image>
           </TouchableOpacity>
           </View>
          
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "FullName*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "FullName*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "FullName*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "FullName*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "FullName*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "Occupation*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "Mobile Number"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10}}
               placeholder = "E-mail"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{ margin: '5%', backgroundColor: '#99e8e2', padding: 13, alignItems: 'center', borderRadius: 6 }}>
            <TouchableOpacity onPress={()=>navigation.navigate('KidsProfile')}>
                    <Text  style={{color:'white',fontSize:20,fontWeight:'900'}}>Create Profile</Text>
            </TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}
export default ParentsProfile;
