import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-native-tabs';

import HomeScreen from 'app/src/screens/HomeScreen';
import SettingsScreen from 'app/src/screens/SearchScreen';
import NotificationScreen from  'app/src/screens/NotificationScreen';

import UserScreen from 'app/src/screens/UserScreen';
import {
  HomeTabIcon,
  SearchTabIcon,
  TakeTabIcon,
  NotificationScreen,
  MeTabIcon,
  TabBar
} from 'app/src/components/Tab';

//stackNavigatorを簡単に作れるようにするための関数
const createTabStack = (title,screen) => createStackNavigator({
  [title]: {screen},
});


// import React from 'react';
// import { Platform } from 'react-native';
// import {
//   createStackNavigator,
//   createBottomTabNavigator,
// } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

// export default createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });
