import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground, FlatList, ScrollView } from "react-native";

import ProgressCircle from 'react-native-progress-circle'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            promotionArray: [
                require('../../assets/image1.png'),
                require('../../assets/image2.png'),
                require('../../assets/image3.png'),
            ]
        }
    }

    renderPromotion = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => this.props.onPressPromotions()}>
                <Image style={styles.image} source={item} />
            </TouchableOpacity>
        )
    }
   
    render() {
        return (

            <ScrollView>

                <SafeAreaView style={styles.container}>




                    <View>
                        <ImageBackground style={styles.topBanner} source={require('../../assets/topBanner.png')}>

                            <TouchableOpacity onPress={() => this.props.onPressMenu()}>
                                <Image style={styles.leftArrow} source={require('../../assets/menu.png')} />
                            </TouchableOpacity>

                            <View style={styles.nameContainer}>
                                <View>
                                    <Text style={styles.hello}>Hello</Text>
                                    <Text style={styles.name}>Jon L.</Text>
                                </View>
                                <TouchableOpacity onPress={()=> this.props.onPressNotification()}>
                                    <Image source={require('../../assets/notification.png')} />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                        <View style={styles.totalContainer}>
                            <View style={styles.totalCutomizeContainer}>
                                <Text style={styles.totalLoan}>Total Loan</Text>
                                <Text style={styles.customize}>  +   Customize Loan  </Text>
                            </View>
                            <Text style={styles.amount}>RM 1500.00</Text>

                            <View style={styles.loanHistoryContainer}>
                                <Text style={styles.loanHistory}>{"Loan History > "}</Text>
                                <View style={styles.dueContainer}>
                                    <Image source={require('../../assets/tick.png')} />
                                    <Text style={styles.dueDate}>Due : 19 - 11 - 2021</Text>
                                </View>
                            </View>

                        </View>
                    </View>


                    <Text style={styles.proPlan}>PRO PLANS</Text>
                    <View style={styles.statusContainer}>
                        <TouchableOpacity style={[styles.completedContainer]}>
                            <Image source={require('../../assets/loan.png')} />
                            <Text style={[styles.approved]}>Easy Plan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.completedContainer]}>
                            <Image source={require('../../assets/wallet.png')} />
                            <Text style={[styles.approved]}>Commercial Plan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.completedContainer]}>
                            <Image source={require('../../assets/house.png')} />
                            <Text style={[styles.approved]}>Business Plan</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.proPlan}>PROMOTIONS</Text>
                    <View
                    >
                        <FlatList
                            renderItem={this.renderPromotion}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.promotionList}
                            data={this.state.promotionArray} />
                    </View>




                    <Text style={styles.proPlan}>LOAN PACKAGES</Text>
                    <TouchableOpacity onPress={()=> this.props.onPressApplyLoan()} style={styles.loanPackageContainer}>

                        <Image style={styles.hotDeals} source={require('../../assets/hot-deals.png')} />


                        <View style={styles.instantLoanContainer}>
                            <Text style={styles.instantLoan}>Instant{"\n"}Loan</Text>

                            <View style={styles.gridContainer}>
                                <Image source={require('../../assets/grid.png')} />
                                <Text style={styles.lowestRate}>Lowest interest</Text>
                            </View>
                            <View style={styles.gridContainer}>
                                <Image source={require('../../assets/blue-tick.png')} />
                                <Text style={styles.lowestRate}>Fast Approval</Text>
                            </View>
                        </View>


                        <View style={styles.amountContainer}>
                            <View>
                                <Text style={styles.loanAmount}>RM 6000</Text>
                                <Text style={styles.maxAmount}>Max Amount</Text>
                            </View>

                            <View>
                                <Text style={[styles.loanAmount]}>Monthly Salary RM1000</Text>
                                <Text style={styles.maxAmount}>3% - 12% | 3-12 months</Text>
                            </View>

                            <View style={{ marginTop: -25 }}>
                                <ProgressCircle
                                    percent={70}
                                    radius={30}
                                    borderWidth={5}
                                    shadowColor="#C1C1C1"
                                    bgColor="#fff"
                                    color="#F7931D"

                                >
                                    <Text style={{ fontSize: 12, textAlign: 'center',color:'#002C65',fontWeight:'bold' }}>75 %</Text>
                                </ProgressCircle>

                                <Text>Apply</Text>
                            </View>
                        </View>

                    </TouchableOpacity>




                </SafeAreaView>
            </ScrollView>

        )
    }

}


const styles = StyleSheet.create({
    loanAmount: {
        color: '#000944',
        fontWeight: 'bold',
        fontSize: 14
    },
    maxAmount: {
        color: '#767676',
        fontSize: 10,
        marginTop: 10
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    gridContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lowestRate: {
        fontSize: 12,
        marginStart: 5
    },
    instantLoan: {
        color: '#000944',
        fontWeight: 'bold',
        fontSize: 14
    },
    instantLoanContainer: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 10,
        justifyContent: 'space-evenly'
    },
    loanPackageContainer: {
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        alignSelf: 'center',
        height: 150,
        borderRadius: 20,
        marginBottom: 100,
    },
    hotDeals: {
        alignSelf: 'flex-end',
        marginEnd: 20,
        height: 45,
        position: 'absolute',
        end: 0,
        width: 30
    },
    promotionList: {
        width: '90%',
        alignSelf: 'center'
    },
    image: {
        marginEnd: 10
    },
    proPlan: {
        marginStart: 25,
        marginTop: 20,
        marginBottom: 10,
        color: '#000944',
        fontSize: 16
    },
    approved: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10
    },
    completedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginStart: 10,
        marginEnd: 10,
        height: 50,
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        height: 80,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    dueDate: {
        color: '#000944',
        fontSize: 10,
        marginStart: 5
    },
    loanHistory: {
        color: '#299AFD',
        marginStart: 5
    },
    dueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#E2E3FF',
        borderRadius: 20,
        padding: 5,
        paddingStart: 10,
        paddingEnd: 10,
        justifyContent: 'space-between'
    },
    loanHistoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
    },
    totalLoan: {
        color: '#000944',
        fontWeight: 'bold',
        fontSize: 14
    },
    customize: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#2A388F',
        borderRadius: 20,
        padding: 5,

        fontSize: 11
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 28,
        marginStart: 20,
        marginTop: 5
    },
    totalCutomizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
    },
    totalContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 10,
        alignSelf: 'center',
        height: 120,
        marginTop: -50
    },
    container: {
        flex: 1,
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
    hello: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
        alignSelf: 'center'
    }
})

