
import React from 'react';
import Onboarding from '../onboarding/index';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/AuthScreen/Signin';
const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}}/>   
            <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/> 
        </Stack.Navigator>
    )
}
export default Stacks;