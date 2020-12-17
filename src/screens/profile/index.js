import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, FlatList } from "react-native";


export default class Profile extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props)
        this.state = {
            isApproved: false,
            isPending: false,
            isCompleted: false,
            isRejected: false,
            data: [{}, {}, {}]
        }
    }


    componentDidMount() {
    }




    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} style={styles.listContainer}>
                <View style={styles.easyPlanContainer}>
                    <Text style={styles.easyPlan}>Easy Plan</Text>
                    <Text style={styles.requestId}>Request ID : 2542151521</Text>
                    <Text style={styles.statusText}>Status: <Text style={styles.status}>Pending</Text></Text>
                </View>

                <View style={styles.installmentContainer}>
                    <View>
                        <Text style={styles.installment}>Installment</Text>
                        <Text style={styles.month}>255/m</Text>

                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>RM 600</Text>
                        <Text style={styles.loanAmount}>Loan Amount</Text>
                    </View>
                    <Text style={styles.view}>View</Text>
                </View>

            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>


                <ImageBackground style={styles.topBanner} source={require('../../assets/topBanner.png')}>

                    <TouchableOpacity onPress={() => this.props.onPressBack()}>
                        <Image style={styles.leftArrow} source={require('../../assets/left-arrow.png')} />
                    </TouchableOpacity>


                    <Text style={styles.title}>Your Loan</Text>

                </ImageBackground>


                <ScrollView style={{ marginBottom: 80 }}>




                    <View style={styles.topContainer}>
                        <Text style={styles.quickFlter}>QUICK FILTERS</Text>

                        <TouchableOpacity>
                            <Image style={styles.sort} source={require('../../assets/sort.png')} />

                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity onPress={() => this.setState({ isApproved: !this.state.isApproved })} style={[styles.approvedContainer, { backgroundColor: this.state.isApproved ? '#00C2A8' : 'white' }]}>
                        <Text style={[styles.approved, { color: this.state.isApproved ? 'white' : '#00C2A8' }]}>Approved</Text>
                    </TouchableOpacity>

                    <View style={styles.statusContainer}>
                        <TouchableOpacity onPress={() => this.setState({ isCompleted: !this.state.isCompleted })} style={[styles.completedContainer, { backgroundColor: this.state.isCompleted ? '#1F9DF1' : 'white' }]}>
                            <Text style={[styles.approved, { color: this.state.isCompleted ? 'white' : '#1F9DF1' }]}>Completed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ isPending: !this.state.isPending })} style={[styles.completedContainer, { backgroundColor: this.state.isPending ? '#FE9901' : 'white' }]}>
                            <Text style={[styles.approved, { color: this.state.isPending ? 'white' : '#FE9901' }]}>Pending</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ isRejected: !this.state.isRejected })} style={[styles.completedContainer, { backgroundColor: this.state.isRejected ? '#FF204D' : 'white' }]}>
                            <Text style={[styles.approved, { color: this.state.isRejected ? 'white' : '#FF204D' }]}>Rejected</Text>
                        </TouchableOpacity>
                    </View>


                    <FlatList
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item.key}
                        data={this.state.data} />

                </ScrollView>

            </SafeAreaView>

        )
    }

}

const styles = StyleSheet.create({
    easyPlanContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'95%',
        alignSelf:'center',
        marginTop:10
    },
    easyPlan:{
        color:'#000944',
        fontSize:13,
        fontWeight:'bold'
    },
    requestId:{
        color:'#000944',
        fontSize:12,
        fontWeight:'bold'
    },
    statusText:{
        color:'#000944',
        fontSize:12,
        fontWeight:'bold'
    },
    status:{
        color:'#FE9901',
        fontSize:12,
        fontWeight:'bold'
    },
    installmentContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:35,
        width:'103%',
        alignSelf:'center'
    },
    installment:{
        color:'#000944',
        fontSize:12,
        fontWeight:'bold'
    },
    month:{
        color:'#000000',
        fontSize:12,
        fontWeight:'bold'
    },
    amountContainer:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#C5E4FF',
        padding:10,
        paddingStart:20,
        paddingEnd:20,
        marginTop:-20,
        alignItems:'center',
        justifyContent:'center'
    },
    amount:{
        color:'#000944',
        fontSize:18,

        fontWeight:'bold'
    },
    loanAmount:{
        color:'#000000',
        fontSize:8,
        fontWeight:'bold'
    },
    view:{
        backgroundColor:'#FE9901',
        borderRadius:20,
        width:70,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        color:'white',
        fontSize:12,
        fontWeight:'bold'
    },
    listContainer: {
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 10,
        marginStart: 10,
        marginEnd: 10,
        paddingBottom:10,
        backgroundColor: 'white'
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    completedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        elevation: 10,
        flex: 1,
        marginStart: 10,
        marginEnd: 10,
        height: 50,
        backgroundColor: 'white'
    },
    approved: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    approvedContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        elevation: 10,
        height: 50,
        backgroundColor: 'white'
    },
    topContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20

    },
    quickFlter: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
    },
    topBanner: {
        backgroundColor: '#20368F',
        height: 180,
        width: '100%',
        borderRadius: 10
    },
    leftArrow: {
        marginTop: 34,
        marginStart: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: 50,
        start: 0,
        end: 0
    }
})


