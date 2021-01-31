import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { GeneralNavigator } from "./ShopNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <GeneralNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
