import React, { Component, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, TextInput} from "react-native";
import { useNavigation } from 'react-navigation-hooks';

const SignIn = () => {

    const [phoneNumber, setPhoneNumber]=useState('')
    const [error, setError]=useState('')
    const { navigate } = useNavigation();

    const login = async() => {
        if(phoneNumber.length===10){
            setError('')
            navigate('Verification', {userState: 'SignIn', phoneNumber: phoneNumber})
        }else{
            setError("Not a valid phone number")
        }
    }

    const signUp = () => {
        console.log("Taking you there......")
        navigate('SignUP')
    }

    return(
        <View style={styles.container}>
            <View style={styles.loginStcak}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/splash.png')}/>
                </View>
                <View style={styles.card}>
                    <ImageBackground 
                        style={styles.textImage}
                        source={require('../../assets/signIn.png')}
                        >
                        <Text style={styles.signupText}>
                            Sign In
                        </Text>
                        <Text style={styles.withPhoneText}>
                            With your phone{'\n'}number
                        </Text>
                    </ImageBackground>
                    <View style={styles.inputField}>
                        <View style={styles.countryCode}>
                            <Image source={require('../../assets/malaysiaFlag.jpg')}/>
                            <Text style={styles.countryCodeText}>
                                +60
                            </Text>
                            <View style={styles.emptyView}/>
                        </View>
                        <TextInput
                            placeholder="Enter your phone number"
                            style={styles.phoneNumberInput}
                            PlaceholderTextColor='black'
                            keyboardType='numeric'
                            onChangeText = { phoneNumber => setPhoneNumber(phoneNumber)}
                        />
                    </View>
                    <Text style={styles.error}>
                        {error}
                    </Text>
                    <View style={styles.ButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => login()}>
                            <Text style={styles.buttonText}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.existingAccount}>
                <TouchableOpacity onPress={()=> signUp()}>
                    <Text style={styles.signInText}>
                        Already have an account ? Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loginStcak: {
        alignItems: "center",
        width: '90%',
        height: '90%'
    },
    logo: {
        marginBottom:'5%',
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 2,
    },
    textImage:{
        width: '100%',
        height: undefined,
        aspectRatio: 1.1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    signupText:{
        paddingLeft: 20,
        color: '#000',
        fontSize: 48,
        fontWeight: 'bold',
        paddingBottom:15,
    },
    withPhoneText:{
        paddingLeft: 20,
        color: '#000',
        fontSize:36,
        marginBottom: '20%'
    },
    inputField:{
        width: '90%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: '4%',
        borderBottomWidth: 1,
        borderColor:'rgba(0,0,0,0.1)',
    },
    countryCode:{
        flexDirection: 'row',
        paddingTop: 15,
    },
    countryCodeText: {
        paddingLeft: 10,
        fontSize: 16,
        paddingRight: 5,
    },
    phoneNumberInput:{
        width: '50%',
    },
    emptyView:{
        width:'4%',
        height: '60%',
        paddingLeft: 5,
        borderRightWidth: 1,
        borderColor:'rgba(0,0,0,0.2)',
    },
    ButtonView:{
        marginTop: '5%',
        width: '90%',
    },
    button: {
        height: '30%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000944'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    signInText: {
        color: 'rgba(0,0,0,0.4)',
        fontSize: 18,
        fontWeight: 'bold'
    },
    error: {
        color: 'red'
    }
})


