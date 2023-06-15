import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WrapperText from "../components/wrappers/WrapperText";
import { Card, IconButton } from "react-native-paper";
import { UserModel } from "../models/user.model";
import { AnimalModel } from "../models/animal.model";

interface AnimalCardProps {
  animal: AnimalModel;
  theme: Record<string, string>;
  user: UserModel;
}

const styles = StyleSheet.create({
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

export default function AnimalCard(props: AnimalCardProps) {
  const { animal, theme } = props;
  const user: UserModel = props.user;

  let yellowStar = false;
  user?.animals?.forEach((a) => {
    if (animal?.id === a?.id) {
      yellowStar = true;
    }
  });

  return (
  <Card style={{ backgroundColor: theme.itemBlock }}>
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
              customStyle={[styles.textPadding, { color: theme.textPrimary }]}
              text={animal?.name}
              size={35}
            />
            <WrapperText
              customStyle={[styles.textPadding, { color: theme.textSecondary }]}
              text={animal?.typeAnimal}
              size={25}
            />
          </View>
        </View>

        {user && user.email !== "" ? (
          <Ionicons
            name="star"
            size={30}
            color={yellowStar ? "yellow" : "white"}
          />
        ) : (
          <Ionicons name="" size={0} color="white" />
        )}
      </View>
    </Card>
  );

  
}
  
