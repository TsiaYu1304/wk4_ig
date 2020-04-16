import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View ,Image,TouchableOpacity} from 'react-native';

import HomeScreen from "./HomeScreen";
import HomeDetailScreen from "./HomeDetailScreen";
import DirectScreen from "./DirectScreen";
import { Button } from 'react-native-paper';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 100, height: 30}}
        source={require("../image/logo.png")}
        resizeMode='contain'
      />
    );
  }

const HomeStack=({navigation})=>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
                headerTitle: <LogoTitle /> ,
                headerLeft:()=>(
                    <Image
                    style={{width:30,height:30,marginLeft:16,marginBottom:5}}
                    source={require("../image/camera.png")}
                    />
                ),
                headerRight:()=>(
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Direct')}>
                     <Image
                        style={{width:30,height:30,marginRight:16,marginBottom:5}}
                        source={require("../image/email.png")}
                     />
                    </TouchableOpacity>
                
                ),
            }}
            />
            <Stack.Screen 
            name="HomeDetail" 
            component={HomeDetailScreen}
            options={{
                title:'k5fuwa',
                headerBackImage:()=>(
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Home')}>
                     <Image
                        style={{width:20,height:20,marginLeft:16,marginBottom:5}}
                        source={require("../image/back.png")}
                     />
                    </TouchableOpacity>
                
                ),
                headerRight:()=>(
                   
                    <Image
                    style={{width:20,height:20,marginRight:16,marginBottom:5}}
                    source={require("../image/more.png")}
                    />
               
            ),
                headerBackTitleVisible:false,
            }}
            />
            <Stack.Screen 
            name="Direct" 
            component={DirectScreen}
            
            options={{
                headerBackImage:()=>(
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Home')}>
                     <Image
                        style={{width:20,height:20,marginLeft:16,marginBottom:5}}
                        source={require("../image/back.png")}
                     />
                    </TouchableOpacity>
                ),
                headerRight:()=>(
                   
                        <Image
                        style={{width:30,height:30,marginRight:16,marginBottom:5}}
                        source={require("../image/write.png")}
                        />
                   
                ),

                headerBackTitleVisible:false,
            }}
            />
        </Stack.Navigator>
    );
}
export default HomeStack;