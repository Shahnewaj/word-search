import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRoutes from './AppRoutes';
import SearchScreen from '../screen/SearchScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={AppRoutes.SEARCH_SCREEN} component={SearchScreen} />
                <Tab.Screen name={AppRoutes.FAV_SCREEN} component={FavouriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator