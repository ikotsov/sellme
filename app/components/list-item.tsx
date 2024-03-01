import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { baseColors } from "@constants/colors";
import { Swipeable } from "react-native-gesture-handler";

type RightActionsRenderer = React.ComponentProps<
  typeof Swipeable
>["renderRightActions"];

type Props = {
  // TODO: Find a better API to handle image and icon.
  image?: ImageSourcePropType;
  Icon?: React.ReactElement;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  renderRightActions?: RightActionsRenderer;
};

function ListItem(props: Props) {
  const { image, title, subtitle, onPress, renderRightActions, Icon } = props;

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          backgroundColor: pressed ? baseColors.grey.light : baseColors.white,
        })}
      >
        <View style={styles.container}>
          {Icon ? Icon : null}
          {image ? <Image style={styles.image} source={image} /> : null}
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  details: {
    justifyContent: "center",
    marginLeft: 10,
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
