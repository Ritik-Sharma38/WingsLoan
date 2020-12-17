import React from 'react';
import AppNavigatorWrap from './navigation/AppNavigatorWrap';
import { LogBox , StatusBar} from 'react-native';



LogBox.ignoreAllLogs()

const App = () => {
    return (
        <>
            <StatusBar backgroundColor="white"/>
            <AppNavigatorWrap />
        </>
    );
};

export default App;

