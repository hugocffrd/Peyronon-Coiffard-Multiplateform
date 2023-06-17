import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../redux/actions/home.action";
import { HomeItems } from "../components/home/HomeItems";
import { Search } from "../components/wrappers/Search";
import { AnimalModel } from "../models/animal.model";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface HomeProps {
  windowWidth: number;
  theme: Record<string, string>;
  navigation: any;
}

export default function Home(props: HomeProps) {
  const { windowWidth, theme, navigation } = props;
  const getNumberOfColumns = () => {
    const itemWidth = 200;
    const minItemMargin = 100;
    const availableWidth = windowWidth - minItemMargin;
    const maxColumns = 2;
    const minColumns = 1;
    const numColumns = Math.floor(availableWidth / itemWidth);
    return Math.max(minColumns, Math.min(numColumns, maxColumns));
  };

  const [numColumns, setNumColumns] = useState(getNumberOfColumns());

  const list: AnimalModel[] = useSelector(
    //@ts-ignore
    (state) => state.homeReducer.animalList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(getNumberOfColumns());
    });
    const loadAnimal = async () => {
      //@ts-ignore
      await dispatch(getAnimals());
    };
    loadAnimal();
  }, [dispatch]);

  //The parent node of FlatList needs to have flex:1 to enable scroll on web
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Search animals={list} navigation={navigation} />
      <GestureHandlerRootView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          key={numColumns}
          numColumns={numColumns}
          renderItem={(item) => (
            <HomeItems theme={theme} item={item} navigation={navigation} />
          )}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
