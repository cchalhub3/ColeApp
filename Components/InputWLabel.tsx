
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import CompleteIncomplete from './CompleteIncompleteView';

const styles = StyleSheet.create({
    Label: {
        marginTop: 16,
        marginLeft: 20,
        paddingBottom: 12, 
        fontSize: 20, 
        color: '#909090'
    },

    InputBox: {
        marginRight: 20, 
        marginTop: 12, 
        paddingLeft: 20, 
        paddingRight: 20, 
        borderRadius: 8, 
        borderWidth: 1,
        borderColor: '#A6A6A6',
        height: 48, 
        justifyContent: 'center',
    }, 

    LabelText: {
        fontSize: 16, 
    },
    
    InputText: {
        fontSize: 16
        
    }
    
});

// Component for the bucket lists containers on the home screen. 
const InputWLabel = ({ Label, placeHolder }) => (

         <View style={styles.Label}>
             <Text style={styles.LabelText}>
                 {Label}
             </Text>

            <View style={styles.InputBox}>
                <TextInput style={styles.InputText}
                    placeholder= {placeHolder}
                />
            </View>
             
        </View>    
     
);

export default InputWLabel;