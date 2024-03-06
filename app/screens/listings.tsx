import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "@components/card";
import Screen from "@components/screen";

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
    <Screen style={styles.screen}>
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
});

export default Listings;
