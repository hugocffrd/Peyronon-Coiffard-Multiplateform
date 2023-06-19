import React from "react";
import { Animated, TouchableOpacity } from "react-native";
import { AnimalModel } from "../../models/animal.model";
import { RightActionsStyles } from "../../styles/favorite/RightActions.style";
const styles = RightActionsStyles;

interface RightActionProps {
  handleDeleteFavoritePress: Function;
  item: AnimalModel;
  dragX: any;
}

export const RightActions = (props: RightActionProps) => {
  const scale = props.dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <TouchableOpacity
      style={styles.rightAction}
      activeOpacity={0.5}
      onPress={() => props.handleDeleteFavoritePress(props.item)}
    >
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
        Delete from favorite
      </Animated.Text>
    </TouchableOpacity>
  );
};
