import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Gap from "@components/gap";
import ListItem from "@components/list-item";
import Screen from "@components/screen";
import { baseColors } from "@constants/colors";

function ListingDetails() {
  return (
    <Screen isFullScreen={false} withinSafeArea={false} flavor="none">
      <Image
        style={styles.image}
        source={require("../assets/images/jacket.jpg")}
      />
      <View style={styles.details}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
        <Gap size={50} />
        <ListItem
          image={require("../assets/images/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="5 Listings"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: baseColors.secondary,
    fontSize: 20,
    fontWeight: "700",
  },
});

export default ListingDetails;
