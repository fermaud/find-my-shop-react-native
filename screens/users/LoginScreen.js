import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import SectionTitle from "../../components/UI/SectionTitle";

const LoginScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/login-bg.jpg")}
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/fms-logo.png")}
            />
          </View>
        </ImageBackground>
      </View>
      <View>
        <SectionTitle
          style={{ marginBottom: 15, marginTop: 25, textAlign: "center" }}
        >
          Trouvez les meilleurs shops et articles en exclusivité autour de vous
          !
        </SectionTitle>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  imageContainer: {
    height: "40%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: "60%",
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});

export default LoginScreen;
