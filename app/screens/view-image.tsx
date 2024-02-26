import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { baseColors } from "../constants/colors";

function ViewImage() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top + 20 }]}>
      <Icons />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/images/chair.jpg")}
      />
    </View>
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
    flex: 1,
    backgroundColor: baseColors.black,
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
