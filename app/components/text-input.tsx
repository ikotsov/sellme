import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { TextInput as RNTextInput, StyleSheet, View } from "react-native";

import { baseColors } from "@constants/colors";

type Props = {
  icon?: React.ComponentProps<typeof MaterialCommunityIcon>["name"];
} & React.ComponentProps<typeof RNTextInput>;

function TextInput(props: Props) {
  const { icon, ...otherProps } = props;

  return (
    <View style={styles.container}>
      {icon ? (
        <MaterialCommunityIcon
          name={icon}
          size={20}
          color={baseColors.grey.medium}
          style={styles.icon}
        />
      ) : null}
      <RNTextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: baseColors.grey.light,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: baseColors.grey.dark,
    fontSize: 18,
  },
});

export default TextInput;
