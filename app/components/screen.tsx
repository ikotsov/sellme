import React from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { baseColors } from "@constants/colors";

type Flavor = "dark" | "light" | "none";

type Props = {
  isFullScreen?: boolean;
  withinSafeArea?: boolean;
  flavor?: Flavor;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

function Screen(props: Props) {
  const {
    isFullScreen = true,
    withinSafeArea = true,
    flavor = "light",
    style,
    children,
  } = props;

  const dynamicStyle: ViewStyle = {
    flex: isFullScreen ? 1 : 0,
    backgroundColor: getBackgroundColor(flavor),
  };

  const Container = withinSafeArea ? SafeAreaView : View;

  return <Container style={[dynamicStyle, style]}>{children}</Container>;
}

const getBackgroundColor = (flavor: Flavor) => {
  if (flavor === "light") return baseColors.grey.light;
  if (flavor === "dark") return baseColors.black;
  return undefined;
};

export default Screen;
