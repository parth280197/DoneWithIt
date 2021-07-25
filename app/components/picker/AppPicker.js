import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./../texts/AppText";
import Screen from "./../screens/Screen";
import defaultStyles from "../../utils/styles";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem, width = "100%", CustomPickerItem = PickerItem, numberOfColumns = 1 }) {
    const [modalVisible, setModalVisible] = useState(false);

    const styledSelectedItem = selectedItem ?
        (<AppText style={styles.textSelected}> {selectedItem.label} </AppText>) :
        (<AppText style={styles.text}>{placeholder}</AppText>);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width: width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    {styledSelectedItem}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <CustomPickerItem
                                item={item}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        alignSelf: 'center',
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    textSelected: {
        flex: 1,
        color: defaultStyles.colors.medium
    },
});

export default AppPicker;
