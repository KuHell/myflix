import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset, useAssets } from "expo-asset";
import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

//리소스를 가져오는 동안 스플래시 화면을 계속 표시합니다.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [assets] = useAssets([require("./public/img/car.jpg")]);

  // 데이터 수집 함수
  const prepare = async () => {
    console.log("데이터 수집 중");
    try {
      await Font.loadAsync(Ionicons.font);
      await assets;
      // 로딩 화면 출력 위해 2초 동안 로딩 출력
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  };

  // appIsReady true 로 바뀌면 바로 로딩을 끔
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    prepare();
  }, []);

  return !appIsReady || !assets ? null : (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
}
