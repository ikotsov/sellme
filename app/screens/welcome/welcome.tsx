import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ASSETS_SOURCES from "./assets/sources";

import Button from "@components/button";
import { baseColors } from "@constants/colors";

function Welcome() {
  return (
    <ImageBackground
      source={ASSETS_SOURCES.background}
      style={styles.background}
      blurRadius={10}
    >
      <Logo />
      <CtaButtons />
    </ImageBackground>
  );
}

function Logo() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.logoBox}>
      <Image
        style={[styles.logo, { marginTop: top }]}
        source={ASSETS_SOURCES.logo}
      />
      <Text style={styles.logoText}>Sell anything you want</Text>
    </View>
  );
}

function CtaButtons() {
  return (
    <View style={styles.buttons}>
      <Button title="Login" onPress={() => null} />
      <Button title="Register" onPress={() => null} secondary />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoBox: {
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 25,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  loginButton: {
    backgroundColor: baseColors.primary,
  },
  registerButton: {
    backgroundColor: baseColors.secondary,
  },
  buttons: {
    paddingHorizontal: 20,
    rowGap: 10,
    paddingBottom: 20,
  },
});

export default Welcome;
