import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { baseColors } from "../constants/colors";

export function ViewImage() {
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
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
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
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: baseColors.primary,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: baseColors.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
