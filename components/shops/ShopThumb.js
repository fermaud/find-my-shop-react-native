import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Image,
  TouchableNativeFeedback,
} from "react-native";

const ShopThumb = (props) => {
  let TouchableCmp = TouchableWithoutFeedback;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onSelect}>
      <View style={{ ...styles.shop, ...props.shopStyle }}>
        <View style={{ flex: 1 }}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
          <Text>{props.city}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  shop: {
    flex: 1,
    flexDirection: "column",
    height: 200,
    width: 250,
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    height: 60,
    paddingTop: 5,
  },
  price: {
    fontWeight: "bold",
  },
});

export default ShopThumb;
