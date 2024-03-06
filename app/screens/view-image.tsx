import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "@components/screen";

function ViewImage() {
  return (
    <Screen flavor="dark" isFullScreen={false} style={styles.container}>
      <Icons />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/images/chair.jpg")}
      />
    </Screen>
  );
}

function Icons() {
  return (
    <View style={styles.icons}>
      <MaterialCommunityIcon name="close" color="white" size={30} />
      <MaterialCommunityIcon name="trash-can-outline" color="white" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImage;
