import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Modal, TouchableOpacity, Image, Button, Alert } from 'react-native';
import style from '../componentes/style';
import { SafeAreaView } from 'react-native-web';
import { ModalLogin } from '../componentes/ModalLogin';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function inicio({navigation}) {
  
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();
  const changeModalVisible = (bool) => { setisModalVisible(bool); }
  const setData = (data) => { setchooseData(data); }

  return (

    <View style={style.container}>
      <View style={style.azul}>
        <Text style={style.title}>WELCOME!</Text>
        <Image source={require('../assets/banco.png')} style={style.fundoBank}></Image>
      </View>
      <View style={style.branco}>
        <TextInput
          style={style.inputo}
          placeholder="Username or Email"
        />
        <TextInput
          style={style.inputo2} secureTextEntry={true} textContentType={'password'}
          placeholder="Password"
        />
        <SafeAreaView style={StyleSheet.container}>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => changeModalVisible(true)}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          <Modal transparent={true} animationType='fade' visible={isModalVisible} nRequestClose={() => changeModalVisible(false)}>
            <ModalLogin changeModalVisible={changeModalVisible} setData={setData}/>
          </Modal>
        </SafeAreaView>
        <View style={style.forgot}>
          <Text href="#" style={styles.link}>Forgot Password?</Text>
          <p>New to Bank Apps? <Text style={styles.link} onPress={() => navigation.navigate('cadastro')}>Sign Up</Text></p>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOpacity: {
    backgroundColor: '#000080',
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
    height: 40
  },
  text: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  link: {
    color: 'lightblue',
    fontFamily: 'TimesNewRoman',
    fontSize: '15px',
    textDecorationLine: 'underline',
  },
  
})




