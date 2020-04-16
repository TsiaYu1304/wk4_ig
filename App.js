import * as React from 'react';
import { Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';



import HomeStack from "./src/Screens/HomeStack"
import HomeScreen from "./src/Screens/HomeScreen";
import SearchScreen from "./src/Screens/SearchScreen"



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./src/image/home_black.png')
                : require('./src/image/home.png');
            } else if (route.name === 'Search') {
              iconName = focused
                ? require('./src/image/search_black.png')
                : require('./src/image/search.png');
            }else if (route.name === 'Add') {
              iconName = focused
                ? require('./src/image/add_black.png')
                : require('./src/image/add.png');
            }else if (route.name === 'Love') {
              iconName = focused
                ? require('./src/image/heart_black.png')
                : require('./src/image/heart.png');
            }else if (route.name === 'My') {
              iconName = focused
                ? require('./src/image/user_black.png')
                : require('./src/image/user.png');
            }
          // You can return any component that you like here!
          return <Image source={iconName} style={{width:30,height:30 }}/>;
        },
      })}
      tabBarOptions={{
        showLabel:false,
        style:{
          padding:30
        }
      }}      
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={SearchScreen} />
        <Tab.Screen name="Love" component={SearchScreen} />
        <Tab.Screen name="My" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
