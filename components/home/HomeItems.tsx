import { TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import React, { useRef } from "react";
import AnimalCard from "../animal/AnimalCard";
import { AnimalModel } from "../../models/animal.model";
import { LeftActions } from "./LeftActions";
import { updateFavorite } from "../../redux/actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { HomeItemStyle } from "../../styles/home/HomeItems.style";

const styles = HomeItemStyle;

interface HomeItemsProps {
  navigation: any;
  theme: Record<string, string>;
  item: {
    item: AnimalModel;
  };
}

export const HomeItems = (props: HomeItemsProps) => {
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
        dragX={dragX}
        handleAddFavoritePress={handleAddFavoritePress}
      />
    );
  };

  return (
    <View
      style={[styles.flatListContainer, { backgroundColor: theme.background }]}
    >
      {user.id !== "" ? (
        <Swipeable ref={swipeableRef} renderLeftActions={renderLeftActions}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handlePress(item)}
          >
            <AnimalCard theme={theme} animal={item} user={user} />
          </TouchableOpacity>
        </Swipeable>
      ) : (
        <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress(item)}>
          <AnimalCard theme={theme} animal={item} user={user} />
        </TouchableOpacity>
      )}
    </View>
  );
};
