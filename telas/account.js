import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, CheckBox, TouchableOpacity} from 'react-native';

export default function account({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.azul}>
            <View style={styles.imagens}>
                <Image source={require('../assets/menu.png')} style={styles.icons} onClick={() => navigation.navigate('cadastro')}></Image>
                <Image source={require('../assets/seta.png')} style={styles.icons} onClick={() => navigation.navigate('perfil')}></Image>
                <Text style={styles.conta}>ACCOUNT</Text>
                <Image source={require('../assets/engrenagem.png')} style={styles.icons} onClick={() => navigation.navigate('card')}></Image>
            </View>
        </View>
        <View style={styles.branco}>
            <Image source={require('../assets/perfil.png')} style={styles.profile}></Image>
            <View style={styles.allInputs} > 
                <Text style={styles.titulos}>YOUR NAME</Text>
                    <TextInput style={styles.input} placeholder=""/>
                <Text style={styles.titulos}>BANK ACCOUNT</Text>
                    <TextInput style={styles.input} placeholder=""/>
                <Text style={styles.titulos}>EMAIL</Text>
                    <TextInput style={styles.input} placeholder=""/>
                <Text style={styles.titulos}>PASSWORD</Text>
                    <TextInput style={styles.input} placeholder="" secureTextEntry={(true)}/>
                <Text style={styles.titulos}>PHONE NUMBER</Text>
                    <TextInput style={styles.input} placeholder=""/>
                <Text style={styles.titulos}>YOUR ADDRESS</Text>
                    <TextInput style={styles.address} placeholder=""/>
            </View> 
            <Text style={styles.check}>* Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non</Text> 
                <TouchableOpacity style={styles.transfere}>
                    <Text style={styles.textoSecundario}>SAVE CHANGES</Text>
                </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    azul:
    {
      flex: 1,
      backgroundColor: '#1F2761',
      height: '8%',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    branco:
    {
      backgroundColor: '#fff',
      height: '92%',
      width: '100%',
    },
    imagens: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      alignSelf: 'center',
    },
    icons: {
      width: '30px',
      height: '30px',
    },
    conta: {
        fontFamily: 'arial',
        fontSize: '25px',
        color: 'white',
        marginRight: '60px'
    },
     profile: {
        width: '100px',
        height: '100px',
        marginTop: '10%',
        alignSelf: 'center',
    },
    input:
    {
        height: '8%',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
        padding: 7,
        justifyContent: 'flex-start',
    },
    allInputs: {
        width: '70%',
        alignSelf:'center',
        marginTop: '10%',
    },
    address: {
        height: '90%',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 10,
        padding: 7,
        justifyContent: 'flex-start',
    },
    titulos: {
        color: '#1F2761',
        fontWeight: 'bold',
        marginTop: '5%'
    },
    check: {
        fontSize: '16px',
        color: 'gray',
        width: '70%',
        textAlign: 'justify',
        alignSelf: 'center',
        marginTop: '5%'
      },
      textoSecundario: {
        fontFamily: 'Arial',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginTop: '10px',
    },
    transfere: {
        backgroundColor: '#1F2761',
        height: '40px',
        width: '50%',
        borderRadius: '10px',
        marginTop: '5%',
        alignSelf: 'center',
    },
})