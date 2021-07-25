import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/screens/Screen";
import {
    ListItem,
    ListItemDeleteAction,
    ListItemSeparator,
} from "../components/lists";

const initialMessages = [
    {
        id: 1,
        title: "Parth",
        description: "Patel  d jhsdjashjkhdskj hdkjas hdkjhsajkd hsahljdahsjk hjjkhfjahdkhfdahsjhgjhj afdkjfdajshf jhdkahfjhdkjshfhdsajhgjkhfdal;dkfuhahgufs dohdsh;j;aldwjfhjsdh ghjdshfdjkhafhhj",
        image: require("../assets/parth.jpg"),
    },
    {
        id: 2,
        title: "Parth",
        description: "Patel",
        image: require("../assets/parth.jpg"),
    },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "Parth",
                            description: "Patel",
                            image: require("../assets/parth.jpg"),
                        },
                    ]);
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
