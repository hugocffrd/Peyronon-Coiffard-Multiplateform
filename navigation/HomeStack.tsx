import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimalDetails from "../components/animal/AnimalDetails";
import Home from "../screens/Home";

interface StackNavigationProps {
  theme: Record<string, string>;
  windowWidth: number;
}

const Stack = createStackNavigator();
export default function StackNavigation(props: StackNavigationProps) {
  const { theme, windowWidth } = props;
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
            windowWidth={windowWidth}
            navigation={navigation}
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
