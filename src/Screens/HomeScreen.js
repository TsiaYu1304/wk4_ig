import * as React from 'react';
import { Text, View,TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native';
import HomeDetailScreen from './HomeDetailScreen';


function State (){
    return(<View style={styles.card_state}>
        <Image
            style={{height:30,marginLeft:0,margin:15}}
            source={require("../image/heart.png")}
            resizeMode='contain'
        />
         <Image
            style={{height:30,marginLeft:-20,margin:15}}
            source={require("../image/chat.png")}
            resizeMode='contain'
        />
        <Image
            style={{height:30,marginLeft:-20,margin:15}}
            source={require("../image/email.png")}
            resizeMode='contain'
        />
        <Image
            style={{height:30,marginLeft:180,margin:15}}
            source={require("../image/price.png")}
            resizeMode='contain'
        />
        </View>
        );
    
}
function Detail({likes,name,comments,time}){
    return(
        <View>
            <Text style={{margin:10,marginLeft:20,fontSize:18}}>{likes}</Text>
            <Text style={{marginLeft:20,fontSize:18}}>{name}</Text>
            <Text style={{marginLeft:20,marginTop:8,fontSize:18,color:'gray'}}>{comments}</Text>
            <Text style={{margin:10,marginLeft:20,fontSize:14,color:'gray'}}>{time}</Text>
        </View>

    );
}


const HomeScreen=({navigation})=> {
  return (
    <ScrollView>
    <View style={styles.dynamics}>
        <Image
        style={styles.dyStyle}
        source={require("../image/dy_me.png")}
        resizeMode="contain"
        />
        <Image
        style={{height:125}}
        source={require("../image/dy_gray.png")}
        resizeMode="contain"
        />
         <Image
        style={{height:125, marginLeft:-60,}}
        source={require("../image/dy_yilu.png")}
        resizeMode="contain"
        />
          <Image
        style={{height:125, marginLeft:-60,}}
        source={require("../image/dy_pearl.png")}
        resizeMode="contain"
        />
    </View>
    

    <View style={styles.card}>
        <View style={styles.card_title}>
            <Image
            style={{height:50,marginLeft:-10,margin:15}}
            source={require("../image/shot_k5.png")}
            resizeMode='contain'
            />
             <TouchableOpacity
                onPress={()=>navigation.navigate('HomeDetail')}
                style={{height:30,marginLeft:-10,marginTop:30}}
                >
                <Text style={{fontSize:18}} >k5fuwa</Text>
            </TouchableOpacity>
            <Image
            style={{height:30,width:20,marginLeft:240,marginTop:25,margin:15}}
            source={require("../image/more.png")}
            resizeMode='contain'
            />
        </View>
        <Image
         style={{width:450,height:450}}
         source={require("../image/photo_cat.png")}
        />
        <State/>
        <Detail
        likes={"20,600個讚"}
        name={'k5fuwa .'}
        comments={'查看全部46則留言'}
        time={'21小時前'}
        />
    </View>


    <View style={styles.card}>
        <View style={styles.card_title}>
            <Image
            style={{height:50,marginLeft:0,margin:15}}
            source={require("../image/shot_pearl.png")}
            resizeMode='contain'
            />
             <TouchableOpacity
                onPress={()=>navigation.navigate('HomeDetail')}
                style={{height:30,marginLeft:-10,marginTop:30}}
                >
                <Text style={{fontSize:18}} >little_pearl_12</Text>
            </TouchableOpacity>
            <Image
            style={{height:30,width:20,marginLeft:240,marginTop:25,margin:15}}
            source={require("../image/more.png")}
            resizeMode='contain'
            />
        </View>
        <Image
         style={{width:450,height:450}}
         source={require("../image/photo_pearl.png")}
        />
        <State/>
        <Detail
        likes={"35,047個讚"}
        name={'little_pearl_12 嗨大家！我在吃米餅'}
        comments={'查看全部146則留言'}
        time={'一天前'}
        />
    </View>

    <View style={styles.card}>
        <View style={styles.card_title}>
            <Image
            style={{height:50,marginLeft:0,margin:15}}
            source={require("../image/shot_boha.png")}
            resizeMode='contain'
            />
             <TouchableOpacity
                onPress={()=>navigation.navigate('HomeDetail')}
                style={{height:30,marginLeft:-10,marginTop:30}}
                >
                <Text style={{fontSize:18}} >boha22_</Text>
            </TouchableOpacity>
            <Image
            style={{height:30,width:20,marginLeft:240,marginTop:25,margin:15}}
            source={require("../image/more.png")}
            resizeMode='contain'
            />
        </View>
        <Image
         style={{width:450,height:450}}
         source={require("../image/photo_boha.png")}
        />
        <State/>
        <Detail
        likes={"2,749個讚"}
        name={'boha22_ 看我的夾腿'}
        comments={'查看全部則留言'}
        time={'一天前'}
        />
    </View>


    

    </ScrollView>
  );
}

const styles=StyleSheet.create({
    dynamics:{
        flexDirection:'row',
        backgroundColor:"#fff",
        height:125,
    },
    card:{
       backgroundColor:'#fff',
        
    },
    dyStyle:{
        height:125,
        marginLeft:-30,
        marginRight:-60
    },
    card_title:{
        flexDirection:'row', 
    },
    card_state:{
        flexDirection:'row', 
    },
    card_detail:{


    }





});

export default HomeScreen;