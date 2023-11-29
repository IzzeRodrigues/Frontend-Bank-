import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Modal, TouchableOpacity, Image, Button, Alert } from 'react-native';
import style from './componentes/style';
import { SafeAreaView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import inicio from './telas/inicio';
import cadastro from './telas/cadastro';
import perfil from './telas/perfil';
import account from './telas/account';
import card from './telas/card';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='inicio' screenOptions={{headerShown:false}}>
          <Stack.Screen name="inicio" component={inicio}/>
          <Stack.Screen name="cadastro" component={cadastro}/>
          <Stack.Screen name="perfil" component={perfil}/>
          <Stack.Screen name="account" component={account}/>
          <Stack.Screen name="card" component={card}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

