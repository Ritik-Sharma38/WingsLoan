import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ChatScreen } from 'react-native-easy-chat-ui'
import { useNavigation } from 'react-navigation-hooks';
 
const CustomerChat =()=>{
    const { navigate } = useNavigation();
    const [messages, setMessages]=useState(
        [
            {
                id: 1,
                type: 'text',
                content: 'How can I help you',
                targetId: '12345678',
                chatInfo: {
                avatar: require('../../assets/user.png'),
                id: '12345678',
                nickName: 'Simon'
                },
                renderTime: false,
                sendStatus: 0,
                time: new Date(2020, 0, 1, 12, 33, 24, 567).getTime()
            },
            {
                id: 2,
                type: 'text',
                content: 'I need RM1500 easy pay loan',
                targetId: '88886666',
                chatInfo: {
                avatar: require('../../assets/splash.png'),
                id: '12345678'
                },
                renderTime: false,
                sendStatus: 0,
                time: new Date(2020, 0, 1, 12, 34, 24, 567).getTime()
            },
            {
                id: 3,
                type: 'text',
                content: 'Sure sir',
                targetId: '12345678',
                chatInfo: {
                avatar: require('../../assets/user.png'),
                id: '12345678',
                nickName: 'Simon'
                },
                renderTime: false,
                sendStatus: 0,
                time: new Date(2020, 0, 1, 12, 34, 58, 567).getTime()
            },
            {
                id: 4,
                type: 'text',
                content: 'Thank you sir !',
                targetId: '88886666',
                chatInfo: {
                avatar: require('../../assets/splash.png'),
                id: '12345678'
                },
                renderTime: false,
                sendStatus: 0,
                time: new Date(2020, 0, 1, 12, 35, 24, 567).getTime()
            },
        ]
    )
    const [userProfile, setUserProfile]=useState({
        id: '88886666',
        avatar: require('../../assets/splash.png'),
        nickName: 'Ritik'
    })
    const [nextId, setNextId]=useState(5)

    const sendMessage = (type, content, isInverted) => {
        var msg={
            id: nextId ,
            type: 'text',
            content: content,
            targetId: '88886666',
            chatInfo: {
            avatar: require('../../assets/splash.png'),
            id: '12345678'
            },
            renderTime: false,
            sendStatus: 0,
            time: Date.now()
        }
        // remove the variable msg2 and line109 down messages.push(msg2) to stop mimicking xd it was created for fun
        var msg2={
            id: nextId ,
            type: 'text',
            content: content,
            targetId: '12345678',
            chatInfo: {
            avatar: require('../../assets/user.png'),
            id: '12345678'
            },
            renderTime: false,
            sendStatus: 0,
            time: Date.now()
        }
        console.log(type, content, isInverted, 'msg')
        messages.push(msg)
        messages.push(msg2)
        setNextId(messages[messages.length-1].id+1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.profileBody}>
                    <Icon
                        size={20}
                        color='#fff'
                        name='arrow-back-ios'
                        type='MaterialIcons'
                        onPress={()=> navigate('HomeInitial')}
                    />
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../../assets/user.png')}
                            style={styles.userProfileImage}
                        />
                    </View>
                    <Text></Text>
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>Simon L.</Text>
                    <Text style={styles.userDesigination}>Customer manager</Text>
                </View>
                <View style={styles.chatBody}>
                    <ChatScreen
                        ref={(e) => chat = e}
                        messageList={messages}
                        androidHeaderHeight={0}
                        sendMessage={sendMessage}
                        placeholder='Type a message....'
                        usePopView={false}
                        chatWindowStyle={styles.chatWindow}
                        userProfile={userProfile}
                        leftMessageBackground={'rgba(0,0,0,0.04)'}
                        rightMessageBackground={'rgba(254,153,1,0.8)'}
                        inputOutContainerStyle={styles.inputOutContainer}
                        rightMessageTextStyle={styles.rightMessageText}
                        usePlus={false}
                        useEmoji={false}
                        useVoice={false}
                    />
                </View>
            </View>
        </View>
      
    )
}

export default CustomerChat

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chatWindow: {
        backgroundColor: 'white',
    },
    inputOutContainer:{
        width: '100%'
    },
    rightMessageText:{
        color: '#fff'
    },
    userProfileImage: {
        borderRadius: 50,
        width: '100%',
        height: undefined,
        aspectRatio: 0.9107
    },
    body: {
        backgroundColor: 'rgba(33,54,143,1)',
        width: '100%',
        height:'100%',
        justifyContent: 'flex-end'
    },
    profileBody:{
        width: '95%',
        height: '10%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatBody: {
        width: '100%',
        height: '82%',
    },
    profileContainer: {
        backgroundColor: '#fff',
        width: '23%',
        height: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems:'center',
        bottom: '-10%',
        left: '-15%',
        borderWidth: 5,
        borderColor: '#fff'
    },
    userDetails: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '10%',
        zIndex: -1,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userDesigination: {
        color: 'rgba(0,0,0,0.5)',
    }
})