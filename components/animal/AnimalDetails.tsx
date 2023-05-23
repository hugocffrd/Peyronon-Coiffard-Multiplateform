import React from "react";
import { View, StyleSheet } from "react-native";
import WrapperText from "../wrappers/WrapperText";

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
        <WrapperText text={"Characteristics"} />
        <View>
          <WrapperText text={"Longévité: 15 ans"} />
          <WrapperText text={"Habitat: Afrique"} />
          <WrapperText text={"Alimentation :"} />
          <WrapperText text={"Status de conservation : Menacé"} />
          <WrapperText text={"Gestation: 10 mois"} />
          <WrapperText text={"Nombre de petits: 1"} />
        </View>
      </View>
    </View>
  );
}
