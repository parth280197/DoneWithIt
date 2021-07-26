import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./app/components/inputs/ImageInput";
import { ImageInputList } from "./app/components/lists";

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
    <>
      <ImageInputList />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40
  }
})