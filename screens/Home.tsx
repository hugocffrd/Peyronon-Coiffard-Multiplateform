import { FlatList } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import AnimalCard from "./AnimalCard";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  item: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    height: 120,
  },
});

export default function Home(props) {
  const getNumberOfColumns = () => {
    const { width } = Dimensions.get("window");
    const itemWidth = 200;
    const minItemMargin = 100;
    const availableWidth = width - minItemMargin;
    const maxColumns = 2;
    const minColumns = 1;
    const numColumns = Math.floor(availableWidth / itemWidth);
    console.log(numColumns);
    console.log(Math.max(minColumns, Math.min(numColumns, maxColumns)));
    return Math.max(minColumns, Math.min(numColumns, maxColumns));
  };

  const [numColumns, setNumColumns] = useState(getNumberOfColumns());

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(getNumberOfColumns());
    });
  }, []);

  const animalCards = [
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
  ];

  const handlePress = () => {
    props.navigation.navigation.navigate("Animal Details");
    // props.navigation.navigate("Animal Details", {animalProps: props.animalDetails});
  };

  const Items = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.flatListContainer}
        activeOpacity={0.9}
        onPress={() => handlePress()}
      >
        <AnimalCard />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={animalCards}
        numColumns={numColumns}
        renderItem={Items}
        key={numColumns}
      />
    </SafeAreaView>
  );
}
