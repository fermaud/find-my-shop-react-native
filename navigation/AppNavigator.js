import React from "react";
import { NavigationContainer, DefaultTheme, CommonActions } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { GeneralNavigator, AuthNavigator } from "./ShopNavigator";
import Colors from "../constants/Colors";
import StartupScreen from "../screens/StartupScreen";

const GeneralTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: Colors.primary,
    border: "#E5E5E5"
  }
};

const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer theme={GeneralTheme}>
      {isAuth && <GeneralNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
