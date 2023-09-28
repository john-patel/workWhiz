import React from 'react'
import { View, Button, Text, StyleSheet, TextInput, Pressable} from "react-native"

const LoginScreen = ({navigation}) => {
    const RegisterScreen = () => {
        navigation.navigate("Register")
    }
    return (
    <View style={styles.mainContainer}>
        <Text style={styles.headingOne}>Login Here</Text>
        <View style={styles.headerPara}>
            <Text style={styles.headingTwo}>Welcome back you've {"\n"} been missed!</Text>
        </View>
        <View style={styles.formCotainer}>
            <TextInput style={styles.InputBox} placeholder='Email' placeholderTextColor="#C0C0C0"/>
            <TextInput style={styles.InputBox} placeholder='Password' placeholderTextColor="#C0C0C0"/>
            <View style={styles.forgotPassContainer}>
                <Pressable>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </Pressable>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable>
                    <Text style={styles.button}>Sign in</Text>
                </Pressable>
            </View>
            <Pressable onPress={RegisterScreen}>
                <Text style={styles.signUpbtn}>Create new account</Text>
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
        headingOne: {
            color: "#5AA9E6",
            fontSize: 30,
            textAlign:  'center',
            marginTop: 70,
            letterSpacing: 1,
            fontWeight: 'bold',
        },
        headerPara: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30
        },
        headingTwo: {
            color: "black",
            fontSize: 20,
            letterSpacing: 1,
            textAlign: 'center',
            fontWeight: '600'
        },
        formCotainer: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 50
        },
        InputBox: {
            borderWidth: 2.5,
            borderColor: "#5AA9E6",
            height: 50,
            margin: 12,
            paddingLeft: 20,
            borderRadius: 10,
            width: "90%",
        },
        forgotPassContainer: {
            display: 'flex',
            alignItems: 'flex-end',
            width: "90%",
        },
        forgotPassword: {
            color: "#318CE7",
        },
        buttonContainer: {
            width: "90%",
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
        signUpbtn: {
            marginTop: 50,
            color: "#8c92ac"
        }
    }
)

export default LoginScreen