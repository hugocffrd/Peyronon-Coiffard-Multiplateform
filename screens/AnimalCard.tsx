import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WrapperText from "../components/wrappers/WrapperText";
import { Card, IconButton } from "react-native-paper";
import { UserModel } from "../models/user.model";

const styles = StyleSheet.create({
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  leftContainer: {
    paddingLeft: 10,
    paddingTop: 10,
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
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    textAlign: "center",
  },
  textPadding: {
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default function AnimalCard(props) {
  const { animal, theme } = props;
  const user: UserModel = props.user;

  const handleFavoritePress = () => {};

  let yellowStar = false;
  user?.animals?.forEach((a) => {
    if (animal?.id === a?.id) {
      yellowStar = true;
    }
  });

  return (
    <Card style={[styles.card, { backgroundColor: theme.primary }]}>
      <View style={styles.boxContainer}>
        <View style={styles.leftContainer}>
          <Card.Cover
            source={require("../assets/favicon.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            <WrapperText
              customStyle={[styles.textPadding, { color: theme.textPrimary }]}
              text={animal?.name}
              size={35}
            />
            <WrapperText
              customStyle={[styles.textPadding, { color: theme.textPrimary }]}
              text={animal?.typeAnimal}
              size={25}
            />
          </View>
        </View>

        {user && user.email !== "" ? (
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
        ) : (
          <IconButton
            icon={() => <Ionicons name="" size={0} color="white" />}
          />
        )}
      </View>
    </Card>
  );
}
