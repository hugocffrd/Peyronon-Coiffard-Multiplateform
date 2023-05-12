import Home from "./Home";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import Settings from "./Settings";
import Favorite from "./Favorite";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function FooterNavigationNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={{ height: "100%" }}>
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
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Favoris" component={Favorite} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      {/* <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Settings")}
        style={styles.boutton}
      >
        <Text>Paramètres</Text>
      </TouchableOpacity> */}
    </NavigationContainer>
  );
}
