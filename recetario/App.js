import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/mainScreen'
import { createStackNavigator } from '@react-navigation/stack';
import MealDets from './screens/mealDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Home' component={MainScreen} />
                <Stack.Screen name='mealDets' component={MealDets} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App