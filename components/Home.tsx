import { View, StyleSheet, ListRenderItemInfo } from "react-native";

import { ScrollView } from "react-native";
import AnimalCard from "./AnimalCard";
import { FlatList } from "react-native-gesture-handler";
import { ReactElement, JSXElementConstructor } from "react";
import { List } from "native-base";


const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    borderRadius: 50,
    alignItems: "center",
  },
});

export default function Home() {

  /*const animalCards = [
    {
      AnimalCard,
      AnimalCard,
      AnimalCard,
      AnimalCard,
    }
  ]*/


  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.sectionContainer}>
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </View>
    </ScrollView>
  );
}
