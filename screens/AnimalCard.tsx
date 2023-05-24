import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const rows = 3;
const cols = 2;
const marginHorizontal = 10;
const marginVertical = 6;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get("window").height / rows - marginVertical * (rows + 25);

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
    width: 120,
    height: 120 ,
    marginLeft: 10,
    marginRight:10,
    borderRadius: 40,
  },
  title: {
    fontSize: 35,
  },
  subtitle: {
    fontSize: 25,
  },
  underDescription: {
    paddingTop: 10,
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
          <Text style={styles.title}>Sophie</Text>
          <View style={styles.boxIconContainerStyle}>
          {/* Faire une condition sur color en fonction de si l'animal est déjà en favoris
              color=animal.isFavoris ? yellow: white
          */}
          <Ionicons name={"star"} size={30} color={"white"} />
          </View>
        </View>
        <View style={styles.boxHorizontalContainerStyle}>
          <Text style={styles.subtitle}>Girafe</Text>
        </View>
        <View style={styles.boxHorizontalContainerStyle}>
          <View style={styles.underDescription}>
            <Text style={styles.underDescriptionText}>20 ans</Text>
          </View>
          <View style={styles.underDescription}>
            <Text style={styles.underDescriptionText}>Afrique</Text>
          </View>
        </View>
      </View>
      
    </View>
  );
}
