import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimalDetails from "../components/animal/AnimalDetails";
import { Dimensions } from "react-native";
import Favorite from "../screens/Favorite";

const Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;

interface StackNavigationProps {
  theme: Record<string, string>;
}

export default function StackNavigation(props: StackNavigationProps) {
  const { theme } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        options={{
          headerStyle: {
            backgroundColor: theme.navigation,
            borderColor: theme.navigation,
          },
          headerTintColor: theme.navigationText,
          headerTitleStyle: {
            color: theme.navigationText,
          },
        }}
      >
        {(navigation) => (
          <Favorite
            navigation={navigation}
            windowWidth={windowWidth}
            theme={theme}
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
