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
    
    <ScrollView>
      <View style={styles.detailsView}>
        <AnimalCarousel animal={animal}/>
        <View style={styles.infos}>
          <View style={styles.titleBlock}>
            <WrapperText customStyle={styles.titleText} text={animal?.name} />
            <WrapperText customStyle={styles.subtitleText} text={animal?.typeAnimal} />
          </View>
          <View style = {styles.lineStyle} />
          <View style={styles.grid}>
            <Row>
              <Col numRows={2}>
                <WrapperText text={"Longévité : "} />
              </Col>
              <Col numRows={2}>
                <WrapperText text={animal?.longevity + " ans"} />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
                <WrapperText text={"Habitat : "} />
              </Col>
              <Col numRows={2}>
                <WrapperText text={animal?.geoLocation} />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
              <WrapperText text={"Alimentation : "} />
              </Col>
              <Col numRows={2}>
                <WrapperText text={animal?.diet} />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
              <WrapperText text={"Status : "} />
              </Col>
              <Col numRows={2}>
                <WrapperText text={animal?.status} />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
              <WrapperText text={"Gestation : "} />
              </Col>
              <Col numRows={2}>
                <WrapperText text={animal?.gestation + " mois"} />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
              <WrapperText text={"Progéniture : "} />
              </Col>
              <Col numRows={2}>
                <WrapperText text={animal?.nbKid} />
              </Col>
            </Row>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
