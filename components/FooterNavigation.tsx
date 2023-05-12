import Home from "./Home";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import Settings from "./Settings";
import Favorite from "./Favorite";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const styles = StyleSheet.create({
  boutton: {
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "50px",
    alignContent: "center",
    position: "absolute",
    right: "0px",
    bottom: "0px",
  },
});

export default function FooterNavigationNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Accueil") {
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
        <Tab.Screen name="Accueil" component={Home} />
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
