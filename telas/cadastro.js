import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, CheckBox, TouchableOpacity} from 'react-native';

export default function cadastro({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={style.container}>
      <View style={style.azul}>
        <Image source={require('../assets/banco.png')} style={style.imagens}></Image>
        <Image source={require('../assets/link.png')} style={style.mini}></Image>
        <Image source={require('../assets/celular.png')} style={style.imagens}></Image>
      </View>
      <View style={style.branco}>
        <TextInput style={style.input} placeholder="Your Name"/>
        <TextInput style={style.input} placeholder="Bank Account"/>
        <TextInput style={style.input} placeholder="Email"/>
          <TextInput style={style.input} secureTextEntry={true} placeholder="Password"/>
          <p style={style.senha}>Use 6 characters with a mix of letters, numbers & symbols</p>
        <View style={style.checkbox}>
          <CheckBox style={style.box} value={isSelected} onValueChange={setSelection}/>
          <Text style={style.check}>By signing up, you agree to Bank's Term of use & Privacy Policy</Text> 
        </View>
        <View style={style.TouchableOpacity}>
          <TouchableOpacity style={style.sign} onPress={() => changeModalVisible(true)}>
              <Text style={style.sign1} onPress={() => navigation.navigate('perfil')}>SIGN UP</Text>
          </TouchableOpacity>
            <Text style={style.or}>or</Text> 
          <TouchableOpacity style={style.cancel} onPress={() => navigation.navigate('inicio')}>
              <Text>CANCEL</Text>
          </TouchableOpacity>
        </View>
        <View style={style.forgot}>
          <p>Already signed up? <Text style={style.link} onPress={() => navigation.navigate('inicio')}>Log in</Text></p>
        </View>
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
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  branco:
  {
    backgroundColor: '#fff',
    height: '75%',
    width: '100%',
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  imagens: {
    height: '100px',
    width: '100px',
  },
  mini: {
    height: '80px',
    width: '80px',

  },
  input:
  {
    height: '8%',
    width: '60%',
    marginTop: '10px',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
  },
  senha: {
    fontSize: '15px',
    color: 'lightblue',
    fontFamily: 'Arial',
    width: '60%'
  },
  check: {
    fontSize: '14px',
    color: 'gray',
    width: '80%',
    textAlign: 'justify',
  },
  box: {
    height: '30px',
    width: '30px',
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: '15px',
    width: '60%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  TouchableOpacity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    width: '50%',
    marginTop: '30px',
    alignItems: 'center',
  },
  sign:{
    backgroundColor: '#000080',
    borderRadius: 10,
    width: 100,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },
  sign1: {
    color: 'white',
  },
  or: {
    fontSize: '15px',
    color: 'gray',
  },
  cancel: {
    width: 100,
    height: 30,
    borderColor: 'gray', 
    borderWidth: '1.5px',
    borderRadius: 10, 
    textAlign: 'center',
    justifyContent: 'center',
    },
  forgot:
  {
    justifyContent:'center',
    alignItems: 'center',
    margin: 35,
  },
  link: {
    color: 'lightblue',
    fontFamily: 'TimesNewRoman',
    textDecorationLine: 'underline',
  },
})
