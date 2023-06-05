import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteItem } from "../components/favorite/FavoriteItem";
import { updateFavorite } from "../redux/actions/user.action";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Favorite(props) {
  const { windowWidth } = props;
  const getNumberOfColumns = () => {
    const itemWidth = 200;
    const minItemMargin = 100;
    const availableWidth = windowWidth - minItemMargin;
    const maxColumns = 2;
    const minColumns = 1;
    const numColumns = Math.floor(availableWidth / itemWidth);
    numColumns;
    return Math.max(minColumns, Math.min(numColumns, maxColumns));
  };

  const [numColumns, setNumColumns] = useState(getNumberOfColumns());

  //@ts-ignore
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(getNumberOfColumns());
    });
  }, []);

  const handleDeleteFavoritePress = (item): void => {
    //@ts-ignore
    dispatch(updateFavorite(user, item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={user.animals}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <FavoriteItem
              navigation={props.navigation}
              item={item}
              handleDeleteFavoritePress={handleDeleteFavoritePress}
            />
          )}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
