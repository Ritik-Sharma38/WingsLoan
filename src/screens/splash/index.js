import React, { Component, useEffect, useState } from "react";
import {View,StyleSheet,Text,SafeAreaView,Image } from "react-native";
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';

const Splash =() => {

    const { navigate } = useNavigation();
    var ReferCodeState = null

    useEffect(()=>{
        async function StateController () {
            ReferCodeState= await AsyncStorage.getItem('ReferCodeState')
            setTimeout(() => {
                if(ReferCodeState===null){
                    navigate('SignUP')
                    {/*auth().onAuthStateChanged(async(user)=>{
                        if(user){
                            await AsyncStorage.setItem('ReferCodeState', 'true')
                            navigate('ReferralCode')
                        }else{
                            navigate('SignUP')
                        }
                    })
                    */} 
                }else{
                    navigate('HomeInitial')
                }
            }, 2000);
        }
        StateController()
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../../assets/splash.png')}
            />
            <Text style={styles.wings}>Wings Loan</Text>
        </SafeAreaView>

    )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }, 
    wings:{
        fontSize: 25,
        marginTop: '10%',
    }
})


