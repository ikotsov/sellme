import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

import { baseColors } from "@constants/colors";

type Props = {
  onPress: () => void;
  secondary?: boolean;
  children: string;
  style?: StyleProp<ViewStyle>;
};

function Button(props: Props) {
  const { secondary = false, onPress, children, style } = props;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          style,
          backgroundColor: secondary
            ? baseColors.secondary
            : baseColors.primary,
          opacity: pressed ? 0.8 : 1,
        },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
  },
  text: {
    color: baseColors.white,
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default Button;
