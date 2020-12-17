import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import { ListItem, Avatar} from 'react-native-elements';

const Notifications = () => {

    const { navigate } = useNavigation();
    const [refresh, setRefresh]=useState(false);
    const [notificationData, setNotificationData]=useState([
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
        {
            icon: require('../../assets/bellIcon.jpg'),
            title: 'Application Approved',
            notification: '3000 RM Loan Request'
        },
    
        
    ])

    const goBack = () => {
        navigate('HomeInitial')
    }

    const deleteListItem = () => {
        notificationData.pop()
        if(refresh){
            setRefresh(false)
        }else{
            setRefresh(true)
        }
    }
    
    var data = notificationData.length===0?true:false

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <Icon
                        size={35}
                        color='#000'
                        name='close'
                        type='MaterialIcons'
                        onPress={()=> goBack()}
                    />
                    <Text style={styles.notificationText}>
                        Notifications
                    </Text>
                    <Icon
                        size={35}
                        color='rgba(255,187,2,1)'
                        name='delete-sweep'
                        type='MaterialIcons'
                        onPress={()=> deleteListItem()}
                    />
                </View>
                <View style={styles.line}></View>
                <View style={styles.body}>
                    {data && (
                        <View style={styles.subBodyL}>
                            <View style={styles.noNotificationContainer}>
                                <Text style={styles.noNotificationText}>No Notifications</Text>
                                <Text style={styles.updateText}>Check back here for updates</Text>
                            </View>
                            <Image
                                style={styles.image}
                                source={require('../../assets/noNotification.jpg')}
                            />
                        </View>
                    )}
                    {!data && (
                        <ScrollView style={styles.subBody}>
                            {notificationData.map((item, index) => (
                                <View key={index} style={styles.list}>
                                    <ListItem key={index}>
                                        <Icon 
                                            size={30}
                                            color='rgba(255,187,2,1)'
                                            name='notifications'
                                            type='MaterialIcons'
                                            />
                                        <ListItem.Content>
                                            <ListItem.Title>{item.title}</ListItem.Title>
                                            <ListItem.Subtitle>{item.notification}</ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron />
                                    </ListItem>
                                </View>
                            ))}
                        </ScrollView>
                    )}
                </View>
            </View>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    subContainer:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    header:{
        width: '100%',
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    notificationText:{
        fontSize: 25,
    },
    line:{
        width: '90%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.04)'
    },  
    body: {
        width: '95%',
        height: '80%',
    },
    subBodyL:{
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    subBody:{
        width: '100%',
        height: '100%',
        
    },
    image: {
        marginTop: '10%',
        width: '90%',
        height: '39%',
    },
    noNotificationContainer:{
        justifyContent: 'space-around',
        height: '10%',
        width: '100%',
    },
    noNotificationText:{
        textAlign: 'center',
        fontSize: 18
    },
    updateText:{
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(0,0,0,0.5)'
    },
    list: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
        width: '90%',
        marginTop: '2%',
        justifyContent:'center',
        alignSelf: 'center'
    }
    
})
  