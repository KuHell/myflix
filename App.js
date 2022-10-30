import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./public/img/car.jpg"));
    await Image.prefetch;
  };
  if (!ready) {
    return (
      <AppLoading
        onFinish={onFinish}
        startAsync={startLoading}
        onError={console.error}
      />
    );
  }
  return null;
}
