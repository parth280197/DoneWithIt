import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./app/components/inputs/ImageInput";

export default function App() {

  const [imageUris, setFieldValue] = useState([]);

  const handleAdd = (uri) => {
    setFieldValue([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View key={uri} >
          <ImageInput
            imageUri={uri}
            onChangeImage={() => handleRemove(uri)}
          />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => handleAdd(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40
  }
})