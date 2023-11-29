import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, CheckBox, TouchableOpacity } from 'react-native';

export default function perfil({navigation}) {
    return (
        <View style={style.container}>
            <View style={style.azul}>
                <View style={style.imagens}>
                    <Image source={require('../assets/menu.png')} style={style.icons} onClick={() => navigation.navigate('inicio')}></Image>

                    
                    <Image source={require('../assets/perfil.png')} style={style.profile} onClick={() => navigation.navigate('account')}></Image>

                    <Image source={require('../assets/engrenagem.png')} style={style.icons}></Image>
                </View>
                <Text style={style.texto}>YOUR NAME</Text>
                <Text style={style.textoSecundario}>your-email@email.com</Text>
                
                <View style={style.retangulo}>
                    <Text style={style.textoRetangulo1}>BALANCE</Text>
                    <Text style={style.textoRetangulo2}>$ 4,180.20</Text>
                    <TouchableOpacity style={style.transfere}>
                        <Text style={style.textoSecundario}>TRANSFER</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.branco}>
                <Text style={style.textoRetangulo1}>LATEST TRANSACTIONS</Text>
                <View style={style.transactions}>
                    <Image source={require('../assets/profile.png')} style={style.perfil}></Image>
                        <View style={style.infos}>
                            <View style={style.latest}>
                                <Text style={style.company}>Lorem Ipsum Company</Text>
                                <Text style={style.postcompany}>Recived Payment</Text>
                            </View>
                            <Text style={style.postcompany}>$2,030.80</Text>
                        </View>
                </View>
                <View style={style.transactions}>
                    <Image source={require('../assets/profile.png')} style={style.perfil}></Image>
                        <View style={style.infos}>
                            <View style={style.latest}>
                                <Text style={style.company}>Lorem Ipsum Company</Text>
                                <Text style={style.postcompany}>Recived Payment</Text>
                            </View>
                            <Text style={style.postcompany}>$2,030.80</Text>
                        </View>
                </View>
                <View style={style.transactions}>
                    <Image source={require('../assets/profile.png')} style={style.perfil}></Image>
                        <View style={style.infos}>
                            <View style={style.latest}>
                                <Text style={style.company}>Lorem Ipsum Company</Text>
                                <Text style={style.postcompany}>Recived Payment</Text>
                            </View>
                            <Text style={style.postcompany}>$2,030.80</Text>
                        </View>
                </View>
                <View style={style.transactions}>
                    <Image source={require('../assets/profile.png')} style={style.perfil}></Image>
                        <View style={style.infos}>
                            <View style={style.latest}>
                                <Text style={style.company}>Lorem Ipsum Company</Text>
                                <Text style={style.postcompany}>Recived Payment</Text>
                            </View>
                            <Text style={style.postcompany}>$2,030.80</Text>
                        </View>
                </View>
                <Text style={style.more}>more &gt;&gt;</Text>
            </View>
        </View>
    );

}
const style = StyleSheet.create({
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
        height: '50%',
        width: '100%',
    },
    branco:
    {
        backgroundColor: '#fff',
        height: '50%',
        width: '100%',
    },
    icons: {
        width: '30px',
        height: '30px',
    },
    profile: {
        width: '100px',
        height: '100px',
        marginTop: '10%',
    },
    imagens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        alignContent: 'flex-start',
        marginTop: '5%',
    },
    texto: {
        fontFamily: 'Arial',
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: '15px'
    },
    textoSecundario: {
        fontFamily: 'Arial',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginTop: '10px'
    },
    retangulo: {
        width: '300px',
        height: '150px',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: '10px',
        marginTop: '5%'
    },
    textoRetangulo1:{
        fontFamily: 'Arial',
        fontSize: '20px',
        color: 'lightblue',
        textAlign: 'center',
        marginTop: '5%'
    },
    textoRetangulo2: {
        fontFamily: 'Arial',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#1F2761',
        textAlign: 'center',
        marginTop: '5%'
    },
    transfere: {
        backgroundColor: '#1F2761',
        height: '40px',
        width: '150px',
        borderRadius: '10px',
        marginTop: '3%',
        alignSelf: 'center',
    },
    transactions:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    latest: {
        marginLeft: '10%',
    },
    perfil: {
        width: '40px',
        height: '40px',
    },
    infos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    },
    more: {
       alignSelf: 'flex-end',
       fontFamily: 'Arial',
       fontSize: '15px',
       color: 'lightblue',
       marginEnd: '5%'
    },
})