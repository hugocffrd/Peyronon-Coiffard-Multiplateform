import React from "react";
import { TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AnimalModel } from "../../models/animal.model";
import AnimalCard from "../animal/AnimalCard";
import { FavoriteItemStyles } from "../../styles/favorite/FavoriteItem.style";
import { RightActions } from "./RightAction";

const styles = FavoriteItemStyles;

interface FavoriteItemProps {
  theme: Record<string, string>;
  navigation: any;
  item: AnimalModel;
  handleDeleteFavoritePress: Function;
}

export const FavoriteItem = (props: FavoriteItemProps) => {
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
          <AnimalCard
            theme={props.theme}
            animal={props.item}
            user={undefined}
          />
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
};
