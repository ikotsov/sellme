import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Gap from "@components/gap";
import Icon from "@components/icon";
import ListItem from "@components/list-item";
import ListItemSeparator from "@components/list-item-separator";
import { baseColors } from "@constants/colors";

function MyAccount() {
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <ListItem
          title="Yiannos Kotsovilis"
          subtitle="programming@gmail.com"
          image={require("../assets/images/mosh.jpg")}
        />
        <Gap size={20} />
        <ListItem
          title="My Listings"
          Icon={
            <Icon
              name="format-list-bulleted"
              backgroundColor={baseColors.primary}
            />
          }
        />
        <ListItemSeparator />
        <ListItem
          title="My messages"
          Icon={<Icon name="email" backgroundColor={baseColors.secondary} />}
        />
        <Gap size={20} />
        <ListItem
          title="Log out"
          Icon={<Icon name="logout" backgroundColor={baseColors.yellow} />}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: baseColors.grey.light,
  },
});

export default MyAccount;
