import React, { Component } from "react";
import {View,StyleSheet,Text,SafeAreaView,Image } from "react-native";


export default class FootterIcon extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.icon} source={this.props.iconSource}/>
              
            </SafeAreaView>

        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:20,
        height:20
    }
})


