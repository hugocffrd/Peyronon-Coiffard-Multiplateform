import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/Settings";
import { darkTheme, lightTheme } from "../theme/theme";
import { Provider } from "react-redux";
import store from "../redux/store";
import HomeStack from "./HomeStack";
import FavoriteStack from "./FavoriteStack";
import CagnoteStack from "./CagnoteStack";

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const windowWidth = Dimensions.get("window").width;

  return (
    <Provider store={store}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: theme.navigation,
          },
          tabBarActiveTintColor: theme.navigationTextSelected,
          tabBarInactiveTintColor: theme.navigationText,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },

          tabBarIcon: ({ color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={"home"}
                  size={size}
                  color={theme.navigationText}
                />
              );
            } else if (route.name === "Favorites") {
              return (
                <Ionicons
                  name={"star"}
                  size={size}
                  color={theme.navigationText}
                />
              );
            } else if (route.name === "Settings") {
              return (
                <Ionicons
                  name={"settings"}
                  size={size}
                  color={theme.navigationText}
                />
              );
            } else if (route.name === "Kitty") {
              return (
                <Ionicons
                  name={"cash"}
                  size={size}
                  color={theme.navigationText}
                />
              );
            }
          },
        })}
      >
        <Tab.Screen
          name="Favorites"
          component={() => <FavoriteStack theme={theme} />}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={() => (
            <HomeStack windowWidth={windowWidth} theme={theme} />
          )}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Kitty"
          component={() => <CagnoteStack theme={theme} />}
          options={{
            headerShown: false,
          }}
          
        />
        <Tab.Screen
          name="Settings"
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
          {() => (
            <Settings
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              theme={theme}
              windowWidth={windowWidth}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </Provider>
  );
}
