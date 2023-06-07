import { StyleSheet, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import React, { useRef } from "react";
import AnimalCard from "../../screens/AnimalCard";
import { AnimalModel } from "../../models/animal.model";
import { LeftActions } from "./LeftActions";
import { updateFavorite } from "../../redux/actions/user.action";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
});

export const HomeItems = (props) => {
  const { item } = props.item;
  const { theme } = props;

  //@ts-ignore
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const handlePress = (item: AnimalModel): void => {
    props.navigation.navigation.navigate("Details", { animal: item });
  };

  const swipeableRef = useRef(null);

  const handleAddFavoritePress = (): void => {
    //@ts-ignore
    dispatch(updateFavorite(user, item));
    swipeableRef.current.close();
  };

  const renderLeftActions = (progress, dragX) => {
    return (
      <LeftActions
        progress={progress}
        dragX={dragX}
        handleAddFavoritePress={handleAddFavoritePress}
        item={props.item}
      />
    );
  };

  return (
    <View
      style={[styles.flatListContainer, { backgroundColor: theme.background }]}
    >
      <Swipeable ref={swipeableRef} renderLeftActions={renderLeftActions}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress(item)}>
          <AnimalCard theme={theme} animal={item} user={user} />
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
};
