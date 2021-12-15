import React from 'react';
import { View, Text, ImageBackground, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import testSvg from '../../../assets/loginbackground.svg';
import path from '../../../constants/imagePath';
import Custombutton from '../../../component/customButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
const Signin = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#A7CECB", height: '100%', width: '100%' }}>

            <Image source={path.familyIcon} style={{ height: '50%', width: '50%', alignSelf: 'center' }}></Image>
            <View style={{ backgroundColor: 'white', height: '70%', width: '100%', top: '-22%', borderTopLeftRadius: 100, borderTopRightRadius: 100 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484C76' }}>Parents</Text>
                        </View>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484C76' }}>Kids</Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', margin: '5%' }}>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 5,
                            width: '50%'
                        }}
                    />
                    <View
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                            width: '50%'
                        }}
                    />
                </View>
                <View style={{ margin: '4%' }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#484C76' }}>Welcome Back to Samskara</Text>
                </View>
                <View style={{ alignSelf: 'flex-end', margin: '4%' }}>
                    <Text style={{ fontSize: 15 }}>Step closer to good Habit</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: '5%', backgroundColor: 'white', borderRadius: 6 }}>
                    <Image source={path.Homeuser} style={{ marginLeft: 10 }}></Image>
                    <TextInput placeholder="Mobile Number" placeholderTextColor="" style={{ marginLeft: 10 }} />
                </View>
                <View style={{ margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Siginverify')}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Get Code</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1, width: '45%'
                        }}
                    />
                    <View style={{ marginLeft: '2%', marginRight: '3%' }}>
                        <Text>or</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: '45%'
                        }}
                    />
                </View>
                <View style={{ margin: '7%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Image source={path.facebookIcon} style={{ height: 20, width: 20 }}></Image>
                        </View>
                        <View>
                            <Image source={path.googleIcon} style={{ height: 20, width: 20 }}></Image>
                        </View>
                        <View>
                            <Image source={path.twitterIcon} style={{ height: 20, width: 20 }}></Image>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Signin
