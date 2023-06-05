import React from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  rightAction: {
    borderRadius: 5,
    backgroundColor: "#e06666",
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    padding: 20,
  },
});

export const RightActions = (props) => {
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
