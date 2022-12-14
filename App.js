import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset, useAssets } from "expo-asset";
import { View, Text, useColorScheme } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Tabs from "./navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled";

//리소스를 가져오는 동안 스플래시 화면을 계속 표시합니다.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [assets] = useAssets([require("./public/img/car.jpg")]);
  const isTheme = useColorScheme() === "light";

  // 데이터 수집 함수
  const prepare = async () => {
    try {
      await Font.loadAsync(Ionicons.font);
      await assets;
      // 로딩 화면 출력 위해 2초 동안 로딩 출력
      // await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  };

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    prepare();
  }, []);

  return !appIsReady || !assets ? null : (
    <ThemeProvider theme={isTheme ? darkTheme : lightTheme}>
      {/* <NavigationContainer theme={isTheme ? DarkTheme : DefaultTheme}> */}
      <NavigationContainer>
        {/* <Tabs /> */}
        {/* <Stack /> */}
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
