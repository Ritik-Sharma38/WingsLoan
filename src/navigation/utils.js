import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params, key = null) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
            key
        })
    );
}
export {
    navigate,
    setTopLevelNavigator,
};