import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const HomeScreenInsideApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Household Services App</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find Workers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Find job </Text>
      </TouchableOpacity>
    </View>
  );
};

const WorkerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Find Workers</Text>
      <TouchableOpacity style={styles.buttonFW}>
        <Text style={styles.buttonText}> Search worker </Text>
      </TouchableOpacity>
    </View>
  );
};

const PostJobScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Find Job</Text>
      <TouchableOpacity style={styles.buttonFW}>
        <Text style={styles.buttonText}> Job Available </Text>
      </TouchableOpacity>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="User Home" component={HomeScreenInsideApp} />
        <Tab.Screen name="FindWorkers" component={WorkerScreen} />
        <Tab.Screen name="PostJob" component={PostJobScreen} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000"
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },

  buttonFW: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
