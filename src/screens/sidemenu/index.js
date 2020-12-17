import React, { Component } from "react";
import {View,StyleSheet,Text,TouchableOpacity,Image, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SideMenu = () => {
    
    const { navigate } = useNavigation();

    const logout = async() => {
        await AsyncStorage.removeItem('ReferCodeState')
        await auth().signOut()
        navigate('SignUP')
    }

    const buttonPress = () => {
        console.log("button pressed from side menu")
    }
    
    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageBackground}
                source={require('../../assets/sideMenuImage.jpg')}
                >
                    <View style={styles.body}>
                        <View style={styles.options}>
                            <TouchableOpacity onPress={()=> navigate('Profile')} style={styles.profile}>
                                <Icon
                                    size={30}
                                    color='#000'
                                    name='person'
                                    type='MaterialIcons'
                                />
                                <Text style={styles.profileText}>
                                    Profile
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> buttonPress()} style={styles.profile}>
                                <Icon
                                    size={30}
                                    color='#000'
                                    name='feedback'
                                    type='MaterialIcons'
                                />
                                <Text style={styles.profileText}>
                                    Feedback
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigate('Help')} style={styles.profile}>
                                <Icon
                                    size={30}
                                    color='#000'
                                    name='help-outline'
                                    type='MaterialIcons'
                                />
                                <Text style={styles.profileText}>
                                    Help
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigate('ReferEarn')} style={styles.profile}>
                                <Icon
                                    size={30}
                                    color='#000'
                                    name='groups'
                                    type='MaterialIcons'
                                />
                                <Text style={styles.profileText}>
                                    Recommend to Friends
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigate('CustomerChat')} style={styles.profile}>
                                <Icon
                                    size={30}
                                    color='#000'
                                    name='chat'
                                    type='MaterialIcons'
                                />
                                <Text style={styles.profileText}>
                                    Chat with customer care
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => logout()} style={styles.logout}>
                                <Icon
                                    size={30}
                                    color='#000'
                                    name='logout'
                                    type='MaterialIcons'
                                />
                                <Text style={styles.profileText}>
                                    Logout
                                </Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        </View>
    )
}

export default SideMenu

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'grey'
    },
    imageBackground:{
        width: '100%',
        height: '100%',
    },
    body:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: '100%',
    },
    options:{
        marginTop: '90%',
        justifyContent: 'space-evenly',
        width: '90%',
        height:'45%'
    },
    profile: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileText: {
        marginLeft: '5%',
        fontSize: 20,
    },
    logout: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        height: '15%'
    },
})


