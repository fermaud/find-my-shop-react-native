import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import * as Facebook from "expo-facebook";
import { useSelector, useDispatch } from "react-redux";

import * as authActions from "../../store/actions/auth";
import SectionTitle from "../../components/UI/SectionTitle";
import CustomButton from "../../components/UI/CustomButton";
import Colors from "../../constants/Colors";

const LoginScreen = (props) => {
  const dispatch = useDispatch();

  async function facebookLogin() {
    try {
      await Facebook.initializeAsync({
        appId: "fb425609455355772"
      });
      const { type, token, expirationDate, permissions, declinedPermissions } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        let response = await fetch("https://graph.facebook.com/me?fields=last_name,first_name,gender,email,picture.type(large),birthday,location&access_token=" + token);
        response = await response.json();
        const formattedUserData = {
          firstName: response.first_name,
          lastName: response.last_name,
          birthday: response.birthday,
          gender: response.gender,
          facebookLocation: response.location,
          mail: response.email,
          facebookThumbnailPicturePath: response.picture.data.url,
          facebookUserId: response.id
        };
        await dispatch(authActions.facebookAuth(formattedUserData));
      } else {
        console.log("Erreur dans le login FB");
      }
    } catch (err) {
      console.log("Facebook Login Error: " + err.message);
    }
  }

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
          <CustomButton onPress={() => facebookLogin()} style={styles.facebookButton} textStyle={{ color: "white", fontSize: 20, fontWeight: "600" }} title="CONTINUER">
            <Image source={require("../../assets/images/facebook.png")} style={{ marginRight: 10, width: 30, height: 30 }} />
          </CustomButton>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <View style={{ flex: 1, paddingRight: 5 }}>
              <CustomButton onPress={() => console.log("Login")} style={styles.googleButton} textStyle={{ color: "white", fontSize: 18, fontWeight: "600" }} title="CONTINUER">
                <Image source={require("../../assets/images/google.png")} style={{ marginRight: 10, width: 25, height: 25 }} />
              </CustomButton>
            </View>
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <CustomButton
                onPress={() => console.log("Login")}
                style={styles.subscribeButton}
                textStyle={{ color: Colors.primary, fontSize: 18, fontWeight: "600" }}
                title="S'INSCRIRE"
              ></CustomButton>
            </View>
          </View>
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
    padding: 17,
    flex: 1,
    justifyContent: "space-between"
  },
  facebookButton: {
    height: 55,
    borderRadius: 50,
    backgroundColor: "#4267B2",
    paddingVertical: 14
  },
  googleButton: {
    height: 55,
    borderRadius: 50,
    backgroundColor: "#4E4E4E",
    paddingVertical: 14
  },
  subscribeButton: {
    height: 55,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: Colors.primary,
    borderWidth: 4,
    paddingVertical: 10
  },
  about: {
    textAlign: "center",
    paddingBottom: 20,
    color: "#ACACAC",
    fontWeight: "500"
  }
});

export default LoginScreen;
