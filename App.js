import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppNavigator from "./navigation/AppNavigator";
import usersRecucer from "./store/reducers/users";

enableScreens();

const rootReducer = combineReducers({
  users: usersRecucer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)} />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
