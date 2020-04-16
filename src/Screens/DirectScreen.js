import * as React from 'react';
import { Text, View ,StyleSheet,Image,ScrollView} from 'react-native';

const DirectScreen=()=> {
  return (
      <ScrollView>
       
        <Image
            style={{width:420,height:535}}
            source={require("../image/direct.png")}
            resizeMode="contain"
        />
        <Image
            style={{width:420,height:470}}
            source={require("../image/direct_2.png")}
            resizeMode="contain"
        />

     
      </ScrollView>
    
  );
}

const styles=StyleSheet.create({




});
export default DirectScreen;