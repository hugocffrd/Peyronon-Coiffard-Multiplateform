import { StyleSheet, TouchableOpacity, Animated } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  leftAction: {
    borderRadius: 5,
    backgroundColor: "#BBA700",
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
export const LeftActions = (props) => {
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
