import React, { useEffect } from 'react'
import { View,Text, ScrollView,Image, ImageBackground } from 'react-native'
import Path from '../../../constants/imagePath'
const Welcome = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('BottomTab')
        })
    })
    return (
        <View style={{backgroundColor: '#A7CECB', height: '100%', width: '100%'}}>
            <ScrollView>
                <View style={{alignSelf:'center',}}>
                    <Image source={Path.ProfileComplete} ></Image>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#000000',top:-25}}>Profile created successfully</Text>
            </View>
          
            <View style={{backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,height:'70%'}}>
                <ImageBackground source={Path.WelcomeDesign} style={{height:'100%',width:'100%'}}>
                    <View style={{padding:10,alignSelf:'center'}}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>Congratulations !!</Text>
                    </View>
                    <View style={{margin:'5%'}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>
We have given you 100 Samskara Coins for free to get you started. You can use your Samskara Coins to Unlock the Habit Development Programs. You can earn additional Coins by
</Text>


                    </View>
                    <View style={{width:'80%',alignSelf:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>1.Refer a Friend. You will get 25coins for each friend who creates an account with us – Refer Now </Text>
                    </View>
                    <View style={{width:'80%',alignSelf:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>2.Approval for Completed activity – 10 Coins </Text>
                    </View>
                    <View style={{width:'80%',alignSelf:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>3.Completion of a 21 Day Program – 50 Coins </Text>
                    </View>

                    <View style={{width:'80%',alignSelf:'center',marginBottom:'8%'}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>4.Every Week, we will refill your account with 50 Coins</Text>
                    </View>
                </ImageBackground>
            </View>
            </ScrollView>
        </View>
    )
}

export default Welcome
