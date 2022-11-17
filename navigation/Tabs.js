import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { View, Text, useColorScheme } from "react-native";
// import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isTheme = useColorScheme() === "light";

  return (
    <Tab.Navigator
      initialRouteName="Movies"
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
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} options={{ tabBarBadge: 1 }} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
