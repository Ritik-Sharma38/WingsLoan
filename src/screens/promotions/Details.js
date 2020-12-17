import React, {useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation ,useNavigationParam } from 'react-navigation-hooks';
import { ListItem} from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const Details = () => {

    const { navigate } = useNavigation();
    const data = useNavigationParam('Details')
    console.log("details",data)

    const goBack = () => {
        navigate('Promotions')
    }
    const ApplyNow = () => {
        navigate('HomeInitial')
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
                    <Text style={styles.helpHeading}>
                        Details
                    </Text>
                </View>
                <View style={styles.body}>
                   
                        <View style={styles.bodyImageContainer}>
                            <ImageBackground
                                source={data.imageUri}
                                style={styles.bodyImage}
                                >
                                <View style={styles.imageOverlayContainer}>
                                    <Text style={styles.heading1}>Get up to yearly weaver</Text>
                                    <Text style={styles.heading2}>RM2152,251</Text>
                                    <Text style={styles.heading3}>Easy promo</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.promoContainer}>
                            <Text style={styles.heading0}>
                                {data.headLine}
                            </Text>
                            <View style={styles.promoPramContainer}>
                                <View style={styles.promoPram1}>
                                    <Text style={styles.promoPram}> Easy promo</Text>
                                    <Text style={styles.promoPram}> Valid Date</Text>
                                </View>
                                <View style={styles.promoPram2}>
                                    <Text style={styles.promoPram}>
                                        Get up to yearly weaver
                                    </Text>
                                    <Text style={styles.promoPram}>
                                        Nove 20, 2021
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.promoHeading}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                            </Text>
                            <Text style={styles.promoDescription}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            </Text>
                            <TouchableOpacity onPress={()=> ApplyNow()} style={styles.buttonContainer}>
                                <Text style={styles.button}>
                                    Apply Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default Details

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
        //height: '10%',
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    helpHeading: {
        width: '90%',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    body: {
        width: '100%',
        height: '100%',
        marginBottom: '3%',
        alignItems: 'center',
    },
    bodyImageContainer:{
        marginTop: '5%',
        width: '90%',
    },
    bodyImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.71,
    },  
    imageOverlayContainer:{
        alignSelf: 'center',
        width: '90%',
        height: '100%',
        justifyContent: 'space-around'
    },
    heading1: {
        color: '#fff',
        fontSize: 20
    },
    heading2: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    heading3: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom:'10%'
    },
    promoContainer: {
        width: '90%',
        height: '60%',
        justifyContent: 'space-around',
    },
    heading0: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    promoPramContainer: {
        justifyContent: 'space-between',
        height: '10%'
    },
    promoPram1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    promoPram2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    promoPram: {
        color: 'rgba(0,0,0,0.5)'
    },
    promoHeading: {
        fontWeight: 'bold'
    },
    promoDescription: {
        color: 'rgba(0,0,0,0.5)'
    },
    buttonContainer: {
        width: '100%',
        backgroundColor: '#000944',
        borderRadius: 5,
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        color: '#fff'
    }

})
  