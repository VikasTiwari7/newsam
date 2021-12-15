import React, { useState } from 'react'
import { View, Text, ScrollView, Image, ImageBackground,Button } from 'react-native';
import Path from '../../constants/imagePath';
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
const Home = ({navigation}) => {
    const [homeHabbit, setHomeHabbit] = useState([
        { id: 'Swimming', image: Path.Swimming, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        { id: 'Healthy Eating', image: Path.Eating, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        { id: 'Reading', image: Path.Reading, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        {
            id: 'Wake up early', image: Path.Wakeup, title: 'Malesuada eros ipsum integer nisi suspen....', display: true
        }
    ])
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    // navigation.naviate("Habbitsone");
    // setModalVisible(!isModalVisible);
  };
    return (
        <View style={{ backgroundColor: '#A7CECB', height: '100%', width: '100%',flex:1 }}>
            <ScrollView>
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
                <View style={{ padding: 10, borderRadius: 10 }}>
                    <ImageBackground source={Path.HomeGirl} style={{ borderRadius: 20 }}>
                        <View style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>WE FIRST MAKE OUR HABITS</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>THEN OUR HABITS</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>MAKES US</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <Text>Now Pick Habits For Your Kids</Text>
                </View>
                {/* {homeHabbit.map((item, index) => ( */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: '2%' }}>
                    {/* <TouchableOpacity onPress={()=>toggleModal()}> */}
                    <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Habbitsone")}>
                        <Image source={Path.Swimming} style={{ alignSelf: 'center' }}></Image>
                        </TouchableOpacity>
                        <Text>Swimming</Text>
                        <Text>Malesuada eros ipsum integer nisi suspen....</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Image source={Path.Homeuser}></Image>
                            <Text>104</Text>
                            <Image source={Path.Homelike}></Image>
                            <Text>103</Text>
                        </View>

                    </View>
                    {/* </TouchableOpacity> */}
                    <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                        <Image source={Path.Eating} style={{ alignSelf: 'center' }}></Image>
                        <Text>Healthy Eating</Text>
                        <Text>Malesuada eros ipsum integer nisi suspen....</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Image source={Path.Homeuser}></Image>
                            <Text>104</Text>
                            <Image source={Path.Homelike}></Image>
                            <Text>103</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: '2%' }}>
                    <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                        <Image source={Path.Swimming} style={{ alignSelf: 'center' }}></Image>
                        <Text>Swimming</Text>
                        <Text>Malesuada eros ipsum integer nisi suspen....</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Image source={Path.Homeuser}></Image>
                            <Text>104</Text>
                            <Image source={Path.Homelike}></Image>
                            <Text>103</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                        <Image source={Path.Eating} style={{ alignSelf: 'center' }}></Image>
                        <Text>Healthy Eating</Text>
                        <Text>Malesuada eros ipsum integer nisi suspen....</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Image source={Path.Homeuser}></Image>
                            <Text>104</Text>
                            <Image source={Path.Homelike}></Image>
                            <Text>103</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Trending Habits</Text>
                </View>
                <View style={{flexDirection:'row',backgroundColor:'white',padding:10,margin:'5%',borderRadius:10}}>
                    <View style={{backgroundColor:'#FFBF7F'}}>
                        <Text>.</Text>
                    </View>
                    <View>
                        <Image source={Path.wakeupOne}></Image>
                    </View>
                    <View>
                        <Text>Groupo 72- Equipo 1</Text>
                        <Text>Arquitectura de software IDGS7-1</Text>
                        <Text>Periodo determinado</Text>
                    </View>
                    <View style={{marginLeft:40}}>
                        <Image source={Path.ThreeOne}></Image>
                    </View>
                </View>
                <View style={{flexDirection:'row',backgroundColor:'white',padding:10,margin:'5%',borderRadius:10}}>
                    <View style={{backgroundColor:'#FFBF7F'}}>
                        <Text>.</Text>
                    </View>
                    <View>
                        <Image source={Path.wakeupOne}></Image>
                    </View>
                    <View>
                        <Text>Groupo 72- Equipo 1</Text>
                        <Text>Arquitectura de software IDGS7-1</Text>
                        <Text>Periodo determinado</Text>
                    </View>
                    <View style={{marginLeft:40}}>
                        <Image source={Path.ThreeOne}></Image>
                    </View>
                </View>
              
                <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:'white',alignSelf:'center',padding:20,width:'100%',borderRadius:10 }}>
            <View style={{alignSelf:'center',top:-50,backgroundColor:'white',borderRadius:50}}>
                <Image source={Path.AlertChild}></Image>
                </View>
            <View style={{alignSelf:'center'}}>
                <Image source={Path.Alertgirl}></Image>
                </View>
                <View style={{alignSelf:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>Habit will cost 30 Samskara Points!</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={()=>console.log("Alert pressed")}>
              <View style={{padding:5,borderColor:'green',borderWidth:1}}>
                
                  <View style={{flexDirection:'row',padding:5}}>
                      <View>
                          <Image source={Path.Alertok} style={{alignSelf:'center'}}></Image>
                          </View>
                          <View>
                  <Text style={{color:'green',alignSelf:'center'}}>Accept</Text>
                  </View>
                  </View>
                  </View>
                  </TouchableOpacity>
                  <View style={{padding:5,borderColor:'red',borderWidth:1,flexDirection:'row'}}>
                      <View style={{alignSelf:'center'}}>
                          <Image source={Path.AlertCancel}></Image>
                          </View>
                          <View style={{alignSelf:'center'}}>
                      <Text style={{color:'red'}}>Later</Text>
                      </View>
                      </View>
              </View>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
 
                {/* ))} */}
            </ScrollView>
        </View>
    )
}

export default Home
