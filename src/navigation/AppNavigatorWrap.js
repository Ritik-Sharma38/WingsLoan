import React, { Component } from 'react';
import { Linking, Platform, StyleSheet, View, BackHandler } from 'react-native';
import { AppNav } from './index';
import NavigationService from './NavigationService';







class AppNavigatorWrap extends Component {

   constructor(props) {
      super(props);
      this.state = {
      };


   }



   async componentDidMount() {

   }
 


   render() {
     
      const AppNavigator = AppNav();
      return (
         <View style={styles.mainContainer}>
            <AppNavigator
               enableURLHandling={false}
               ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
               }}
            />
         </View>
      );
   }

}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
   }
});




export default AppNavigatorWrap

