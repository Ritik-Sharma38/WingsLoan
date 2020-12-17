import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground, Dimensions, FlatList, ScrollView } from "react-native";

import ProgressCircle from 'react-native-progress-circle'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
export default class Loan extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
    }





    render() {
        return (
            <ScrollView style={{ marginBottom: 50, flex: 1 }}>

                <SafeAreaView style={styles.container}>




                    <View>
                        <ImageBackground style={styles.topBanner} source={require('../../assets/topBanner.png')}>

                            <TouchableOpacity onPress={() => this.props.onPressMenu()}>
                                <Image style={styles.leftArrow} source={require('../../assets/left-arrow.png')} />
                            </TouchableOpacity>

                            <Text style={styles.title}>Loan Overview</Text>

                        </ImageBackground>

                        <View style={styles.totalContainer}>
                            <Text style={styles.loanStatistics}>Loan Statistics</Text>
                            <LineChart
                                data={{
                                    labels: ["0", "1", "2", "3", "4", "5"],
                                    datasets: [
                                        {
                                            data: [
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100
                                            ]
                                        }
                                    ]
                                }}
                                withInnerLines={false}
                                withShadow={false}
                                getDotColor={"red"}
                                withOuterLines={false}
                                width={Dimensions.get("window").width - 40} // from react-native
                                height={180}
                                yAxisInterval={1} // optional, defaults to 1
                                chartConfig={{
                                    backgroundColor: "white",
                                    backgroundGradientFrom: "white",
                                    backgroundGradientTo: "white",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => '#7C0AFF',
                                    labelColor: (opacity = 1) => '#666666',
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        color: '#FE9901',

                                    }
                                }}

                                bezier
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                }}
                            />


                        </View>
                    </View>


                    <View style={styles.viewAllContainer}>
                        <Text style={styles.header}>Pending Loan</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>


                    <View style={styles.loanContainer}>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 15, marginStart: 20 }}>
                                <View>
                                    <Text style={{ color: '#000944', fontSize: 14 }}>Total Loan Taken</Text>
                                    <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold' }}>RM 85424</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#000944', fontSize: 14, marginStart: 20 }}>Next payment</Text>
                                    <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 85424</Text>
                                </View>
                            </View>

                            <View>
                                <View>
                                    <Text style={{ color: '#000944', fontSize: 14, marginTop: 10, marginStart: 20 }}>Retunred</Text>
                                    <Text style={{ color: '#00C2A8', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 50000</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 10, marginBottom: 10 }}>
                                    <View>
                                        <Text style={{ color: '#000944', fontSize: 14 }}>Remaining</Text>
                                        <Text style={{ color: '#FF204D', fontSize: 16, fontWeight: 'bold' }}>RM 37005</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#000944', fontSize: 14, marginStart: 60 }}>Due date</Text>
                                        <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold', marginStart: 60 }}>RM 85424</Text>
                                    </View>

                                </View>
                            </View>


                        </View>


                        <View>
                            <Text style={{ marginStart: 45, marginTop: 10, color: '#FF204D', fontSize: 16, fontWeight: 'bold' }}>Pending</Text>
                            <View style={{ marginEnd: 30, marginTop: 10 }}>
                                <ProgressCircle
                                    percent={70}
                                    radius={45}
                                    borderWidth={6}
                                    shadowColor="#C1C1C1"
                                    bgColor="#fff"
                                    color="#00C2A8"

                                >
                                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#000000', fontWeight: 'bold' }}>75 %</Text>
                                </ProgressCircle>
                            </View>


                        </View>
                    </View>

                    <View style={styles.viewAllContainer}>
                        <Text style={styles.header}>Active Loan</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>

                    <View style={[styles.loanContainer,{backgroundColor:'#00C2A8'}]}>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 15, marginStart: 20 }}>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14 }}>Total Loan Taken</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>RM 85424</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14, marginStart: 20 }}>Next payment</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 85424</Text>
                                </View>
                            </View>

                            <View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14, marginTop: 10, marginStart: 20 }}>Retunred</Text>
                                    <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 50000</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 10, marginBottom: 10 }}>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>Remaining</Text>
                                        <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold' }}>RM 37005</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 14, marginStart: 60 }}>Due date</Text>
                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginStart: 60 }}>RM 85424</Text>
                                    </View>

                                </View>
                            </View>


                        </View>

                        <View>
                            <Text style={{ marginStart: 45, marginTop: 10, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Active</Text>
                            <View style={{ marginEnd: 30, marginTop: 10 }}>
                            <ProgressCircle
                                    percent={70}
                                    radius={45}
                                    borderWidth={6}
                                    shadowColor="#CCCCCC"
                                    bgColor="#00C2A8"
                                    color="#fff"

                                >
                                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>75 %</Text>
                                </ProgressCircle>
                            </View>


                        </View>
                    </View>


                    <View style={styles.viewAllContainer}>
                        <Text style={styles.header}>Completed Loan</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>
                    <View style={[styles.loanContainer,{backgroundColor:'#299AFD'}]}>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 15, marginStart: 20 }}>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14 }}>Total Loan Taken</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>RM 85424</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14, marginStart: 20 }}>Next payment</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 85424</Text>
                                </View>
                            </View>

                            <View>
                                <View>
                                    <Text style={{ color: '#ff', fontSize: 14, marginTop: 10, marginStart: 20 }}>Retunred</Text>
                                    <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 50000</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 10, marginBottom: 10 }}>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>Remaining</Text>
                                        <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold' }}>RM 37005</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 14, marginStart: 60 }}>Due date</Text>
                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginStart: 60 }}>RM 85424</Text>
                                    </View>

                                </View>
                            </View>


                        </View>

                        <View>
                            <Text style={{ marginStart: 30, marginTop: 10, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Completed</Text>
                            <View style={{ marginEnd: 30, marginTop: 10 }}>
                            <ProgressCircle
                                    percent={70}
                                    radius={45}
                                    borderWidth={6}
                                    shadowColor="#CCCCCC"
                                    bgColor="#299AFD"
                                    color="#fff"

                                >
                                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff', fontWeight: 'bold'  }}>75 %</Text>
                                </ProgressCircle>
                            </View>


                        </View>
                    </View>


                    <View style={styles.viewAllContainer}>
                        <Text style={styles.header}>Rejected Loan</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>
                    <View style={[styles.loanContainer,{marginBottom:50,backgroundColor:'#FF6A6B'}]}>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 15, marginStart: 20 }}>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14 }}>Total Loan Taken</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>RM 85424</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14, marginStart: 20 }}>Next payment</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 85424</Text>
                                </View>
                            </View>

                            <View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 14, marginTop: 10, marginStart: 20 }}>Retunred</Text>
                                    <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>RM 50000</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 10, marginBottom: 10 }}>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>Remaining</Text>
                                        <Text style={{ color: '#000944', fontSize: 16, fontWeight: 'bold' }}>RM 37005</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 14, marginStart: 60 }}>Due date</Text>
                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginStart: 60 }}>RM 85424</Text>
                                    </View>

                                </View>
                            </View>


                        </View>

                        <View>
                            <Text style={{ marginStart: 45, marginTop: 10, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Rejected</Text>
                            <View style={{ marginEnd: 30, marginTop: 10 }}>
                                <ProgressCircle
                                    percent={70}
                                    radius={45}
                                    borderWidth={6}
                                    shadowColor="#CCCCCC"
                                    bgColor="#FF6A6B"
                                    color="#fff"

                                >
                                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff', fontWeight: 'bold'  }}>75 %</Text>
                                </ProgressCircle>
                            </View>


                        </View>
                    </View>




                </SafeAreaView>
            </ScrollView>

        )
    }

}




const styles = StyleSheet.create({

    loanContainer: {
        flexDirection: 'row',
        width: "90%",
        marginTop: 10,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        elevation: 5
    },
    viewAllContainer: {
        flexDirection: 'row',
        width: "86%",
        marginTop: 20,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    header: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#002C65',
    },
    viewAll: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#299AFD',
    },
    loanStatistics: {
        marginStart: 20,
        marginTop: 20,
        color: '#4C4C4C',
        fontSize: 18
    },
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
    totalContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 10,
        alignSelf: 'center',
        height: 250,
        marginTop: -50
    },
})



