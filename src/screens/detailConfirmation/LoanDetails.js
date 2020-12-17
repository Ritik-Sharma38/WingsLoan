import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import {Picker} from '@react-native-picker/picker';

const LoanDetails = () => {

    const { navigate } = useNavigation();
    const [currentState, setCurState]=useState('Select state')
    const [employee, setEmployee]=useState(true)
    const [userDetails, setUserDetails]=useState({
        FullName: '',
        phoneNumber: 0,
        state: ''
    })
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
        navigate('SetupProfile')
    }

    const Switch = () => {
        if(employee){
            setEmployee(false)
        }else{
            setEmployee(true)
        }
    }

    const confirmDetails = () => {
        console.log("details confirmed")
        navigate('SuccessfulMsg')
    }

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <Icon
                        size={25}
                        color='#000'
                        name='arrow-back-ios'
                        type='MaterialIcons'
                        onPress={()=> goBack()}
                    />
                    <Text style={styles.detailsConfirmationText}>
                        Details confirmation
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyImageContainer}>
                        <ImageBackground
                            source={require('../../assets/detailConfirmation.jpg')}
                            style={styles.bodyImage}
                        />
                    </View>
                    <View style={styles.TextInput}>
                        <TextInput
                            placeholder="Enter you Full Name"
                            style={styles.textInputField}
                            PlaceholderTextColor='rgba(0,0,0,1)'
                            onChangeText = { FullName => userDetails.FullName=FullName}
                        />
                        <TextInput
                            placeholder="Enter your phone number"
                            style={styles.textInputField}
                            PlaceholderTextColor='black'
                            keyboardType='numeric'
                            onChangeText = { phoneNumber => userDetails.phoneNumber=phoneNumber}
                        />
                        <View style={styles.textInputField}>
                            <Picker
                                selectedValue={currentState}
                                style={styles.pickerInputfield}
                                mode={'dropdown'}
                                onValueChange={(itemValue, itemIndex) => setCurState(itemValue) }
                                >
                                {stateList.map((item, index)=>(
                                    <Picker.Item key={index} label={item} value={item} />
                                ))}
                            </Picker>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => Switch() } style={employee ? styles.employeeContainerOnn : styles.employeeContainerOff}>
                            <View style={styles.employee}>
                                <Text style={styles.employeText}>
                                    Employee
                                </Text>
                                <Icon
                                    size={50}
                                    color='#000'
                                    name='people'
                                    type='MaterialIcons'
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Switch() } style={employee ? styles.employerContainerOff : styles.employerContainerOnn}>
                            <View style={styles.employer}>
                                <Text style={styles.employeText}>
                                    Employees
                                </Text>
                                <Icon
                                    size={50}
                                    color='#000'
                                    name='person'
                                    type='MaterialIcons'
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=> confirmDetails()} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoanDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    subContainer:{
        width: '100%',
        alignItems: 'center',
    },
    header:{
        width: '100%',
        padding: 30,
        flexDirection: 'row'
    },
    detailsConfirmationText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft:'10%'
    },
    body: {
        width: '100%',
        alignItems: 'center',
    },
    bodyImageContainer:{
        width: '80%',
    },
    bodyImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.6,
    },    
    TextInput: {
        marginTop: '10%',
        width: '90%',
    },
    textInputField: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        marginTop: '5%',
        paddingLeft: 5,
        borderRadius: 2,
    },
    pickerInputfield: {
        color: 'rgba(0,0,0,0.4)',
    },
    buttonContainer: {
        marginTop: '5%',
        flexDirection: 'row',
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    employeeContainerOnn: {
        backgroundColor: 'rgba(254,153,1,1)',
        width: '45%',
        marginRight: '10%',
        alignItems: 'center',
        borderWidth:1,
        borderRadius: 10,
        elevation: 2,
        borderColor: '#fff'
    },
    employeeContainerOff: {
        backgroundColor: '#fff',
        width: '45%',
        marginRight: '10%',
        alignItems: 'center',
        borderWidth:1,
        borderRadius: 10,
        elevation: 2,
        borderColor: '#fff'
    },
    employerContainerOnn: {
        backgroundColor: 'rgba(254,153,1,1)',
        width: '45%',
        alignItems: 'center',
        borderWidth:1,
        borderRadius: 10,
        elevation: 2,
        borderColor: '#fff'
    },
    employerContainerOff: {
        backgroundColor: '#fff',
        width: '45%',
        alignItems: 'center',
        borderWidth:1,
        borderRadius: 10,
        elevation: 2,
        borderColor: '#fff'
    },
    employee: {
        alignItems: 'center'
    },
    employer: {
        alignItems:'center'
    },
    employeText: {
        fontSize: 18,
    },
    submitButton: {
        width: '90%',
        height: '8%',
        marginTop: '5%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000944'
    },
    submitButtonText: {
        color: 'white',
        fontSize: 26,
    },
    
})
  