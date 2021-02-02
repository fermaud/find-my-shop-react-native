import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { GeneralNavigator, AuthNavigator } from "./ShopNavigator";
import Colors from "../constants/Colors";

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
  // const isAuth = useSelector((state) => !!state.auth.token);
  const isAuth = true;
  return (
    <NavigationContainer theme={GeneralTheme}>
      {isAuth && <GeneralNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
