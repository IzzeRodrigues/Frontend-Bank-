import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, CheckBox, TouchableOpacity } from 'react-native';
import { DateDropdown, DayPicker } from 'react-date-dropdown';
import { YearPicker } from 'react-date-dropdown';
import { MonthPicker } from 'react-date-dropdown';

export default function telas({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.azul}>
                <View style={styles.imagens}>
                    <Image source={require('../assets/menu.png')} style={styles.icons} onClick={() => navigation.navigate('cadastro')}></Image>
                    <Image source={require('../assets/seta.png')} style={styles.icons} onClick={() => navigation.navigate('perfil')}></Image>
                    <Text style={styles.conta}>ADD CARD</Text>
                    <Image source={require('../assets/engrenagem.png')} style={styles.icons}></Image>
                </View>
            </View>
            <View style={styles.branco}>
                <Image source={require('../assets/card.png')} style={styles.profile}></Image>
                <View style={styles.allInputs} >
                    <Text style={styles.titulos}>YOUR NAME</Text>
                    <TextInput style={styles.input} placeholder="" />
                    <Text style={styles.titulos}>CARD NUMBER</Text>
                    <TextInput style={styles.input} placeholder="" />

                    <Text style={styles.titulos}>EXPIRED DATE</Text>
                    <View style={styles.date}>
                        <View style={styles.ondate}>
                            <DayPicker onDayChange={() => { }} placeholder='Day' />
                        </View>
                        <View style={styles.ondate}>
                            <MonthPicker onMonthChange={() => { }} placeholder='Month' selectedMonth='-1'/>
                        </View>
                        <View style={styles.ondate}>
                            <YearPicker onYearChange={() => { }} placeholder='Year' />
                        </View>
                    </View>
                    <Text style={styles.titulos}>PASSWORD</Text>
                    <TextInput style={styles.input} placeholder="" secureTextEntry={true} />

                    <Text style={styles.titulos}>PHONE NUMBER</Text>
                    <View style={styles.phone}>
                        <DayPicker onDayChange={() => { }} placeholder='+44'/>
                        <TextInput style={styles.inputnumber} placeholder=""/>
                    </View>

                    <Text style={styles.check}>* Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non</Text> 
                    <Text style={styles.check}>* Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non</Text> 

                <TouchableOpacity style={styles.transfere}>
                    <Text style={styles.textoSecundario}>LINK CARD</Text>
                </TouchableOpacity>
                </View>
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
    allInputs: {
        width: '70%',
        alignSelf: 'center',
        marginTop: '10%',
    },
    titulos: {
        color: '#1F2761',
        fontWeight: 'bold',
        marginTop: '5%'
    },
    input:
    {
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
        padding: 7,
        justifyContent: 'flex-start',
    },
    date: {
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    ondate: {
        height: '50px',
        flexDirection: 'row',
        alignItems: 'stretch',
        borderRadius: 10
    },
    phone: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between'
    },
    inputnumber: {
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
        padding: 7,
        width: '80%'
    },
    check: {
        fontSize: '16px',
        color: 'gray',
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
        marginTop: '8%',
        alignSelf: 'center',
    },
    profile: {
        width: '150px',
        height: '100px',
        marginTop: 35,
        alignSelf: 'center',
    },

})