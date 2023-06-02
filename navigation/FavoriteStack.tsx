import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimalDetails from "../components/animal/AnimalDetails";
import { Dimensions } from "react-native";
import Favorite from "../screens/Favorite";

const Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;

export default function StackNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite">
        {(navigation) => (
          <Favorite navigation={navigation} windowWidth={windowWidth} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        options={{
          title: "Details",
        }}
      >
        {(navigation) => <AnimalDetails navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
