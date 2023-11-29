import React from "react";
import {StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions} from 'react-native';

const WIDTH =  Dimensions.get('window').width;
const HEIGHT =  150;
const ModalLogin = (props) => {
const closeModal = (bool, data) => {
      props.changeModalVisible(bool);
      props.setData(data);
    }

  return(
        <View disabled={false} style={styles.container} >
          <View style={[styles.modal , styles.shadow]}>
            <View style={styles.textView}>
              <Text style={[styles.text , {fontSize: 20}]}>Accound do not exists</Text>
              <Text style={styles.textsub}>Register and try again</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.TouchableOpacity} onPress={() => closeModal(false, 'Ok')}>
                <Text style={[styles.text , {color: 'blue'}]}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal: {
        height: HEIGHT,
        width: WIDTH - 60,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textView:{
      flex: 1,
      alignItems: 'center'
    },
    text: {
      margin: 5,
      fontWeight: 'bold',
    },
    textsub: {
      margin: 5,
      fontSize: 16,
      fontWeight: 'light',
    },
    buttons: { 
      width: '100%',
      flexDirection: 'row'
    },
    TouchableOpacity: {
      flex: 1,
      paddingVertical: 10 ,
      alignItems:'center',
    },
    shadow: {
      shadowColor: "#000",
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
  })
  
export {ModalLogin}