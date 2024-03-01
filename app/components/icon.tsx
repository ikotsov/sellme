import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { baseColors } from "../constants/colors";

type Props = {
  name: React.ComponentProps<typeof MaterialCommunityIcon>["name"];
  size?: number;
  color?: string;
  backgroundColor?: string;
};

function Icon(props: Props) {
  const {
    name,
    size = 40,
    color = baseColors.white,
    backgroundColor = baseColors.black,
  } = props;

  const halfSize = size / 2;

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: halfSize,
          backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcon name={name} color={color} size={halfSize} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Icon;
