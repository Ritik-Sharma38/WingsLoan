import React, { Component, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView, SafeAreaView} from "react-native";
import { useNavigation } from 'react-navigation-hooks';
import Slider from '@react-native-community/slider';

const ApplyLoan = () => {

    const [Requirement, setRequirement]=useState(['Monthly Salay RM1000 +', 'Malaysia I/C', 'As an employee'])
    const { navigate } = useNavigation();
    const [LoanVal, setLoanVal]=useState(0)
    const [LoanMon, setLoanMon]=useState(0)

    const LoanValFun = (val) => {
        if(LoanVal>=300 && LoanVal<=900){
            setLoanVal(LoanVal+val)
        }else if(LoanVal<=900 && val>0){
            setLoanVal(LoanVal+val)
        }
    }

    const LoanMonFun = (val) => {
        if(LoanMon>=3 && val<0){
            setLoanMon(LoanMon+val)
        }else if(LoanMon<=9 && val>0){
            setLoanMon(LoanMon+val)
        }
    }
 
    return(
        <ScrollView style={{ marginBottom: 50, flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View>
                    <ImageBackground style={styles.topBanner} source={require('../../assets/topBanner.png')}>
                        <TouchableOpacity onPress={() => navigate('HomeInitial')}>
                            <Image style={styles.leftArrow} source={require('../../assets/left-arrow.png')} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Apply Loan</Text>
                    </ImageBackground>
                </View>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardHeading}>Instant Loan</Text>
                            <View style={styles.cardBody}>
                                <View style={styles.cardLeftBody}>
                                    <Text style={styles.cardText}>Max amount</Text>
                                    <Text style={styles.LoanAmount}>RM 6000</Text>
                                    <Text style={styles.cardText}>3%-12% rate{'\n'}3-12 months</Text>
                                </View>
                                <View style={styles.cardRightBody}>
                                    <Text style={styles.requirementHeading}>REQUIREMENT</Text>
                                    {Requirement.map((item,index)=>(
                                        <Text key={index} style={styles.cardText}> - {item}</Text>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.CardButtonView}>
                                <View style={styles.cardButtonContainer}>
                                    <Text style={styles.cardButton}>Selected</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={styles.LoanAmountText}>Loan Amount</Text>
                            <View>
                                <View style={styles.loanSelectorContainer}>
                                    <TouchableOpacity onPress={()=> LoanValFun(-300)} style={styles.loanSelectorButton}>
                                        <Text style={styles.loanSelectorButtonText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.loanSelectorValue}>
                                        RM {LoanVal}
                                    </Text>
                                    <TouchableOpacity onPress={()=> LoanValFun(300)} style={styles.loanSelectorButton}>
                                        <Text style={styles.loanSelectorButtonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <Slider
                                    style={styles.slider}
                                    step={300}
                                    minimumValue={0}
                                    maximumValue={1200}
                                    minimumTrackTintColor="#000944"
                                    maximumTrackTintColor="#000000"
                                    onValueChange={value => setLoanVal(value)} 
                                />
                            </View>
                            <Text style={styles.LoanAmountText}>Loan Tenure</Text>
                            <View>
                                <View style={styles.loanSelectorContainer}>
                                    <TouchableOpacity onPress={()=> LoanMonFun(-3)} style={styles.loanSelectorButton}>
                                        <Text style={styles.loanSelectorButtonText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.loanSelectorValue}>
                                        {LoanMon} Months
                                    </Text>
                                    <TouchableOpacity onPress={()=> LoanMonFun(3)} style={styles.loanSelectorButton}>
                                        <Text style={styles.loanSelectorButtonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <Slider
                                    style={styles.slider}
                                    step={3}
                                    minimumValue={0}
                                    maximumValue={12}
                                    minimumTrackTintColor="#000944"
                                    maximumTrackTintColor="#000000"
                                    onValueChange={value => setLoanMon(value)}
                                />
                            </View>
                        </View>
                        <View style={styles.NextButtonView}>
                            <TouchableOpacity onPress={()=> navigate('LoanDetails')}style={styles.NextButtonContainer}>
                                <Text style={styles.NextButton}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ApplyLoan

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: 60,
        start: 0,
        end: 0
    },
    container: {
        flex: 1,
    },
    topBanner: {
        backgroundColor: '#20368F',
        height: 200,
        width: '100%',
        borderRadius: 20
    },
    leftArrow: {
        marginTop: 34,
        marginStart: 20
    },
    body: {
        width: '100%',
        height: '100%',
        marginBottom: '2%'
    },
    card: {
        marginTop: '5%',
        alignSelf: 'center',
        width: '90%',
        borderWidth:1,
        borderRadius: 10,
        borderColor: '#fff',
        elevation: 2,
        backgroundColor: '#fff'
    },
    cardContent: {
        padding: 15,
    },
    cardHeading: {
        color: '#000944',
        fontWeight: 'bold',
        fontSize: 20
    },
    cardBody: {
        marginTop: '2%',
        flexDirection: 'row',
    },
    cardText: {
        padding: 4,
        fontWeight: 'bold',
        color: '#000944',
        fontSize: 13
    },
    cardRightBody: {
        marginLeft: '5%',
    },
    requirementHeading: {
        padding: 4,
        fontWeight: 'bold',
        color: '#000944',
        fontSize: 15
    },
    LoanAmount:{
        padding: 4,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000944'
    },
    CardButtonView: {
        top: -10,
        width: '100%',
        alignItems: 'flex-end'
    },
    cardButtonContainer: {
        backgroundColor: '#000980',
        width: '25%',
        borderRadius: 10,
        padding: 4,
    },
    cardButton: {
        textAlign: 'center',
        color: '#fff'
    },
    LoanAmountText: {
        textAlign: 'center',
        color: 'rgba(0,0,0,0.5)'
    },
    slider: {
        marginTop: '3%',
        width: '100%',
        marginBottom: '4%',
    },
    loanSelectorContainer: {
        marginTop: '4%',
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loanSelectorButton: {
        backgroundColor: 'rgba(254, 245, 228,1)',
        borderRadius: 100,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loanSelectorButtonText: {
        fontSize: 30,
        fontWeight:'bold',
        color: '#000944'
    },
    loanSelectorValue: {
        fontSize: 25,
        fontWeight:'bold',
        color: '#000944'
    },
    NextButtonView: {
        width: '100%',
        alignItems: 'center'
    },
    NextButtonContainer: {
        backgroundColor: '#000944',
        width: '30%',
        borderRadius: 10,
        padding: 4,
        marginBottom: '4%',
    },
    NextButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
})


