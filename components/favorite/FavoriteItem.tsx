import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AnimalModel } from "../../models/animal.model";
import AnimalCard from "../../screens/AnimalCard";
import { RightActions } from "./RightAction";

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
});

export const FavoriteItem = (props) => {
  console.log(props);
  const handlePress = (item: AnimalModel): void => {
    props.navigation.navigation.navigate("Details", { animal: item });
  };

  return (
    <View style={styles.flatListContainer}>
      <Swipeable
        renderRightActions={(progress, dragX) => (
          <RightActions
            progress={progress}
            dragX={dragX}
            handleDeleteFavoritePress={props.handleDeleteFavoritePress}
          />
        )}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handlePress(props.item)}
        >
          <AnimalCard animal={props.item} />
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
};
