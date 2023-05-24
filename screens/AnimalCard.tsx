import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WrapperText from "../components/wrappers/WrapperText";

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#e7e7e7",
    flexDirection: "row",
  },
  boxContentContainerStyle: {
    flex: 1,
    marginLeft: 10,
  },
  boxHorizontalContainerStyle: {
    flex: 1,
    flexDirection: "row"
  },
  boxIconContainerStyle: {
    marginLeft: "auto",
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: 10,
    marginRight:10,
    borderRadius: 50,
  },
  description: {
    width: "100%",
    padding: 10,
  },
  underDescription: {
    paddingTop: 10,
    marginRight:10,
  },
  underDescriptionText: {
    fontSize: 15,
    marginRight:10,
  },

});

export default function AnimalCard() {
  return (
    <View style={styles.boxContainer}>
      <Image source={require("../assets/favicon.png")} style={styles.image} />
      <View style={styles.boxContentContainerStyle}>
        <View style={styles.boxHorizontalContainerStyle}>
          <WrapperText text={"Sophie"} size={35} />
          <View style={styles.boxIconContainerStyle}>
          {/* Faire une condition sur color en fonction de si l'animal est déjà en favoris
              color=animal.isFavoris ? yellow: white
          */}
          <Ionicons name={"star"} size={30} color={"white"} />
          </View>
        </View>
        <View style={styles.boxHorizontalContainerStyle}>
        <WrapperText text={"Girafe"} size={25} />
        </View>
        <View style={styles.boxHorizontalContainerStyle}>
          <View style={styles.underDescription}>
            <WrapperText text="20 ans" size={15} />
          </View>
          <View style={styles.underDescription}>
            <WrapperText text="Afrique" size={15} />
          </View>
        </View>
      </View>
 
    </View>
  );
}
