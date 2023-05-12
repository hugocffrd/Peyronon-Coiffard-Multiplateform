import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get("window").height / rows - marginVertical * (rows + 25);

const styles = StyleSheet.create({
  boxContainer: {
    textAlign: "center",
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "grey",
    flexDirection: "row",
  },
  boxContentContainerStyle: {
    flex: 1,
    marginLeft: 10,
  },
  boxIconContainerStyle: {
    marginLeft: "auto",
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  title: {
    fontSize: 25,
  },
  description: {
    width: "100%",
    padding: 10,
  },
  underDescription: {
    paddingTop: 10,
  },
});

export default function AnimalCard() {
  return (
    <View style={styles.boxContainer}>
      <Image source={require("../assets/favicon.png")} style={styles.image} />
      <View style={styles.boxContentContainerStyle}>
        <Text style={styles.title}>Girafe</Text>
        <View style={styles.description}>
          <View style={styles.underDescription}>
            <Text>20 ans</Text>
          </View>
          <View style={styles.underDescription}>
            <Text>Afrique</Text>
          </View>
        </View>
      </View>
      <View style={styles.boxIconContainerStyle}>
        {/* Faire une condition sur color en fonction de si l'animal est déjà en favoris
            color=animal.isFavoris ? yellow: white
        */}
        <Ionicons name={"star"} size={30} color={"white"} />
      </View>
    </View>
  );
}
