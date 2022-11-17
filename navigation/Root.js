import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "./Tabs";
import stack from "./Stack";

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stack" component={stack} />
    </Nav.Navigator>
  );
};

export default Root;
