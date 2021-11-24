import React from 'react'
import { View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
const Signin = ({navigation}) => {
    return (
        <View>
            <Text>Signin SCreen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('')}>
            <View>
                <Text>Submit</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default Signin
