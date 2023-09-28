import React from 'react'
import { View, StyleSheet, Image, Pressable, Text } from "react-native"

const WelcomeScreen = ({navigation}) => {
    const LoginScreen = () => {
        navigation.navigate('Login')
    }

    const RegisterScreen = () => {
        navigation.navigate('Register')
    }
  return (
    <View style={styles.conatiner}>
        <Image style={styles.image} source={require('../Images/welcome_image.png')}/>
        <View style={styles.header}>
            <Text style={styles.headingTextOne}>
                Discover Your
            </Text>
            <Text style={styles.headingTextTwo}>
                Dream Job here
            </Text>
        </View>
        <View style={styles.headerSection}>
        <View style={styles.paragraph}>
            <Text style={styles.paragraphText}>
                Explore all the existing job roles based on your interest and study major
            </Text>
        </View>
        </View>
        <View style={styles.secondContainer}>
            <Pressable style={styles.button} onPress={LoginScreen}>
                <Text style={styles.btntextOne}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={RegisterScreen}>
                <Text style={styles.btntexttwo}>Sign Up</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        conatiner: {
            backgroundColor: '#eaf4fc',
            flex: 1
        },
        image: {
            width: 500,
            height: 400,
            alignSelf: 'center',
        },
        headerSection: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        header: {
            marginTop: 30,
        },
        headingTextOne: {
            textAlign: 'center', 
            fontWeight: '700',
            fontSize: 30,
            color: '#5AA9E6',
        },
        headingTextTwo: {
            textAlign: 'center', 
            fontWeight: '700',
            fontSize: 30,
            color: '#5AA9E6',
        },
        paragraph: {
            width: 250,
        },
        paragraphText: {
            textAlign: 'center',
            fontSize: 14,
            marginTop: 10,
            marginBottom: 50,
            lineHeight: 20,
            color : "black"
        },
        secondContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        button: {},
        btntextOne: {
            borderRadius: 10,
            backgroundColor: '#318CE7',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 40,
            paddingRight: 40,
            color: "white",
            fontWeight: 'bold',
            fontSize: 20,        
            letterSpacing: 0.6,
        },
        btntexttwo: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 40,
            paddingRight: 40,
            color: "black",
            fontWeight: 'bold',
            fontSize: 20,
            letterSpacing: 0.6,
        }
    }
)

export default WelcomeScreen