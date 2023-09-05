import { Text, View ,TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import {Ionicons, Fontisto} from '@expo/vector-icons';
const Home = () => {
  return (
    <SafeAreaView>
    <View style= {styles.appBarWrapper}>
      <View style= {styles.appBar}>
      <Ionicons name='location-outline' size={24} />

      <Text style= {styles.location}> Shangai China </Text>

    <View style={{alignItems:"flex-end"}}>
    <View style= {styles.cartCount}>
    <Text style= {styles.cartNumber}> 8 </Text>
    </View> 
    <TouchableOpacity>
    <Fontisto name='shopping-bag' size={24}/>
      
    </TouchableOpacity>
    </View>

       </View>
    </View>
     
    </SafeAreaView>
  )
}

export default Home

