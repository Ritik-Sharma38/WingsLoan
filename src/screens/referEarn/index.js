import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, Share } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ImagePicker from 'react-native-image-picker';

const ReferEarn = () => {

    const { navigate } = useNavigation();
    const [ codeImage, setCodeImg]=useState('')
    const [ code, setCode]=useState('')
    const [error, setError]=useState('')

    const goBack = () => {
        console.log('going back')
        navigate('HomeInitial')
    }

    const SignUPWithoutReferral = () => {
        navigate('SetupProfile')
        console.log("requested to signup without referral")
    }

    const shareCode = () => {
        console.log("sharing...........")
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
            <View style={styles.referralCode}>
                <View>
                    <Text style={styles.referralCodeText}>
                        Refer & Earn
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/referEarn.jpg')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.referCode}>
                    <Text style={styles.referCodeText}>Refer Code</Text>
                    <View style={styles.textEntery}>
                        <TextInput
                            placeholder="D52jsd924322"
                            style={styles.phoneNumberInput}
                            PlaceholderTextColor='black'
                            onChangeText = { code => setCode(code)}
                        />
                        <TouchableOpacity onPress={()=> shareCode()} style={styles.shareButton}>
                            <Text style={styles.buttonText1}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.error}>
                    {error}
                </Text>
                <View style={styles.text}>
                    <Text style={styles.bodyText}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                    </Text>
                </View>
                <View style={styles.yourReferralsContainer}> 
                    <Text style={styles.referralText}>Your Referrals</Text>
                    <View style={styles.referralsContainer}>
                        <View style={styles.codeContainer}>
                            <View style={styles.subCodeContainer}>
                                <Text style={styles.codeCountText}>0</Text>
                            </View>
                            <Text style={styles.codeSubText}>Use your code</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            {[0,1,2].map((i)=>(
                                <View>
                                   <Icon
                                        size={30}
                                        name='east'
                                        color='rgba(255,187,2,1)'
                                        type='MaterialIcons'
                                    />
                                </View>
                            ))}
                        </View>
                        <View style={styles.listBookings}>
                            <View style={styles.subCodeContainer}>
                                <Text style={styles.codeCountText}>0</Text>
                            </View>
                            <Text style={styles.codeSubText}>
                                Complete list bookings
                            </Text>
                        </View>
                    </View>
                </View>
                <Text onPress={()=> alert('No conditions yet')} style={styles.termsConditions}>Referrals Terms & Conditions</Text>
            </View>
        </View>
    )
}

export default ReferEarn

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    goBack:{
        width: '100%',
        padding: 30,
    },
    referralCode: {
        width: '90%',
        height: '90%',
    },
    referralCodeText: {
        color: 'rgba(0, 0, 139, 1)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '8%'
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: '3%',
        width: '80%',
        marginBottom: '3%',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.5,
        justifyContent: 'center'
    },
    referCode: {
        height: '11%'
    },
    referCodeText: {
        marginTop: '3%',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textEntery:{
        marginTop: '2%',
        height: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 5,
    },
    shareButton:{
        width: '30%',
        height: '80%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000944'
    },
    buttonText1: {
        color: 'white',
        fontSize: 18,
    },
    error: {
        marginTop:'1%',
        color: 'red',
        marginBottom: '2%'
    },
    bodyText: {
        lineHeight: 25,
        color: 'rgba(0,0,0,0.3)'
    },
    yourReferralsContainer: {
        height: '20%'
    },
    referralText: {
        marginTop: '3%',
        fontWeight: 'bold',
        fontSize: 18
    },
    referralsContainer: {
        width: '100%',
        height: '75%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    codeContainer:{
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subCodeContainer:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        borderRadius: 50,
    },
    codeCountText:{
        color: '#0077be',
        fontSize: 40,
    },
    arrowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '35%',
        height: '80%'
    },
    listBookings: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    codeSubText:{
        marginTop: '10%',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.4)',
        fontSize: 10
    },
    termsConditions: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        textDecorationLine: 'underline'
    }

})