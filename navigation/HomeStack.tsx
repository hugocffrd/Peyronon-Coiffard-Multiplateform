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
        name="Animal home"
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
        initialParams={{
          theme: theme,
          windowWidth: windowWidth,
        }}
      >
        {(navigation) => <Home navigation={navigation} theme={theme} />}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        component={AnimalDetails}
        options={{
          title: "Details",
          headerStyle: {
            backgroundColor: theme.navigation,
            borderColor: theme.navigation,
          },
          headerTintColor: theme.navigationText,
          headerTitleStyle: {
            color: theme.navigationText,
          },
        }}
        initialParams={{
          theme: theme,
          windowWidth: windowWidth,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
