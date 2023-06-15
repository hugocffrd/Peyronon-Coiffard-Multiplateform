import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WrapperText from "../components/wrappers/WrapperText";
import { Card, IconButton } from "react-native-paper";
import { AnimalModel } from "../models/animal.model";
import { UserModel } from "../models/user.model";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightgrey",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  leftContainer: {
    margin : 5,
    verticalAlign : "middle",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  textPadding: {
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default function AnimalCard(props) {
  const { animal } = props;
  const user: UserModel = props.user;

  const handleFavoritePress = () => {};

  let yellowStar = false;
  if (user && user.animals && user.animals.includes(animal)) {
    yellowStar = true;
  }

  return (
    <Card style={styles.card}>
      <View style={styles.boxContainer}>
        <View style={styles.leftContainer}>
          {animal.images[0] ? (
              <Card.Cover
                source={require("../assets/Animals/".concat(String(animal.images[0])))}
                style={styles.image}
              />
              ) : (
              <Card.Cover
                source={require("../assets/Animals/GenericFaceLogo.jpg")} //Image when no image is available
                style={styles.image}
              />
            )}
         
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            <WrapperText
              customStyle={styles.textPadding}
              text={animal?.name}
              size={25}
            />
            <WrapperText
              customStyle={styles.textPadding}
              text={animal?.typeAnimal}
              size={13}
            />
          </View>
        </View>
        <IconButton
          icon={() => (
            <Ionicons
              name="star"
              size={30}
              color={yellowStar ? "yellow" : "white"}
            />
          )}
          onPress={() => handleFavoritePress()}
        />
      </View>
    </Card>
  );
}
