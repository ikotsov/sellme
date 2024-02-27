import React from "react";
import { View } from "react-native";

function Gap({ size }: { size: number }) {
  return <View style={{ flexBasis: size }} />;
}

export default Gap;
