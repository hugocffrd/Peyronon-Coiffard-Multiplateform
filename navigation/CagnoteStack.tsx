import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimalDetails from "../components/animal/AnimalDetails";
import { Cagnote } from "../screens/Cagnote";

const Stack = createStackNavigator();

interface CagnoteStackProps {
  theme: Record<string, string>;
}

export default function CagnoteStack(props: CagnoteStackProps) {
  const { theme } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Animals kitty"
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
        {(navigation) => <Cagnote navigation={navigation} theme={theme} />}
      </Stack.Screen>
      <Stack.Screen
        name="Details kitty"
        options={{
          title: "Details kitty",
        }}
      >
        {(navigation) => <AnimalDetails navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
