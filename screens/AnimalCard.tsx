import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WrapperText from "../components/wrappers/WrapperText";
import { Card } from "react-native-paper";
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
  },
  leftContainer: {
    flex: 1,
    margin: 5,
  },
  rightContainer: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    flex: 0.7,
    flexDirection: "column",
    margin: 3,
  },
  textPadding: {
    paddingVertical: 3,
    textAlign: "center",
    flexWrap: "wrap",
  },
  icons: {
    display: "flex",
    flex: 0.4,
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
      <View style={[styles.boxContainer]}>
        <View style={styles.leftContainer}>
          {animal.images[0] ? (
            <Card.Cover
              testID="animal-image"
              source={{ uri: animal.images[0] }}
              style={styles.image}
            />
          ) : (
            <Card.Cover
              testID="animal-image"
              source={{ uri: "GenericFaceLogo.jpg" }}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            <WrapperText
              customStyle={[styles.textPadding, { color: theme.textPrimary }]}
              text={animal?.name}
              size={25}
              testId="animal-name"
            />
            <WrapperText
              customStyle={[styles.textPadding, { color: theme.textSecondary }]}
              text={animal?.typeAnimal}
              size={18}
              testId="animal-typeAnimal"
            />
          </View>
        </View>

        {user && user.email !== "" ? (
          <Ionicons
            style={styles.icons}
            testID="yellow-star"
            name="star"
            size={30}
            color={yellowStar ? "yellow" : "white"}
          />
        ) : (
          <Ionicons
            style={styles.icons}
            testID="yellow-star"
            name=""
            size={0}
            color="white"
          />
        )}
      </View>
    </Card>
  );
}
