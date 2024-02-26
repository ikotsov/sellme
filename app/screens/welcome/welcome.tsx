import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ASSETS_SOURCES from "./assets/sources";

import { baseColors } from "@constants/colors";

export function Welcome() {
  return (
    <ImageBackground
      source={ASSETS_SOURCES.background}
      style={styles.background}
    >
      <Logo />
      <CtaButtons />
    </ImageBackground>
  );
}

function Logo() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={[styles.logo, { marginTop: top }]}
        source={ASSETS_SOURCES.logo}
      />
      <Text>Sell anything you want</Text>
    </View>
  );
}

function CtaButtons() {
  return (
    <View>
      <View style={[styles.button, styles.loginButton]} />
      <View style={[styles.button, styles.registerButton]} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    backgroundColor: baseColors.primary,
  },
  registerButton: {
    backgroundColor: baseColors.secondary,
  },
  button: {
    width: "100%",
    height: 70,
  },
});
