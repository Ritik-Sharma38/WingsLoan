import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export default class Loan extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {
            icon: 'toggle-switch'
        }
    }

    notifcationSwitch(){
        console.log("here")
        if(this.state.icon==="toggle-switch"){
            console.log("here too")
            this.setState({icon: "toggle-switch-off"})
        }else{
            this.setState({icon: "toggle-switch"})
        }
    }

    async Logout() {
        await AsyncStorage.removeItem('ReferCodeState')
        await auth().signOut()
        this.props.onPressLogout()
    }
   
    render() {
        return (
            <ScrollView style={{ marginBottom: 50, flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <View>
                        <ImageBackground style={styles.topBanner} source={require('../../assets/topBanner.png')}>
                            <TouchableOpacity onPress={() => this.props.onPressBack()}>
                                <Image style={styles.leftArrow} source={require('../../assets/left-arrow.png')} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Settings</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.optionsContainer}>
                        <View style={styles.notificationContainer}>
                            <View style={styles.notification}>
                                <Icon
                                    size={30}
                                    name='bell-ring'
                                    type='MaterialCommunityIcons'    
                                    />
                                <Text style={styles.notificationText}>Notifications</Text>
                            </View>
                            <View>
                                <Icon
                                    size={50}
                                    name={this.state.icon}
                                    color='orange'
                                    type='MaterialCommunityIcons'
                                    onPress={() => this.notifcationSwitch()}
                                />
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=> this.Logout()} style={styles.logoutContainer}>
                            <Icon
                                size={30}
                                name='logout'
                                type='MaterialCommunityIcons' 
                            />
                            <Text style={styles.notificationText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: 80,
        start: 0,
        end: 0
    },
    container: {
        flex: 1
    },
    topBanner: {
        backgroundColor: '#20368F',
        height: 220,
        width: '100%',
        borderRadius: 10
    },
    leftArrow: {
        marginTop: 34,
        marginStart: 20
    },
    optionsContainer:{
        alignSelf: 'center',
        width: '95%'
    },
    notificationContainer: {
        marginTop:'5%',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    notification: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    notificationText:{
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    logoutContainer:{
        marginTop:'5%',
        flexDirection:'row',
        alignItems: 'center',
    }
})



