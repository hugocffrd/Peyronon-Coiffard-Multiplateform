import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import AnimalDetailCaroussel from "./AnimalDetailCaroussel";

const styles = StyleSheet.create({
  detailsView: {
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
  },
  caroussel: {
    borderColor: "grey",
    borderRadius: 20,
    borderWidth: 2,
  },
});

export default function AnimalDetails() {
  const imagesList = [
    { title: "Section 1", data: { id: 1, image: "../assets/icon.png" } },
    { title: "Section 2", data: { id: 2, image: "../assets/icon.png" } },
    { title: "Section 3", data: { id: 3, image: "../assets/icon.png" } },
  ];

  return (
    <View style={styles.detailsView}>
      <View style={styles.caroussel}>
        <AnimalDetailCaroussel images={imagesList} />
      </View>

      <View>
        <Text>Characteristics</Text>
        <View>
          <Text>Longévité: 15 ans</Text>
          <Text>Habitat: Afrique</Text>
          <Text>Alimentation : </Text>
          <Text>Status de conservation : Menacé</Text>
          <Text>Gestation: 10 mois</Text>
          <Text>Nombre de petits: 1</Text>
        </View>
      </View>
    </View>
  );
}
