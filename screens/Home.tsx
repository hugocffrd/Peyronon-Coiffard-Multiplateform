import { FlatList } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import AnimalCard from "./AnimalCard";
import React from "react";

const minCols = 1;

const calcNumColumns = (width) => {
  const cols = width / styles.item.width;
  const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
  const colsMinusMargin = cols - 2 * colsFloor * styles.item.margin;

  if (colsMinusMargin < colsFloor && colsFloor > minCols) {
    return colsFloor - 1;
  } else return colsFloor;
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  flatList: {},
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    height: 120,
    width: 250,
  },
});

export default function Home(props) {
  const { width } = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));

  useEffect(() => {
    setNumColumns(calcNumColumns(width));
  }, [width]);

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
      <TouchableOpacity activeOpacity={0.9} onPress={() => handlePress()}>
        <AnimalCard />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        key={numColumns}
        data={animalCards}
        renderItem={Items}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
}
