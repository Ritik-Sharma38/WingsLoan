import { createAppContainer, createSwitchNavigator, NavigationActions } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import ScreenName from './screenNames';

export const MainStack = createStackNavigator({
    HomeInitial: {
        screen: ScreenName.HomeInitial,
        navigationOptions: {
            header: null
        },
        path: 'HomeInitial'
    },
    Home: {
        screen: ScreenName.Home,
        path: 'Home'
    },
    Notifications: {
        screen: ScreenName.Notifications,
        navigationOptions: {
            header: null
        },
        path: 'Notifications'
    },
    ReferEarn: {
        screen: ScreenName.ReferEarn,
        navigationOptions: {
            header: null
        },
        path: 'ReferEarn'
    },
    Profile: {
        screen: ScreenName.Profile,
        navigationOptions: {
            header: null
        },
        path: 'Profile'
    },
    Help: {
        screen: ScreenName.Help,
        navigationOptions: {
            header: null
        },
        path: 'Help'
    },
    Promotions: {
        screen: ScreenName.Promotions,
        navigationOptions: {
            header: null
        },
        path: 'Promotions'
    },
    Details: {
        screen: ScreenName.Details,
        navigationOptions: {
            header: null
        },
        path: 'Details'
    },
    ApplyLoan: {
        screen: ScreenName.ApplyLoan,
        navigationOptions: {
            header: null
        },
        path: 'ApplyLoan'
    },
    CustomerChat: {
        screen: ScreenName.CustomerChat,
        navigationOptions: {
            header: null
        },
        path: 'CustomerChat'
    },
    LoanDetails: {
        screen: ScreenName.LoanDetails,
        navigationOptions: {
            header: null
        },
        path: 'LoanDetails',
    },
    SuccessfulMsg: {
        screen: ScreenName.SuccessfulMsg,
        navigationOptions: {
            header: null
        },
        path: 'SuccessfulMsg',
    },
},
    {
        defaultNavigationOptions: {
            headerBackTitle: null,
            headerTitleStyle: {
                fontWeight: '400',
                marginLeft: 0,
                flex: 1,
                textAlign: 'left',
            },
        },
        initialRouteName: "HomeInitial",
        cardStyle: {
            backgroundColor: 'white',
        },
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [layout.initWidth, 0, 0]
                });
                const opacity = position.interpolate({
                    inputRange: [
                        index - 1,
                        index - 0.99,
                        index,
                        index + 0.99,
                        index + 1
                    ],
                    outputRange: [0, 1, 1, 0.3, 0]
                });
                return { opacity, transform: [{ translateX }] };
            }
        })
    }
);

export const LoginStack = createStackNavigator({
    Splash: {
        screen: ScreenName.Splash,
        navigationOptions: {
            header: null
        },
        path: 'Splash',
    },
    SignUP: {
        screen: ScreenName.SignUP,
        navigationOptions: {
            header: null
        },
        path: 'SignUP',
    },
    SignIn: {
        screen: ScreenName.SignIn,
        navigationOptions: {
            header: null
        },
        path: 'SignIn',
    },
    Verification: {
        screen: ScreenName.Verification,
        navigationOptions: {
            header: null
        },
        path: 'Verification',
    },
    ReferralCode: {
        screen: ScreenName.ReferralCode,
        navigationOptions: {
            header: null
        },
        path: 'ReferralCode',
    },
    SetupProfile: {
        screen: ScreenName.SetupProfile,
        navigationOptions: {
            header: null
        },
        path: 'SetupProfile',
    },
},
    {
        defaultNavigationOptions: {
            headerBackTitle: null,
            headerTitleStyle: {
                fontWeight: '400',
                marginLeft: 0,
                flex: 1,
                textAlign: 'left',
            },
        },


        initialRouteName: "Splash",
        cardStyle: {
            backgroundColor: 'white'
        },
    }
);

export const AppNav = () => {
    return createAppContainer(createSwitchNavigator(
        {
            SignUP: LoginStack,
            Home: MainStack,
        },
        {
            initialRouteName: 'SignUP',
        }
    ));
};
