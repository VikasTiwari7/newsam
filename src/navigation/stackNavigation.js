
import React from 'react';
import Onboarding from '../onboarding/index';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/AuthScreen/Signin';
import SigninVerify from '../screens/AuthScreen/SigninVerify';
import ParentsProfile  from '../screens/Profiles/ParentsProfile';
import kidsProfile from '../screens/Profiles/KidsProfile';
import AllKidsprofile from '../screens/Profiles/AllKidsProfile';
import WelcomeScreen from '../screens/Profiles/ProfileComplete';
import HomeScreen from '../screens/Home';
import BottomTabNavigator from './bottomNavigation';
import Habbits from '../screens/Home/Habbits';
import SelectGift from '../screens/Home/Gift/Selectgift';
import GiftList from '../screens/Home/Gift/GiftListing';
import GIftListing from '../screens/Home/Gift/GiftListing';
const Stack = createStackNavigator();
const Stacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}}/>   
            <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/> 
            <Stack.Screen name="Siginverify" component={SigninVerify} options={{headerShown:false}}/>
            <Stack.Screen name="ParentsProfile" component={ParentsProfile} options={{headerShown:false}}/>
            <Stack.Screen name="KidsProfile" component={kidsProfile} options={{headerShown:false}}/>
            <Stack.Screen name="AllKidsprofile" component={AllKidsprofile} options={{headerShown:false}}/>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>

            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}/>
        <Stack.Screen name ="Habbitsone" component={Habbits} options={{headerShown:false}}/>
        <Stack.Screen name ="Giftselect" component={SelectGift} options={{headerShown:false}}/>
        <Stack.Screen name ="Giftlist" component={GIftListing} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default Stacks;