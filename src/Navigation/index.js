import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsListingScreen from '../Container/NewsListing';
import NewsDetailsScreen from '../Container/NewsDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='NewsListing' component={NewsListingScreen}/>
            <Stack.Screen name='NewsDetails' component={NewsDetailsScreen}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;