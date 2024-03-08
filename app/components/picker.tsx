import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Screen from "@components/screen";
import { baseColors } from "@constants/colors";

type Item = {
  label: string;
  value: string;
};

type Props = {
  selectedItem?: Item;
  onSelectedItem: (item: Item) => void;
  icon?: React.ComponentProps<typeof MaterialCommunityIcon>["name"];
  placeholder: string;
  items: Item[];
};

function Picker(props: Props) {
  const { selectedItem, onSelectedItem, icon, placeholder, items } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => setIsModalVisible(true)}
      >
        {icon ? (
          <MaterialCommunityIcon
            name={icon}
            size={20}
            color={baseColors.grey.medium}
            style={styles.icon}
          />
        ) : null}
        <Text style={styles.placeholder}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <MaterialCommunityIcon
          name="chevron-down"
          size={20}
          color={baseColors.grey.medium}
        />
      </Pressable>
      <Modal visible={isModalVisible} animationType="slide">
        <SafeAreaProvider>
          <Screen>
            <Button title="close" onPress={() => setIsModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Item
                  label={item.label}
                  onPress={() => {
                    setIsModalVisible(false);
                    onSelectedItem(item);
                  }}
                />
              )}
            />
          </Screen>
        </SafeAreaProvider>
      </Modal>
    </>
  );
}

type ItemProps = {
  label: string;
  onPress: () => void;
};
function Item(props: ItemProps) {
  const { label, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <Text style={styles.item}>{label}</Text>
    </Pressable>
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
  placeholder: {
    flex: 1,
    color: baseColors.grey.dark,
    fontSize: 18,
  },
  item: {
    padding: 20,
  },
});

export default Picker;
