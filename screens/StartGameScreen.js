import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorect={false} keyboardType="number-pad" maxLength={2}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.Button}><Button title="Reset" onPress={()=> {}} color={Colors.accent}/></View>
                    <View style={styles.Button}><Button title="Confirm" onPress={()=> {}} color={Colors.primary}/></View>
                </View>
            </Card>        
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    buton:{
        width:100
    },
    inputContainer:{
        width:300,
        maxWidth: "80%",
        alignItems: "center"
    },
    title:{
        fontSize:20,
        marginVertical:10
    }, 
    input:{
        width:50,
        textAlign: 'center'
    }
    
});

export default StartGameScreen;
