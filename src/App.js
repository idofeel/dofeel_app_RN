'use strict';

import {
    DrawerNavigator,
    createAppContainer,
    createStackNavigator,
    Text,
} from 'react-navigation';
import React from 'react';
import Home from './pages/index';
import Profiles from './pages/Profiles/Profiles';

// 定义路由页面
const pages = {
    Home: {
        //定义Home对应HomeScreen组件
        screen: Home,
    },
    Profiles: {
        screen: Profiles,
    },
};
// 定义配置
const config = {
    // 初始路由
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => NavigatorOptions(navigation),
};

const NavigatorOptions = (navigation) => {
    const routes = navigation.state.routes;
    // 通过params得到传进来的title，并赋值给headerTitle。
    const params = routes ? routes[navigation.state.index].params : null;
    const headerTitle = params ? params.title : '123123';
    const headerTitleStyle = {
        // fontSize: System.iOS ? 23 : 20,
        color: '#000',
        flex: 1,
        textAlign: 'center',
        // paddingTop: System.Android ? 17 : null,
    };
    const headerBackTitle = null;
    const headerTintColor = '#000';
    const headerStyle = {
        // backgroundColor: Theme.navColor,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        elevation: 0,
    };
    // const header = null;
    const header = header;
    return {
        headerTitle,
        headerStyle,
        headerTitleStyle,
        headerBackTitle,
        headerTintColor,
        header,
    };
};

const RootStack = createStackNavigator(pages, config);

export default createAppContainer(RootStack); // react-navigation 3 必须这么做否则会报错
