import { TouchableOpacity, Animated } from "react-native";
import React from "react";
import { GestureResponderEvent } from "react-native";
import { LeftActionsStyles } from "../../styles/home/LeftActions.style";

const styles = LeftActionsStyles;

interface LeftActionsProps {
  handleAddFavoritePress(item: GestureResponderEvent): void;
  dragX: any;
}

export const LeftActions = (props: LeftActionsProps) => {
  const scale = props.dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <TouchableOpacity
      style={styles.leftAction}
      activeOpacity={0.5}
      onPress={(item) => props.handleAddFavoritePress(item)}
    >
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
        Add to Favorite
      </Animated.Text>
    </TouchableOpacity>
  );
};
