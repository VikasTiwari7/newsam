import React from 'react';
import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../utility/index';
const Onboarding=({navigation})=>{
    return(
        
        <View style={{alignSelf:'center',backgroundColor:'green'}}>
            <Text>OnBaording Screen </Text>
            <View style={{alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                <Text>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Onboarding;