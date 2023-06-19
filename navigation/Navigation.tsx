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

  const NavigationFavoriteStack = () => {
    return <FavoriteStack theme={theme} />;
  };

  const NavigationHomeStack = () => {
    return <HomeStack windowWidth={windowWidth} theme={theme} />;
  };

  const NavigationCagnoteStack = () => {
    return <CagnoteStack theme={theme} />;
  };

  const NavigationSettings = () => {
    return (
      <Settings
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        theme={theme}
        windowWidth={windowWidth}
      />
    );
  };

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
          component={NavigationFavoriteStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={NavigationHomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Kitty"
          component={NavigationCagnoteStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={NavigationSettings}
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
        ></Tab.Screen>
      </Tab.Navigator>
    </Provider>
  );
}
