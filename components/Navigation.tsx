import Home from "./Home";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import Settings from "./Settings";
import Favorite from "./Favorite";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimalDetails from "./AnimalDetails";

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  customHeaderImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  customHeaderTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

function CustomHeader({ title, logo, navigation }) {
  const showArrow = title !== "Home";
  return (
    <View style={styles.customHeader}>
      <Image source={logo} style={styles.customHeaderImage} />
      <Text style={styles.customHeaderTitle}>{title}</Text>
      <Ionicons
        style={{
          display: showArrow ? "flex" : "none",
          fontSize: 25,
          position: "absolute",
          right: 20,
        }}
        name="arrow-back"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default function Navigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          // activeTintColor: "tomato",
          // inactiveTintColor: "gray",
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
          component={Favorite}
          options={{
            header: ({ navigation }) => (
              <CustomHeader
                title="Favoris"
                logo={require("../assets/favicon.png")}
                navigation={navigation}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            header: ({ navigation }) => (
              <CustomHeader
                title="Home"
                logo={require("../assets/favicon.png")}
                navigation={navigation}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            header: ({ navigation }) => (
              <CustomHeader
                title="Settings"
                logo={require("../assets/favicon.png")}
                navigation={navigation}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Animal Details"
          component={AnimalDetails}
          options={{
            tabBarButton: () => null,
            header: ({ navigation }) => (
              <CustomHeader
                title="Animal Details"
                logo={require("../assets/favicon.png")}
                navigation={navigation}
              />
            ),
          }}
        />
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
