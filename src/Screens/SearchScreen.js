import * as React from 'react';
import { Text, View ,Image,ScrollView,TouchableWithoutFeedback} from 'react-native';


const SearchScreen=({navigation})=> {
    return (
        <ScrollView style={{marginTop:40,backgroundColor:'#fff'}}>
        <TouchableWithoutFeedback
        >
        <Image
    style={{width:420,height:530}}
    source={require("../image/search_1.png")}
    resizeMode='contain'
    />

        </TouchableWithoutFeedback>
     <Image
    style={{width:420,height:550}}
    source={require("../image/search_2.png")}
    />


        </ScrollView>
   
     
    );
  }

  export default SearchScreen;