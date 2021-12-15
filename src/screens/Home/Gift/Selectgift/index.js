// import { View,Text } from "react-native"
// import React from 'react';
// const SelectGift = ({navigation}) => {

//     return (
//         <View>
//             <Text>Select Gift</Text>
//         </View>
//     )
// }

// export default SelectGift


import React, { useState } from 'react'
import { View, Text, Image,FlatList,ScrollView } from 'react-native'
import {  TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'

const Habbitsone = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Select a gift from online ECommerce', image: Path.Gift, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 1, name: 'Select a gift from online ECommerce', image: Path.Gift, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 1, name: 'Select a gift from online ECommerce', image: Path.Edit, title: 'Periodo determinado', value: 35, color: '#467F9B' },
       
    ])
    const renderItem = ({ item, index }) => {
        return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Giftlist')}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        <View style={{padding:10}}>
                            <Image source={item.image} style={{height:30,width:30}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>{item.name}</Text>
                           
                        </View>
                       
                       <View style={{alignSelf:'center',marginLeft:50}}>
                     
                           </View>
                    </View>
                    </TouchableOpacity>
            
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <View style={{ backgroundColor: '#A7CECB', height: '100%', width: '100%' }}>
            {/* <ScrollView> */}

         
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                <View>
                    <Image source={Path.JohnDoe} style={{ height: 70, width: 70 }}></Image>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text>John Doe</Text>
                </View>
                <View>
                    <Image source={Path.Notification} style={{ height: 70, width: 70 }}></Image>
                </View>

            </View>
            <View style={{marginLeft:'5%'}}><Text style={{fontSize:20,fontWeight:'bold'}}>Select Gift</Text></View>
            <View>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>
           

{/* </ScrollView> */}
        </View>
    )
}

export default Habbitsone

