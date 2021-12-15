// import React from 'react'
// import { View,Text } from 'react-native'

// const GIftListing = () => {
//     return (
//         <View>
//             <
//         </View>
//     )
// }

// export default GIftListing

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

const SelectGift = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Cycle', image: Path.Cyclegift,  value: 65},
        { id: 1, name: 'Book', image: Path.Bookgift,  value: 75},
        { id: 1, name: 'Cycle', image: Path.Cyclegift,  value: 65},
        { id: 1, name: 'Book', image: Path.Bookgift,  value: 75},
        { id: 1, name: 'Cycle', image: Path.Cyclegift,  value: 65},
        { id: 1, name: 'Book', image: Path.Bookgift,  value: 75},
        { id: 1, name: 'Cycle', image: Path.Cyclegift,  value: 65},
        { id: 1, name: 'Book', image: Path.Bookgift,  value: 75},
       
       
    ])
    const renderItem = ({ item, index }) => {
        return (
                    <View style={{backgroundColor: 'white',borderRadius:6,marginLeft:'10%',marginRight:'10%',padding:10,margin:'2%'}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
    
                        </View>
                        <View>
                            <Image source={item.image}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>{item.name}</Text>
                            <Text>{item.value}</Text>
                        </View>
                       
                       <View style={{alignSelf:'center',marginLeft:50}}>
                       
                           </View>
                    </View>
            
          
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
            <View>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={2}
            />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',width:'50%',backgroundColor:'white',margin:'5%',padding:10,borderRadius:6}}>
                    <Image source={Path.plusIcon} style={{height:20,width:20}}>
                    </Image>
                    <Text style={{marginLeft:'5%',fontWeight:'bold',fontSize:16}}>Select Gift</Text>
            </View>
           



{/* </ScrollView> */}
        </View>
    )
}

export default SelectGift


