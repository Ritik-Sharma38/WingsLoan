import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from "../screens/sidemenu";
import HomeInitial from "../screens/home";

const HomeTabNavigator = createStackNavigator({
    HomeWrapper:{
        screen : HomeInitial
    }
})


const HomeDrawerNavigation = createDrawerNavigator(
    {
        TabsNavigator: {
            screen: HomeTabNavigator
        }
    },
    {
        contentComponent: SideMenu,
        drawerPosition: 'left',
        drawerType: 'front'
    }
);

export default HomeDrawerNavigation;
