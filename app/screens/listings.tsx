import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "@components/card";
import { baseColors } from "@constants/colors";

const LISTINGS = [
  {
    id: "1",
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/images/jacket.jpg"),
  },
  {
    id: "2",
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/images/jacket.jpg"),
  },
];

function Listings() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={LISTINGS}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: baseColors.grey.light,
  },
});

export default Listings;
