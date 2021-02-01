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
    <View style={styles.article}>
      <TouchableCmp onPress={props.onSelect} useForeground>
        <View>
          <View style={styles.imageContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    height: 200,
    width: 250,
    marginRight: 10,
  },
  container: {},
  imageContainer: {
    width: 250,
    height: 150,
    // borderRadius: 7,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    paddingTop: 5,
  },
  title: {},
  price: {
    fontWeight: "bold",
  },
});

export default ShopThumb;
