import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, VirtualizedList } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteItem } from "../components/favorite/FavoriteItem";
import { updateFavorite } from "../redux/actions/user.action";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavoriteProps {
  windowWidth: number;
  theme: Record<string, string>;
  navigation: any;
}

export default function Favorite(props: FavoriteProps) {
  const { windowWidth, theme } = props;

   //Store favorites in local storage
   const storeFavoriteAnimals = async (fav) => {
    try {
      const jsonFavorites = JSON.stringify(fav)
      await AsyncStorage.setItem('favorite_animals', jsonFavorites);
    } catch (e) {
      console.log("An error occurred", e);
    }
  }

  //Get favorites from local storage
  const getFavoriteAnimals = async () => {
    try {
      const jsonFavorites = await AsyncStorage.getItem('favorite_animals')
      return jsonFavorites != null ? JSON.parse(jsonFavorites) : null;
    } catch(e) {
      console.log("An error occurred", e);
    }
  }

  const [localFavorites, setLocalFavorites] = useState(getFavoriteAnimals());

  //@ts-ignore
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    storeFavoriteAnimals(user.animals);
    setLocalFavorites(getFavoriteAnimals());
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
        <VirtualizedList
          showsVerticalScrollIndicator={false}
          data={user?.animals}
          getItem={(data, index) => data[index]}
          getItemCount={data => data.length}
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
