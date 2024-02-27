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
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

function Card(props: Props) {
  const { image, subtitle, title } = props;

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: baseColors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 240,
  },
  details: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: baseColors.secondary,
    fontWeight: "700",
  },
});

export default Card;
