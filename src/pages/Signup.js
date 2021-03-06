import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";
import {Actions} from "react-native-router-flux";

import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";

export default class Signup extends Component {
    goBack(){
        Actions.pop();
    }
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <SignupForm type ="Signup"/>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
          <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16
  },
  signupButton:{
    color:'#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});
