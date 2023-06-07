import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../redux/actions/home.action";
import { HomeItems } from "../components/home/HomeItems";
import { Card, Avatar } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});

export default function Home(props) {
  const { windowWidth, theme } = props;
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

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(getNumberOfColumns());
    });
  }, []);

  //@ts-ignore
  const list = useSelector((state) => state.homeReducer.animalList);

  const dispatch = useDispatch();
  useEffect(() => {
    const loadAnimal = async () => {
      //@ts-ignore
      await dispatch(getAnimals());
    };
    loadAnimal();
  }, [dispatch]);

  //The parent node of FlatList needs to have flex:1 to enable scroll on web
  return (
    <SafeAreaView style={[styles.container]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          key={numColumns}
          numColumns={numColumns}
          renderItem={(item) => (
            <HomeItems
              theme={theme}
              item={item}
              navigation={props.navigation}
            />
          )}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
