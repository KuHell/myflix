import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, TouchableOpacity, useColorScheme } from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isTheme = useColorScheme() === "dark";

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false, // 뒤로가기 버튼옆에 전title표시
        // headerShown: false,                 // header titme 제거
        headerTintColor: "#ffa801", // title color
        // presentation: "modal", // modal창 처럼 화면전환

        // styles
        tabBarStyle: { backgroundColor: isTheme ? "#1e272e" : "#fff" },
        tabBarActiveTintColor: isTheme ? "#ffa801" : "#1e272e",
        tabBarInactiveTintColor: isTheme ? "#d2dae2" : "#d2dae2",
        headerStyle: {
          backgroundColor: isTheme ? "#1e272e" : "#fff",
        },
        headerTitleStyle: {
          color: isTheme ? "#fff" : "#1e272e",
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};

export default Stack;

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>Go Two</Text>
  </TouchableOpacity>
);

const ScreenTwo = ({ navigation: { navigate, goBack } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Go Three</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => goBack()}>
      <Text>Go Back</Text>
    </TouchableOpacity>
  </>
);

const ScreenThree = ({ navigation: { navigate } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("One")}>
      <Text>Go One</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
      <Text>go Search</Text>
    </TouchableOpacity>
  </>
);
