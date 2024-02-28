import React from "react";
import { StyleSheet, View } from "react-native";

import { baseColors } from "@constants/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: baseColors.grey.light,
  },
});

export default ListItemSeparator;
