import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Verification = () => {

    const { navigate } = useNavigation();
    const userState = useNavigationParam('userState')
    const phoneNumber = useNavigationParam('phoneNumber')
    const [confirm, setConfirm]= useState('')
    const [Error, setError]=useState('')

    useEffect(()=>{
        SendCode()
    },[])

    async function SendCode() {
        const phone = '+91'+phoneNumber
        //const confirmation = await auth().signInWithPhoneNumber(phone)
        //setConfirm(confirmation)
    }

    const goBack = () => {
        if(userState==='SignUP'){
            navigate('SignUP')
        }else{
            navigate('SignIn')
        }
    }

    const ResendCode = async() => {
        SendCode()
        Alert.alert("Verification code resend","Code in resend on your phone number: "+phoneNumber)
    }

    const Verify = async(code) =>{
        if(code.length===6){
            try{
                //await confirm.confirm(code)
                //await AsyncStorage.setItem('ReferCodeState', 'true')
                if(userState==='SignUP'){
                    navigate('ReferralCode')
                }else{
                    navigate('HomeInitial')
                }
            }catch(error){
                console.log("error:", error)
                setError("Invalide Code")
            }
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.goBack}>
                <Icon
                    size={30}
                    name='arrow-back-ios'
                    type='MaterialIcons'
                    onPress={()=> goBack()}
                />
            </View>
            <View style={styles.verification}>
                <View>
                    <Text style={styles.verificationText}>
                        Verification
                    </Text>
                </View>
                <View style={styles.codeText}>
                    <Text style={styles.sentCodeText}>
                        We have sent you a code to verify your mobile number
                    </Text>
                </View>
                <View>
                    <Text style={styles.enterCode}>
                        Enter your code here
                    </Text>
                </View>
                <OTPInputView
                    style={{width: '80%', height: '30%'}}
                    pinCount={6}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code => { Verify(code) })}
                />
                <Text style={styles.error}>{Error}</Text>
                <View style={styles.didntReceiveCode}>
                    <Text style={styles.didntReceiveCodeText}>
                        I didn't receive code ?
                    </Text>
                    <TouchableOpacity onPress={() => ResendCode()}>
                        <Text style={styles.resendCode}>
                            Resend code
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    goBack:{
        width: '100%',
        padding: 30,
    },
    verification: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    verificationText: {
        color: 'rgba(0, 0, 139, 1)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '10%'
    },
    enterCode: {
        marginTop: '10%',
        color: 'rgba(0,0,0,0.5)',
        fontSize: 18
    },
    otpBoxesContainer: {
        marginTop: '5%',
        flexDirection: 'row'
    },
    otpCircle: {
        padding: 20,
        marginRight: 20,
        backgroundColor: 'rgba(0,0,0,0.05)',
        height: 55,
        width: 55,
        textAlign: 'center',
        borderRadius: 50
    },
    codeText: {
        alignItems: 'center',
    },
    sentCodeText: {
        textAlign: 'center',
        fontSize: 24
    },
    codeInput: {
        height: 100,
        fontSize: 20
    },
    didntReceiveCode:{
        marginTop: '10%',
        alignItems: 'center'
    },
    didntReceiveCodeText: {
        fontSize: 18
    },
    resendCode: {
        marginTop: '5%',
        fontSize: 16,
        color: 'rgba(0,0,139,1)',
    },
    underlineStyleBase: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'rgba(0,0,0,0.03)'
    },
    underlineStyleHighLighted: {
        borderColor: "rgba(0,0,0,0.5)",
    },
    error: {
        color: 'red'
    }
})


