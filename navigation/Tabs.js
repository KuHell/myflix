import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { View, Text, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isTheme = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      sceneContainerStyle={{
        backgroundColor: isTheme ? "#1e272e" : "#fff",
      }}
      screenOptions={{
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
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            console.log(focused, color, size);
            return (
              <Ionicons
                name={focused ? "film" : "film-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            console.log(focused, color, size);
            return (
              <Ionicons
                name={focused ? "tv" : "tv-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            console.log(focused, color, size);
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
