import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimalDetails from "../components/animal/AnimalDetails";
import { Dimensions } from "react-native";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;
const invisibleHeader = {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  },
};
export default function StackNavigation(props) {
  const { fontSize } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {(navigation) => (
          <Home
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
