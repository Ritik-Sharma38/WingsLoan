import React, {useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import { ScrollView } from "react-native-gesture-handler";

const Promotions = () => {

    const { navigate } = useNavigation();
    const [promotions, setPromo]=useState([
        {
            imageUri: require('../../assets/promotions/promo1.png'),
            imageOverLay: "Gold",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo2.png'),
            imageOverLay: "Easy",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo3.png'),
            imageOverLay: "Business",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo1.png'),
            imageOverLay: "Gold",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo2.png'),
            imageOverLay: "Gold",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo1.png'),
            imageOverLay: "Gold",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo2.png'),
            imageOverLay: "Easy",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo3.png'),
            imageOverLay: "Business",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo1.png'),
            imageOverLay: "Gold",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        },
        {
            imageUri: require('../../assets/promotions/promo2.png'),
            imageOverLay: "Gold",
            headLine: '3 months premium promo',
            subLine: 'Gold Package',
        }
    ])
    const goBack = () => {
        console.log('going back')
        navigate('HomeInitial')
    }

    const Apply = (data) => {
        console.log('going back')
        console.log(data)
        navigate('Details', {Details: data})
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
                        Promotions
                    </Text>
                </View>

                <ScrollView style={styles.body}>
                    <View>
                        {promotions.map((item,index)=>(
                                <View key={index} style={styles.card}>
                                    <View style={styles.imageContainer}>
                                        <ImageBackground
                                            style={styles.image}
                                            source={item.imageUri}
                                            >
                                            <Text style={styles.overlayText}>{item.imageOverLay}</Text>
                                        </ImageBackground>
                                    </View>
                                    <View style={styles.rightCard}>
                                        <Text style={styles.headLine}>
                                            {item.headLine}
                                        </Text>
                                        <Text>{item.subLine}</Text>
                                        <TouchableOpacity onPress={()=> Apply(item)} style={styles.buttonContainer}>
                                            <Text style={styles.button}>Apply</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}

export default Promotions

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
        marginBottom: '3%'
    },
    card: {
        marginTop: '5%',
        alignSelf: 'center',
        width:'90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer:{
        marginTop: '3%',
        width: '45%',
        marginBottom: '3%'
    },
    image: {
        aspectRatio: 1.71,
        justifyContent: 'center'
    },
    rightCard: {
        width: '50%',
        justifyContent: 'space-around'
    },
    overlayText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headLine: {
        fontWeight: 'bold'
    },
    subLine: {
        color: 'rgba(0,0,0,0.5)'
    },
    buttonContainer: {
        marginTop: '15%',
        backgroundColor: '#000944',
        width: '40%',
        alignItems: 'center',
        borderRadius: 10,
    },
    button: {
        color: 'white',
        padding: 5,
    }
})
  