import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { GeneralNavigator } from "./ShopNavigator";
import Colors from "../constants/Colors";

const GeneralTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: Colors.primary,
    border: "white"
  }
};

const AppNavigator = (props) => {
  return (
    <NavigationContainer theme={GeneralTheme}>
      <GeneralNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
