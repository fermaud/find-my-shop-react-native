import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import AppNavigator from "./navigation/AppNavigator";
import articlesReducer from "./store/reducers/articles";
import shopsReducer from "./store/reducers/shops";
import authReducer from "./store/reducers/auth";
import usersRecucer from "./store/reducers/users";

// enableScreens();

const rootReducer = combineReducers({
  articles: articlesReducer,
  shops: shopsReducer,
  auth: authReducer,
  users: usersRecucer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
