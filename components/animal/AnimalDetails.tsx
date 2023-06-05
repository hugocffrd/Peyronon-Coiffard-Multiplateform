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
    marginHorizontal:5,
  },
  caroussel: {
    width: "100%",
    borderColor: "grey",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",

  },
  infos:{
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: 20,
  },
  lineStyle:{
    width: "100%",
    borderWidth: 0.5,
    borderColor:'#eeeeee',
    margin:10,
  },
});

export default function AnimalDetails(props) {
  const animal = props.navigation.route.params.animal as AnimalModel;

  return (
    <View style={styles.detailsView}>
      <View>
        <WrapperText text={animal.name + " " + animal.typeAnimal} />
      </View>
      <Slider />
      <View style={styles.infos}>
        <WrapperText text={"Infos"} />
        <View style = {styles.lineStyle} />
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
