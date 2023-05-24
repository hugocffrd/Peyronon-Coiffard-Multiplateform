import Home from "../screens/Home";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import Favorite from "../screens/Favorite";
import { NavigationContainer } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimalDetails from "../components/animal/AnimalDetails";
import Settings from "../screens/Settings";
import { darkTheme, lightTheme } from "../theme/theme";
import HeaderNavigation from "../components/navigation/HeaderNavigation";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const [fontSize, setFontSize] = useState(20);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      const calculatedFontSize = Math.round(
        (Dimensions.get("window").width * 15) / 375
      );
      setFontSize(calculatedFontSize);
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === "Home") {
                return <Ionicons name={"home"} size={size} color={color} />;
              } else if (route.name === "Favoris") {
                return <Ionicons name={"star"} size={size} color={color} />;
              } else if (route.name === "Settings") {
                return <Ionicons name={"settings"} size={size} color={color} />;
              }
            },
          })}
        >
          <Tab.Screen
            name="Favoris"
            options={{
              header: ({ navigation }) => (
                <HeaderNavigation
                  title="Favoris"
                  navigation={navigation}
                  windowWidth={windowWidth}
                />
              ),
            }}
          >
            {() => <Favorite fontSize={fontSize} />}
          </Tab.Screen>
          <Tab.Screen
            name="Home"
            options={{
              header: ({ navigation }) => (
                <HeaderNavigation
                  title="Home"
                  navigation={navigation}
                  windowWidth={windowWidth}
                />
              ),
            }}
          >
            {(navigation) => (
              <Home
                fontSize={fontSize}
                navigation={navigation}
                windowWidth={windowWidth}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Settings"
            options={{
              header: ({ navigation }) => (
                <HeaderNavigation
                  title="Settings"
                  navigation={navigation}
                  windowWidth={windowWidth}
                />
              ),
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
          <Tab.Screen
            name="Animal Details"
            options={{
              tabBarButton: () => null,
              header: ({ navigation }) => (
                <HeaderNavigation
                  title="Details"
                  navigation={navigation}
                  windowWidth={windowWidth}
                />
              ),
            }}
          >
            {() => <AnimalDetails />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
