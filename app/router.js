import {Icon} from 'react-native-elements';
import React from "react";
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import TodoLists from "./screens/list/TodoLists"
import Settings from "./screens/Settings";
import CreateList from "./screens/create/CreateList";
import TodoListDetails from "./screens/list/TodoListDetails";

const TodoListStack = createStackNavigator({
    TodoLists: {
        screen: TodoLists
    },
    TodoListDetails:{
        screen: TodoListDetails,
    }
});


const CreateListStack = createStackNavigator({
    CreateList: CreateList
});

const SettingsStack = createStackNavigator({
    Settings: Settings
});

const TabNavigator = createBottomTabNavigator({
    'Todo-List': {
        screen: TodoListStack,
        navigationOptions: {
            tabBarLabel: 'Todo-List',
            tabBarIcon: ({tintColor}) => <Icon name="inbox" type="feather" size={25} color={tintColor}/>
        },
    },
    'CreateList': {
        screen: CreateListStack,
        navigationOptions: {
            tabBarLabel: 'CreateList',
            tabBarIcon: ({tintColor}) => <Icon name="add-to-list" type="entypo" size={25} color={tintColor}/>
        },
    },
    'Settings': {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => <Icon name="settings" type="material" size={25} color={tintColor}/>
        },
    }
});


export const createRootNavigator = () =>{
    return createAppContainer(TabNavigator);
};