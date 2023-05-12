import { View, StyleSheet } from "react-native";

import { ScrollView } from "react-native";
import AnimalCard from "./AnimalCard";

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
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
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
