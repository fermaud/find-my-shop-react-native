import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { ImageHeaderScrollView, TriggeringView } from "react-native-image-header-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const ArticleDetailsScreen = (props) => {
  const article = props.route.params;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <ImageBackground
            resizeMethod={"auto"}
            source={{ uri: article.articleImageUrl }}
            style={styles.image}
            imageStyle={{
              resizeMode: "cover",
              alignSelf: "flex-end"
            }}
          >
            <View style={styles.headerButtonContainer}>
              <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                <Ionicons style={styles.backButton} name="ios-arrow-back-outline" size={40} color="white" />
              </TouchableWithoutFeedback>
              <Ionicons style={styles.backButton} name="ios-heart-outline" size={40} color="white" />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{article.articleTitle}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 400,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  details: {
    padding: 10
  },
  title: {
    fontSize: 20
  },
  headerButtonContainer: {
    marginTop: 50,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  }
});

export default ArticleDetailsScreen;
