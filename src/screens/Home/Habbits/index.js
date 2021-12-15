import React, { useState } from 'react'
import { View, Text, Image,FlatList,ScrollView } from 'react-native'
import {  TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'

const Habbitsone = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Week 1 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 1, name: 'Week 2 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 1, name: 'Week 3 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' },
        { id: 1, name: 'Select Your Kids Name', image: Path.JohnDoe, title: 'Periodo determinado', value: 95, color: '#91C6E8' },
        { id: 1, name: 'Setup Reminder Time', image: Path.JohnDoe, title: 'Periodo determinado', value: 95, color: '#91C6E8' },
    ])
    const renderItem = ({ item, index }) => {
        return (
              
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        <View>
                            <Image source={item.image} style={{height:70,width:70}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>{item.name}</Text>
                            <Text>{item.title}</Text>
                        </View>
                       
                       <View style={{alignSelf:'center',marginLeft:50}}>
                       <ProgressCircle
                       
            percent={item.value}
            radius={25}
            borderWidth={3}
            color={item.color}
            shadowColor="white"
            bgColor="white"
        >
            <Text style={{ fontSize: 12 }}>{item.value}</Text>
        </ProgressCircle>
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
            <View style={{marginLeft:'5%'}}><Text style={{fontSize:20,fontWeight:'bold'}}>Habits for better change</Text></View>
            <View style={{backgroundColor:"white",width:'90%',marginLeft:'5%'}}>
            <View style={{backgroundColor:'gray',padding:5}}>
                <Text>Reading</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
                <View>
                    <Image source={Path.Reading}></Image>
                </View>
                <View style={{width:'90%'}}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor molestie integer sodales amet.</Text></View>
            </View>
            </View>
            <View>
        
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>

           
         <TouchableOpacity onPress={()=>navigation.navigate("Giftselect")}>
            <View style={{flexDirection:'row',alignItems:'center',width:'50%',backgroundColor:'white',margin:'5%',padding:10,borderRadius:6}}>
                    <Image source={Path.plusIcon} style={{height:20,width:20}}>
                    </Image>
                    <Text style={{marginLeft:'5%',fontWeight:'bold',fontSize:16}}>Select Gift</Text>
            </View>
            </TouchableOpacity>
           



{/* </ScrollView> */}
        </View>
    )
}

export default Habbitsone
