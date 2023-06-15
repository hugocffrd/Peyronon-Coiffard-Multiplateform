import React from "react";
import { AnimalModel } from "../../models/animal.model";
import { View, StyleSheet } from "react-native";
import WrapperText from "../wrappers/WrapperText";
import { AnimalCarousel } from "./slider/AnimalCarousel";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  detailsView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    marginHorizontal:5,
  },
  infos:{
    width: "90%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    padding: 20,
  },
  lineStyle:{
    width: "100%",
    borderWidth: 0.5,
    borderColor:'#eeeeee',
    margin:10,
  },
  titleBlock:{
    width: "90%",
    backgroundColor: "transparents",
    alignItems: "center",
    marginBottom: 3,
    paddingHorizontal: 10,
  },
  titleText:{
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitleText:{
    fontWeight: "300",
    fontSize: 18,
  },
  grid:{
    flex: 2,
    marginHorizontal: "auto",
    width: "100%",
  },
  row: {
    flexDirection: "row"
  },
  "col1":  {
    width: "auto",
    flex:  1
  },
  "2col":  {
    width: "auto",
    flex:  2
  },
});

export default function AnimalDetails(props) {
  const animal = props.navigation.route.params.animal as AnimalModel;
  const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }
  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    paddingTop: 30,
    marginHorizontal: 5,
  },
  caroussel: {
    width: "100%",
    borderColor: "grey",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  infos: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: 20,
  },
  lineStyle: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#eeeeee",
    margin: 10,
  },
});
