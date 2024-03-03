import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListItem from "@components/list-item";
import ListItemSeparator from "@components/list-item-separator";
import { baseColors } from "@constants/colors";

type Message = {
  id: string;
  title: string;
  description: string;
  image: number;
};
type Messages = Message[];

const INITIAL_MESSAGES: Messages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: "3",
    title: "T3",
    description: "D3",
    image: require("../assets/images/mosh.jpg"),
  },
];

function Messages() {
  const [messages, setMessages] = useState<Messages>(INITIAL_MESSAGES);
  const [refreshing] = useState(false);

  const handleDelete = (messageId: string) => {
    const newMessages = messages.filter((message) => message.id !== messageId);
    setMessages(newMessages);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => null}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: "3",
              title: "T3",
              description: "D3",
              image: require("../assets/images/mosh.jpg"),
            },
          ])
        }
      />
    </SafeAreaView>
  );
}

function ListItemDeleteAction({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.deleteButton}>
      <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color={baseColors.white}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    backgroundColor: baseColors.danger,
  },
});

export default Messages;
