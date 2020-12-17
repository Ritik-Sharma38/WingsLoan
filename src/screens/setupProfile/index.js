import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import {Picker} from '@react-native-picker/picker';

const SetupProfile = () => {

    const { navigate } = useNavigation();
    const [error, setError]=useState('');
    const [userDetails, setUserDetails]=useState({
        FullName: '',
        State: 'Johar'
    })
    const [currentState, setCurState]=useState('Select state')
    console.log("userdetails", userDetails)
    const [stateList, setStateList]=useState([
        'Select state',
        'Johor', 
        'Kedah', 
        'Kelantan', 
        'Kuala Lumpur',
        'Melaka', 
        'Negeri Sembilan', 
        'Pahang', 
        'Perak', 
        'Perlis', 
        'Penang', 
        'Putrajaya', 
        'Selangor', 
        'Terengganu'
    ])

    const goBack = () => {
        console.log('going back')
        navigate('ReferralCode')
    }

    const setupProfile = () => {
        console.log("setting up profile")
        userDetails.State=currentState
        if(userDetails.FullName!==""){
            console.log("setting up your profile")
            navigate('HomeInitial')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.setupProfile}>
                <View style={styles.goBack}>
                    <Icon
                        size={30}
                        color='#fff'
                        name='arrow-back-ios'
                        type='MaterialIcons'
                        onPress={()=> goBack()}
                    />
                </View>
                <View style={styles.setProfileView}>
                    <Text style={styles.setupProfileText}>
                        Setup Profile
                    </Text>
                </View>
                <View style={styles.TextInput}>
                    <TextInput
                        placeholder="Enter your Full Name"
                        style={styles.fullNameText}
                        PlaceholderTextColor='rgba(0,0,0,1)'
                        onChangeText = { FullName => userDetails.FullName=FullName}
                    />
                    <View style={styles.fullNameText}>
                        <Picker
                            selectedValue={currentState}
                            style={{color: 'rgba(0,0,0,0.3)'}}
                            mode={'dropdown'}
                            onValueChange={(itemValue, itemIndex) => setCurState(itemValue) }
                            >
                            {stateList.map((item, index)=>(
                                <Picker.Item key={index} label={item} value={item} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>setupProfile()} style={styles.iconStyle}>
                    <Image
                        style={styles.nextIcon}
                        source={require('../../assets/nextIcon.png')}
                        />
                </TouchableOpacity>
            </View>
            <View style={styles.setupProfileView}>
                <ImageBackground
                    source={require('../../assets/setupProfileTheme.jpg')}
                    style={styles.setupProfileImage}
                />
                </View>
        </View>
    )
}

export default SetupProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    goBack:{
        width: '100%',
        padding: 30,
    },
    setupProfile:{
        width: '100%',
        backgroundColor: 'rgba(0,0,137,1)',
        borderColor: 'rgba(0,0,137,1)',
        borderWidth: 1,
        borderRadius: 30,
    },
    setProfileView:{
        alignItems: 'center',
    },
    setupProfileText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 38,
        marginBottom: '5%'
    },
    TextInput: {
        alignItems: 'center',
    },
    fullNameText: {
        backgroundColor: '#fff',
        marginTop: '5%',
        width: '90%',
        paddingLeft: 5,
        borderRadius: 5,
        color: 'rgba(0,0,0,0.4)',
    },
    iconStyle: {
        width: '100%',
        flexDirection: 'row-reverse',
        paddingLeft: 30,
    },
    nextIcon: {
        width: '20%',
        height: undefined,
        aspectRatio: 1,
        left: 10,
        bottom: '-10%',
    },
    setupProfileView: {
        marginTop: '20%',
        width: '80%',
    },
    setupProfileImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.1,
        justifyContent: 'center'
    },
})
  