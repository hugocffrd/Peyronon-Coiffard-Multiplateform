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
  const { theme } = props;
  const handlePress = (item: AnimalModel): void => {
    props.navigation.navigation.navigate("Details", {
      animal: item,
      theme: theme,
    });
  };

  const renderRightActions = (progress, dragX) => {
    return (
      <RightActions
        progress={progress}
        dragX={dragX}
        handleDeleteFavoritePress={props.handleDeleteFavoritePress}
        item={props.item}
      />
    );
  };

  return (
    <View style={styles.flatListContainer}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handlePress(props.item)}
        >
          <AnimalCard theme={props.theme} animal={props.item} user={undefined} />
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
};
