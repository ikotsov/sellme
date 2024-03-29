import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Button from "@components/button";
import Screen from "@components/screen";
import { baseColors } from "@constants/colors";
import ASSETS_SOURCES from "./assets/sources";

function Welcome() {
  return (
    <ImageBackground
      source={ASSETS_SOURCES.background}
      blurRadius={10}
      style={styles.background}
    >
      <Screen flavor="none" style={styles.container}>
        <Logo />
        <CtaButtons />
      </Screen>
    </ImageBackground>
  );
}

function Logo() {
  return (
    <View style={styles.logoBox}>
      <Image style={styles.logo} source={ASSETS_SOURCES.logo} />
      <Text style={styles.tagline}>Sell anything you want</Text>
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
  },
  container: {
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
  tagline: {
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
  },
});

export default Welcome;
