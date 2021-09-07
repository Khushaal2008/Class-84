import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigation/DrawerNavigator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./Screens/Feed";
import CreateStory from "./Screens/CreateStory";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}