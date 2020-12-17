import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import { Avatar, Badge, Accessory } from 'react-native-elements'

const Profile = () => {

    const { navigate } = useNavigation();
    const [error, setError]=useState('');
    const [buttons, setButtons]=useState({fab: 'Connect', gg: 'Disconnect'})
    const [userDetails, setUserDetails]=useState({
        firstName: 'Jon',
        lastName: 'Legas',
        prfileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2xap0OEs9WLFz7VKYY3O91tpzXIGP4ZyOQ&usqp=CAU',
        phoneNumber: '1128498713',
        email: 'jonlegas@gmail.com'
    })

    const goBack = () => {
        console.log('going back')
        navigate('HomeInitial')
    }

    const profileEdit = () => {

    }

    const fabConnect = () => {
        if(buttons.fab==="Disconnect"){
            setButtons({...buttons, fab: 'Connect'})
        }else{
            setButtons({...buttons, fab: 'Disconnect'})
        }
    }

    const GgConnect = () => {
        if(buttons.gg==="Disconnect"){
            setButtons({...buttons, gg: 'Connect'})
        }else{
            setButtons({...buttons, gg: 'Disconnect'})
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <ImageBackground
                    style={styles.profileBackgroundImage}
                    source={require('../../assets/cityImage2.jpg')}
                    >
                    <View style={styles.goBack}>
                        <Icon
                            size={30}
                            color='#fff'
                            name='arrow-back-ios'
                            type='MaterialIcons'
                            onPress={()=> goBack()}
                        />
                        <Icon
                            size={30}
                            color='#fff'
                            name='edit'
                            type='MaterialIcons'
                            onPress={()=> profileEdit()}
                        />
                    </View>
                    <View style={styles.subProfileContainer}>
                        <Text style={styles.profileText}>Profile</Text>
                        <View style={styles.profileIcon}>
                            <Avatar
                                rounded
                                avatarStyle={{color: 'orange'}}
                                source={{uri: userDetails.prfileImage}}
                                size="large"
                                >
                                <Accessory />
                            </Avatar> 
                        </View>
                        <Text style={styles.profileText}>{userDetails.firstName}</Text>
                    </View>      
                </ImageBackground> 
            </View>
            <View style={styles.body}>
                <View style={styles.profile}>
                    <Text style={styles.profileHeading}>Profile</Text>
                    <Text style={styles.profileNameText}>{userDetails.firstName + " " + userDetails.lastName}</Text>
                    <View style={styles.countryCode}>
                        <Image source={require('../../assets/malaysiaFlag.jpg')}/>
                        <Text style={styles.countryCodeText}>
                            +60
                        </Text>
                        <View style={styles.emptyView}/>
                        <Text style={styles.phoneNumber}>{userDetails.phoneNumber}</Text>
                    </View>
                    <View style={styles.emailContainer}>
                        <Text style={styles.emailText}>{userDetails.email}</Text>
                        <Icon
                            size={20}
                            color='green'
                            name='check'
                            type='MaterialIcons'
                        />
                    </View>
                </View>
                <View style={styles.linkedAccountsContainer}>
                    <Text style={styles.profileHeading}>Linked Accounts</Text>
                    <View style={styles.facebookContainer}>
                        <Text style={styles.accountsText}>Facebook</Text>
                        <TouchableOpacity onPress={()=> fabConnect()} style={buttons.fab==='Connect'? styles.facebookButton: styles.facebookButtonOff}>
                            <Text style={buttons.fab==='Connect'? styles.fabText: styles.ggText}>{buttons.fab}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.googleContainer}>
                        <Text style={styles.accountsText}>Google</Text>
                        <TouchableOpacity onPress={()=> GgConnect()} style={buttons.gg==='Disconnect'? styles.googleButton: styles.googleButtonOff}>
                            <Text style={buttons.gg==='Disconnect'? styles.ggText: styles.fabText}>{buttons.gg}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",   
    },
    profileContainer:{
        width: '100%',
        height: '35%',
        borderColor: 'rgba(0,0,137,1)',
        borderRadius: 30,
    },
    profileBackgroundImage:{
        width: '100%',
        height: '100%',
    },
    goBack:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
    },
    subProfileContainer:{
        width: '100%',
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    profileIcon:{
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 50,
    },
    profileText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    body: {
        width: '100%',
        alignItems: 'center',
        height: '75%'
    },
    profile: {
        justifyContent: 'space-around',
        width:'90%',
        height: '40%',
    },
    profileHeading: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.5)',
    },
    profileNameText: {
        fontSize: 18,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: 'rgba(0,0,0,0.02)'
    },  
    countryCode:{
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: 'rgba(0,0,0,0.02)'
    },
    countryCodeText: {
        paddingLeft: 10,
        fontSize: 18,
        paddingRight: 5,
    },
    emptyView:{
        width:'1%',
        height: '60%',
        borderRightWidth: 1,
        borderColor:'rgba(0,0,0,0.2)',
    },
    phoneNumber: {
        paddingLeft: 10,
        fontSize: 18
    },
    emailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: 'rgba(0,0,0,0.04)'
    },
    emailText: {
        fontSize: 18,
    },
    linkedAccountsContainer: {
        width: '90%',
        height: '30%',
        justifyContent: 'space-around',
    },
    facebookContainer: {
        height: '15%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    facebookButton: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 25,
    },
    facebookButtonOff: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 25,
        backgroundColor: 'orange'
    },
    googleContainer: {
        height: '15%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    googleButton: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 25,
        backgroundColor: 'orange'
    },
    googleButtonOff: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 25,
    },
    accountsText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    fabText: {
        color: 'orange'
    },
    ggText: {
        color: 'white'
    }
    
})
  