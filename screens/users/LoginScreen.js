import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

import SectionTitle from "../../components/UI/SectionTitle";
import CustomButton from "../../components/UI/CustomButton";
import Colors from "../../constants/Colors";

const LoginScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={require("../../assets/images/login-bg.jpg")}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../assets/images/fms-logo.png")} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <SectionTitle style={{ marginTop: 15, textAlign: "center", color: "#5A5A5A" }}>Trouvez les meilleurs shops et articles en exclusivité autour de vous !</SectionTitle>
        <View>
          <CustomButton onPress={() => console.log("Register")} style={styles.subscribeButtonStyle} textStyle={{ color: "white", fontSize: 17 }} title="S'inscrire sur FindMyShop" />
          <CustomButton onPress={() => console.log("Login")} style={styles.loginButtonStyle} textStyle={{ color: "#E47747", fontSize: 17 }} title="J'ai déjà un compte" />
        </View>
      </View>
      <Text style={styles.about}>À propos de FindMyShop</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  imageContainer: {
    height: "40%",
    width: "100%"
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    width: "60%"
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  },
  formContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "space-between"
  },
  subscribeButtonStyle: {
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: Colors.primary
  },
  loginButtonStyle: {
    paddingVertical: 17,
    marginBottom: 10,
    backgroundColor: "white",
    borderColor: Colors.primary,
    borderWidth: 3
  },
  about: {
    textAlign: "center",
    paddingBottom: 20,
    color: "#ACACAC",
    fontWeight: "500"
  }
});

export default LoginScreen;
