import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inpuBox}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor='#fff'
          keyboardType="email-address"
          onSubmitEditing={()=> this.pasword.focus()}
        />
        <TextInput
          style={styles.inpuBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={(input)=> this.pasword = input}
        />
        <TextInput
          style={styles.inpuBox}
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={(input)=> this.pasword = input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inpuBox: {
    marginVertical: 10,
    width: 300,
    height: 40,
    backgroundColor: "rgba(255,255,255, 0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff"
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
