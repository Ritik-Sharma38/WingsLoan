import React, { Component, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";

import ReanimatedCurveTabBar from '../../components/CurvedBottom';

import Home from '../../screens/home/home'
import Loan from '../../screens/loan'
import Profile from '../../screens/profile'
import Settings from '../../screens/settings'

export default class HomeInitial extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {
            index: 1,
        }
    }


    renderScreen = () => {
        switch (this.state.index) {
            case 1:
                return <Home
                        onPressPromotions={() => this.props.navigation.navigate('Promotions')}
                        onPressMenu={() => this.props.navigation.openDrawer()}
                        onPressApplyLoan={() => this.props.navigation.navigate('ApplyLoan')}
                        onPressNotification={() => this.props.navigation.navigate('Notifications')}
                    />
            case 2:
                return <Loan />
            case 3:
                return <Profile
                    onPressBack={() => this.child.getAlert(50)} />
            case 4:
                return <Settings  
                    onPressBack={() => this.child.getAlert(50)}
                    onPressLogout={() => this.props.navigation.navigate('SignUP')} 
                />


        }
    }


    renderIcons = (index) => {


        switch (index) {
            case 0:
                return <Image style={{ height: 20, width: 20 }} source={require('../../assets/home.png')} />
            case 1:
                return <Image style={{ height: 20, width: 20 }} source={require('../../assets/charts.png')} />
            case 2:
                return <Image style={{ height: 20, width: 20 }} source={require('../../assets/profile.png')} />
            case 3:
                return <Image style={{ height: 20, width: 20 }} source={require('../../assets/settings.png')} />


        }
    }


    render() {

        return (
            <View style={styles.container}>



                {this.renderScreen()}




                <ReanimatedCurveTabBar

                    height={150}

                    ref={child => { this.child = child }}

                    iconsArray={[...Array(4)].map((item, index) =>
                        (<View style={styles.icon}>
                            {this.renderIcons(index)}
                        </View>)
                    )}

                    onPress={(btnNum) => this.setState({ index: btnNum })}

                    activeIndex={this.state.index}




                    topGap={1}

                    tabColor={'#20368F'}

                    // screensArray={this.state.array.map((item, index) => (
                    //     item.component
                    // ))}

                    reactNaviagtionBar={true}


                    backgroundColor={'white'}

                    duration={300}

                    sidesRadius={10}




                    lockTranslateYAnime={true}

                    iconScale={0.9}
                    lockScaleAnime={true}

                    allowDropAnime={true}
                    dropWithFirst={false}

                />
            </View>

        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
})

