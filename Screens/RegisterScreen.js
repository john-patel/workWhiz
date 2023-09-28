import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native"

const RegisterScreen = ({navigation}) => {
    const LoginScreen = () => {
        navigation.navigate("Login")
    }
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.headerTextOne}>Create Account</Text>
        <View style={styles.Container}>
            <View style={styles.headerPara}>
                <Text style={styles.headingTwo}>Create an account so you can explore all the existing jobs</Text>
            </View>
            <View style={styles.inputBoxes}>
                <TextInput style={styles.InputBox} placeholder='Email' placeholderTextColor="#C0C0C0"/>
                <TextInput style={styles.InputBox} placeholder='Password' placeholderTextColor="#C0C0C0"/>
                <TextInput style={styles.InputBox} placeholder='Confirm Password' placeholderTextColor="#C0C0C0"/>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable>
                    <Text style={styles.button}>Sign Up</Text>
                </Pressable>
            </View>
            <Pressable onPress={LoginScreen}>
                <Text style={styles.signInbtn}>Already have an account</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        mainContainer: { 
            backgroundColor: "#eaf4fc",
            flex: 1
        },
        headerTextOne: {
            color: "#5AA9E6",
            fontSize: 30,
            textAlign:  'center',
            marginTop: 70,
            letterSpacing: 1,
            fontWeight: 'bold',
        },
        Container: {
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: "red"
        },
        headerPara: {
            marginTop: 30,
            width: "90%",
            // backgroundColor: "yellow"
        },
        headingTwo: {
            color: "black",
            fontSize: 16,
            letterSpacing: 1,
            textAlign: 'center',
        },
        inputBoxes: {
            width: "90%",
            marginTop: 30
        },
        InputBox: {
            color: "black",
            borderWidth: 2.5,
            borderColor: "#5AA9E6",
            height: 50,
            margin: 12,
            paddingLeft: 20,
            borderRadius: 10,
        },
        buttonContainer: {
            width: "85%",
            backgroundColor: "#318CE7",
            display: 'flex',
            alignItems: 'center',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
            marginTop: 50
        },
        button: {
            padding: 10,
            color: "white",
            fontSize: 25,
        },
        signInbtn: {
            marginTop: 50,
            color: "#8c92ac"
        }
    }
)

export default RegisterScreen