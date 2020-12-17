import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, PermissionsAndroid } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ImagePicker from 'react-native-image-picker';

const ReferralCode = () => {

    const { navigate } = useNavigation();
    const [ codeImage, setCodeImg]=useState('')
    const [ code, setCode]=useState('')
    const [error, setError]=useState('')

    const goBack = () => {
        console.log('going back')
        navigate('Verification')
    }

    const SignUP = () => {
        if(code.length===5){
            console.log("requested to signup")
            navigate('SetupProfile')
        }else{
            setError("Invalid Referral code")
        }
    }

    const SignUPWithoutReferral = () => {
        navigate('SetupProfile')
        console.log("requested to signup without referral")
    }

    const pickQrCode = async() => {
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Camera Permission',
                message: 'App needs access to your camera ',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('You can use the camera');
            } else {
              console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
        
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              {
                title: 'Storage read Permission',
                message: 'App needs access to your read storage ',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('You can read to storage');
            } else {
              console.log('read storage permission denied');
            }
        } catch (err) {
            console.warn(err);
        }

        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Storage write Permission',
                message: 'App needs access to your write storage ',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('You can write to storage');
            } else {
              console.log('write storage permission denied');
            }
        } catch (err) {
            console.warn(err);
        }

        ImagePicker.showImagePicker((response) => {
    
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };  
                setCodeImg(source.uri)
                console.log(source)
            }
        });
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
                        Referral Code
                    </Text>
                </View>
                <View style={styles.codeText}>
                    <Text style={styles.sentCodeText}>
                        Add the QR code from gallery
                    </Text>
                    <TouchableOpacity onPress={() => pickQrCode()} style={styles.qrImageView}>
                        {codeImage!==''?false:true && (
                            <Image
                                source={require('../../assets/qrCode.jpg')}
                                style={styles.qrImage}
                            />
                        )}
                        {codeImage===''?false:true && (
                            <Image
                                source={{uri: codeImage}}
                                style={styles.qrImage}
                            />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.sentCodeText}>
                        or Enter the referral code
                    </Text>
                </View>
                <OTPInputView
                    style={{width: '80%', height: '20%'}}
                    pinCount={5}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code => { setCode(code) })}
                />
                <Text style={styles.error}>
                        {error}
                    </Text>
                <View style={styles.ButtonView}>
                    <TouchableOpacity style={styles.button1} onPress={() => SignUP()}>
                        <Text style={styles.buttonText1}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => SignUPWithoutReferral()}>
                        <Text style={styles.buttonText2}>
                            Sign up without referral
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ReferralCode

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    goBack:{
        width: '100%',
        padding: 30,
    },
    referralCode: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    referralCodeText: {
        color: 'rgba(0, 0, 139, 1)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '10%'
    },
    codeText: {
        alignItems: 'center',
    },
    sentCodeText: {
        fontSize: 24
    },
    qrImageView: {
        marginTop: '3%',
        width: '40%',
        marginBottom: '3%'
    },
    qrImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        justifyContent: 'center'
    },
    underlineStyleBase: {
        color: 'black'
    },
    underlineStyleHighLighted: {
        borderColor: "rgba(0,0,0,0.5)",
    },
    ButtonView:{
        width: '90%',
    },
    button1: {
        height: '18%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000944'
    },
    button2: {
        marginTop: '7%',
        height: '18%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: '#000944'
    },
    buttonText1: {
        color: 'white',
        fontSize: 18,
    },
    buttonText2: {
        color: '#000944',
        fontSize: 18,
    },
    error: {
        color: 'red',
        marginBottom: '2%'
    }
})