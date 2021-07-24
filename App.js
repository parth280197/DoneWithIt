import React, { useState } from "react";

import Screen from "./app/components/screens/Screen";
import AppPicker from "./app/components/picker/AppPicker";
import AppTextInput from "./app/components/inputs/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import { Text } from "react-native";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  const [t, setT] = useState();

  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
