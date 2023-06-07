import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimalDetails from "../components/animal/AnimalDetails";
import { Dimensions } from "react-native";
import Home from "../screens/Home";

const Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;
export default function StackNavigation(props) {
  const { fontSize, theme } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerStyle: {
            backgroundColor: theme.navigation,
            borderColor: theme.navigation,
          },
        }}
      >
        {(navigation) => (
          <Home
            theme={theme}
            fontSize={fontSize}
            navigation={navigation}
            windowWidth={windowWidth}
          />
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
