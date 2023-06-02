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
  console.log(props);
  const scale = props.dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity
      style={styles.rightAction}
      activeOpacity={0.5}
      onPress={(item) => props.handleDeleteFavoritePress(item)}
    >
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
        Delete From Favorite
      </Animated.Text>
    </TouchableOpacity>
  );
};
