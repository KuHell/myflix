import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};

export default Stack;

const ScreenOne = () => (
  <View>
    <Text>One</Text>
  </View>
);

const ScreenTwo = () => (
  <View>
    <Text>Two</Text>
  </View>
);

const ScreenThree = () => (
  <View>
    <Text>three</Text>
  </View>
);
