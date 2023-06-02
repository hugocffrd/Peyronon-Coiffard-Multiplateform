import React from "react";
import { AnimalModel } from "../../models/animal.model";
import { View, StyleSheet } from "react-native";
import WrapperText from "../wrappers/WrapperText";
import { Slider } from "./slider/Slider";

const styles = StyleSheet.create({
  detailsView: {
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    paddingTop: 30,
  },
  caroussel: {
    borderColor: "grey",
    borderRadius: 20,
    borderWidth: 2,
  },
});

export default function AnimalDetails(props) {
  console.log(props);
  const animal = props.navigation.route.params.animal as AnimalModel;

  return (
    <View style={styles.detailsView}>
      <View>
        <WrapperText text={animal.name + " " + animal.typeAnimal} />
      </View>
      <Slider />

      <View>
        <WrapperText text={"Characteristics"} />
        <View>
          <WrapperText text={"Longévité : " + animal.longevity + "ans"} />
          <WrapperText text={"Habitat : " + animal.geoLocation} />
          <WrapperText text={"Alimentation :" + animal.diet} />
          <WrapperText text={"Status de conservation : " + animal.status} />
          <WrapperText text={"Gestation : " + animal.gestation + "mois"} />
          <WrapperText text={"Nombre de petits : " + animal.nbKid} />
        </View>
      </View>
    </View>
  );
}
