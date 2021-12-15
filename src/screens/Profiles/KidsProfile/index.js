import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TextInput, Image, TextInputComponent,FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Path from '../../../constants/imagePath';
const kids = ({navigation}) => {
    const [habbits, setHabbits] = useState([
        {
            id: 1,
            name: 'Eating Healthy'
        },
        {
            id: 2,
            name: 'Physical Fitness'
        },
        {
            id: 3,
            name: 'Singing'
        },
        {
            id: 4,
            name: 'Money Savings Skills'
        },
        {
            id: 5,
            name: 'Helping with Chores'
        },
    ])


    const [interset, setInterest] = useState([
        {
            id: 1,
            name: 'Cycling'
        },
        {
            id: 2,
            name: 'Reading'
        },
        {
            id: 3,
            name: 'Dancing'
        },
        {
            id: 4,
            name: 'Wake up early'
        },
        {
            id: 5,
            name: 'Tennis'
        },
        {
            id: 6,
            name: 'Badminton'
        },
        {
            id: 7,
            name: 'Piano'
        },
    ])
    const [random, setRandrom] = useState('Dummy Text');
    const randomFunction = () => {
        let abc = randomString();
        setRandrom(abc);
    }
    const randomString = () => {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    const Item = ({title}) => {
        return( 
            <View style={{ margin: '3%', backgroundColor: 'white', padding: 10, borderRadius: 10, width: '30%' }}>
            <Text >"title.name"</Text>
        </View>
        );
      }

      const renderItem = ({item})=>( 
        <Item title={item.title}/>
      )
    return (
        <View style={{ backgroundColor: '#A7CECB', height: '100%', width: '100%' }}>
            <ScrollView>
                <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'900'}}>Kids Profile</Text>
                </View>
              <View style={{alignSelf:'center',margin:'2%'}}>
           <Image source={Path.ProfileLogo} style={{height:100,width:100}}></Image>
             <View style={{top:-20}}>
             <TouchableOpacity  onPress={() => chooseFile('photo')}>
           <Image source={Path.Camera} style={{tintColor:'white',height:20,width:20,alignSelf:'flex-end',}}></Image>
           </TouchableOpacity>
           </View>
           </View>

                <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
                    <TextInput
                        style={{ marginLeft: 10 }}
                        placeholder="Name or Nick Name *"
                        placeholderTextColor="#9E9E9E"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignSelf: 'center', margin: '2%' }}>
                        <TextInput
                            style={{ marginLeft: 10 }}
                            placeholder="Age *"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignSelf: 'center', margin: '2%' }}>
                        <TextInput
                            style={{ marginLeft: 10 }}
                            placeholder="Gender *"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                    </View>
                </View>
                <View style={{margin:'5%'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>Select one or more areas where you want your kids to be better*</Text>
                </View>
                {/* {habbits.map((item, index) => (

                    <View key={index} style={{ margin: '3%', backgroundColor: 'white', padding: 10, borderRadius: 10, width: '30%' }}>
                        <Text style={{flexWrap:'wrap'}}>{item.name}</Text>
                    </View>

                ))
                } */}
                 <FlatList
       data={habbits}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       numColumns={3}
    />
                <View style={{margin:'5%'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Select one or more interest areas for your kids *</Text>
                </View>
                <View style={{margin:'5%'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>Habbits areas</Text>
                </View>
                <View style={{margin: '5%',}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Generate Code fof your Kids LOgin</Text>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignSelf: 'center',justifyContent:'space-between' }}>
                    <TouchableOpacity style={{ width: '100%' }} onPress={() => randomFunction()}>
                        <View style={{ backgroundColor: '#A7CECB',padding:10,borderWidth:.5,borderRadius:6,alignItems:'center' }}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Generate Code</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '45%', backgroundColor: 'white', borderRadius: 10,padding:10,alignItems:'center' }}>
                       <Text style={{fontSize:15,fontWeight:'bold'}}>{random}</Text>
                    </View>
                </View>
               
                    <View style={{flexDirection:'row',backgroundColor:'white',width:'45%',padding:10,alignSelf:'center',margin:'10%',borderRadius:6}}>
                    <TouchableOpacity style={{flexDirection:'row',borderRadius:6}}>
                        <View>
                            <Image source={Path.plusIcon} style={{height:20,width:20,alignSelf:'center',marginLeft:10}}></Image>
                        </View>
                        <View style={{alignSelf:'center',marginLeft:'5%'}}>
                            <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:15}}>Add More Kids</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
              
                
                    {/* <View style={{margin:'5%',alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('AllKidsprofile')}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                    </View> */}
                
                <View style={{ margin: '5%', backgroundColor: '#99e8e2', padding: 13, alignItems: 'center', borderRadius: 6 }}>
            <TouchableOpacity onPress={()=>navigation.navigate('AllKidsprofile')}>
                    <Text  style={{color:'white',fontSize:20,fontWeight:'900'}}>Next</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>

        </View>
    )
}

export default kids
