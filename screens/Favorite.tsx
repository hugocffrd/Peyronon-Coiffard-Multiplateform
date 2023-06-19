import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteItem } from "../components/favorite/FavoriteItem";
import { updateFavorite } from "../redux/actions/user.action";
import { CalculatorOfColumns } from "./CalculatorOfColumn";

interface FavoriteProps {
  theme: Record<string, string>;
  navigation: any;
}

export default function Favorite(props: FavoriteProps) {
  const { theme } = props;
  const [numColumns, setNumColumns] = useState(CalculatorOfColumns);

  //@ts-ignore
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(CalculatorOfColumns);
    });
  }, []);

  const handleDeleteFavoritePress = (item): void => {
    //@ts-ignore
    dispatch(updateFavorite(user, item));
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={user.animals}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <FavoriteItem
              theme={theme}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
