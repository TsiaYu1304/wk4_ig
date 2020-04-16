import * as React from 'react';
import { Text, View ,Image,ScrollView} from 'react-native';

const HomeDetailScreen=()=> {
  return (
      <View>
          <ScrollView>
          <Image
      style={{width:425,height:580}}
      source={require("../image/detail_1.png")}
      />
       <Image
      style={{width:420,height:420}}
      source={require("../image/detail_2.png")}
      resizeMode='contain'
      />
        <Image
      style={{width:420,height:420}}
      source={require("../image/detail_3.png")}
      resizeMode='contain'
      />


          </ScrollView>
     
     
      
      </View>
   
  );
}
export default HomeDetailScreen;