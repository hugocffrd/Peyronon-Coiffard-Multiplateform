import { createStackNavigator } from "@react-navigation/stack"
import React from 'react';
import AnimalDetails from "../components/animal/AnimalDetails";
import { Dimensions } from "react-native";
import Favorite from "../screens/Favorite";

const Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;

//Faire l'inverse
export default function StackNavigation(props) {
    const {fontSize} = props;
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorite"   
            >
             {(navigation) => (
             <Favorite 
              fontSize={fontSize}
              navigation={navigation}
              windowWidth={windowWidth}
            />
            )}
            </Stack.Screen>
            <Stack.Screen
                name="Details"
                options={{
                  title: "Details"
                }}
            >
            {() => <AnimalDetails />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}