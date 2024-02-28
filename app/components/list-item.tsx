import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { baseColors } from "@constants/colors";

type Props = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};

function ListItem(props: Props) {
  const { image, title, subtitle } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: "500",
  },
  subtitle: {
    color: baseColors.grey.medium,
  },
});

export default ListItem;
