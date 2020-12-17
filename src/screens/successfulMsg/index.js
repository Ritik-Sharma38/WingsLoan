import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';

const SuccessfulMsg = () => {

    const { navigate } = useNavigation();
    const [pageIndex, setPageIndex]=useState(0)// Loan status we will receive from data base which will decide the page index
    const [statusPageData, setPageData] = useState([
        {
            headingText: "Your loan application has been\nSuccessfully Submitted",
            barImage:  require('../../assets/loanPendingBar.jpg'),
            barPramsDetae: {
                pending: '20-10-2020',
                approved: '',
                completed: '',
            },
            bodyImage: require('../../assets/pendingPage.jpg'),
            buttons: {
                Done: 'Done',
                contact: 'Contact Your Representative'
            },
        },
        {
            headingText: "Congratulations!\nYour loan application has been\nApproved",
            barImage: require("../../assets/loanSubmittedBar.jpg"),
            barPramsDetae: {
                pending: '20-10-2020',
                approved: '19-11-2020',
                completed: '',
            },
            bodyImage: require('../../assets/approvedPage.jpg'),
            buttons: {
                Done: 'Done',
                contact: 'Contact Your Representative'
            },
        },
        {
            headingText: "Sorry!\nYour loan application has been\nRejected",
            barImage: require("../../assets/loanRejectedBar.jpg"),
            barPramsDetae: {
                pending: '20-10-2020',
                approved: '19-11-2020',
                completed: '',
            },
            bodyImage: require('../../assets/rejectedPage.jpg'),
            buttons: {
                Done: 'Check Why ?',
                contact: 'Contact Your Representative'
            },
        },
        {
            headingText: "Thank you!\nYour loan application has been\nCompleted",
            barImage: require('../../assets/loanApprovedBar.jpg'),
            barPramsDetae: {
                pending: '20-10-2020',
                approved: '19-11-2020',
                completed: '22-11-2020',
            },
            bodyImage: require('../../assets/lonApprovedPage.jpg'),
            buttons: {
                Done: 'Done',
                contact: 'Apply new loan'
            },
        }
    ])
    const goBack = () => {
        console.log('going back')
        navigate('DetailConfirmation')
    }

    const Switch = (code) => {
        if(employee){
            setEmployee(false)
        }else{
            setEmployee(true)
        }
    }

    const submit = () => {
        console.log("redirecting to home page")
        navigate('HomeInitial')
    }

    const contactPage = () => {
        console.log("redirecting to home page")
        navigate('HomeInitial')
    }

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <Icon
                        size={35}
                        color='#000'
                        name='arrow-back-ios'
                        type='MaterialIcons'
                        onPress={()=> goBack()}
                    />
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyText}> 
                        <Text style={styles.bodyHeaderText}>
                            {statusPageData[pageIndex].headingText}
                        </Text>
                    </View>
                    <View style={styles.statusbarImageContainer}>
                        <ImageBackground
                            source={statusPageData[pageIndex].barImage}
                            style={styles.statusBarImage}
                        />
                    </View>
                    <View style={styles.statusTextConatiner}>
                        <View style={styles.statusTextLeft}>
                            <Text style={styles.statusText}>
                                Pending
                            </Text>
                            <Text style={styles.statusText}>
                                {statusPageData[pageIndex].barPramsDetae.pending}
                            </Text>
                        </View>
                        <View style={styles.statusTextCenter}>
                            <Text style={styles.statusText}>
                                Approved
                            </Text>
                            <Text style={styles.statusText}>
                                {statusPageData[pageIndex].barPramsDetae.approved}
                            </Text>
                        </View>
                        <View style={styles.statusTextRight}>
                            <Text style={styles.statusText}>
                                Completed
                            </Text>
                            <Text style={styles.statusText}>
                                {statusPageData[pageIndex].barPramsDetae.completed}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bodyImageContainer}>
                        <ImageBackground
                            source={statusPageData[pageIndex].bodyImage}
                            style={styles.bodyImage}
                        />
                    </View>
                    <TouchableOpacity onPress={()=> submit()} style={styles.doneButton}>
                        <Text style={styles.doneButtonText}>{statusPageData[pageIndex].buttons.Done}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> contactPage()} style={styles.contactButton}>
                        <Text style={styles.contactButtonText}>{statusPageData[pageIndex].buttons.contact}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SuccessfulMsg

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
    body: {
        width: '90%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyText: {
        width: '100%',
    },
    bodyHeaderText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        lineHeight: 40
    },
    statusbarImageContainer:{
        marginTop: '10%',
        width: '90%',
        height: '5%',
    },
    statusBarImage: {
        marginTop: '3%',
        width: '100%',
        height: '80%',
    },
    statusBar: {
        flexDirection: 'row',
        marginTop: '5%',
        width: '90%',
        height: '0.5%',
    },
    statusTextConatiner:{
        width: '100%',
        height: '5%',
        flexDirection: 'row'
    },
    statusTextLeft:{
        width: '30%',
        height: '100%',
    },
    statusTextCenter:{
        alignItems: 'center',
        marginLeft: '5%',
        width: '30%',
        height: '100%',
    },
    statusTextRight:{
        alignItems: 'flex-end',
        marginLeft: '5%',
        width: '30%',
        height: '100%',
    },
    statusText: {
        color: 'rgba(0,0,0,0.5)',
    },
    circle1Container:{
        width:'6%',
        height: '600%',
        top: '-3%',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'rgba(175,175,175,1)',
        backgroundColor: 'rgba(175,175,175,1)',
        
    },
    circle2Container:{
        width:'6%',
        height: '600%',
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'rgba(175,175,175,1)',
        backgroundColor: 'rgba(175,175,175,1)',
    },
    bodyImageContainer:{
        marginTop: '10%',
        width: '80%',
    },
    bodyImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.3,
    },    
    doneButton: {
        width: '90%',
        height: '6%',
        marginTop: '10%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000944'
    },
    contactButton: {
        width: '90%',
        height: '6%',
        marginTop: '5%',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#000944'
    },
    doneButtonText: {
        color: 'white',
        fontSize: 22,
    },
    contactButtonText: {
        color: '#000944',
        fontSize: 22,
    },
    
})
  