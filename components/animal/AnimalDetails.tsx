import React, { useEffect } from "react";
import { AnimalModel } from "../../models/animal.model";
import { View, StyleSheet } from "react-native";
import WrapperText from "../wrappers/WrapperText";
import { AnimalCarousel } from "./slider/AnimalCarousel";
import { ScrollView } from "react-native-gesture-handler";
import { AnimalModalCagnote } from "./AnimalModalCagnote";
import { CagnoteModel } from "../../models/cagnote.model";
import { useDispatch, useSelector } from "react-redux";
import { getCagnoteById } from "../../redux/actions/cagnote.action";

const styles = StyleSheet.create({
  detailsView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    marginHorizontal: 5,
  },
  infos: {
    width: "90%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 20,
    padding: 20,
  },
  lineStyle: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#eeeeee",
    margin: 10,
  },
  titleBlock: {
    width: "90%",
    backgroundColor: "transparents",
    alignItems: "center",
    marginBottom: 3,
    paddingHorizontal: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitleText: {
    fontWeight: "300",
    fontSize: 18,
  },
  grid: {
    flex: 2,
    marginHorizontal: "auto",
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  col1: {
    width: "auto",
    flex: 1,
  },
  "2col": {
    width: "auto",
    flex: 2,
  },
});

export default function AnimalDetails(props) {
  const animal = props.navigation.route.params.animal as AnimalModel;
  const { theme } = props;

  const Col = ({ numRows, children }) => {
    return <View style={styles[`${numRows}col`]}>{children}</View>;
  };

  const Row = ({ children }) => <View style={styles.row}>{children}</View>;

  const cagnote: CagnoteModel = useSelector(
    //@ts-ignore
    (state) => state.cagnoteReducer.cagnote
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const loadAnimalCagnote = async () => {
      //@ts-ignore
      await dispatch(getCagnoteById(animal.id));
    };
    loadAnimalCagnote();
  }, [dispatch]);

  console.log(cagnote);

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <View style={styles.detailsView}>
        <AnimalCarousel animal={animal} />
        <View style={[styles.infos, { backgroundColor: theme.contentBlock }]}>
          <View style={styles.titleBlock}>
            <WrapperText
              customStyle={[styles.titleText, { color: theme.textPrimary }]}
              text={animal?.name}
            />
            <WrapperText
              customStyle={[styles.subtitleText, { color: theme.textPrimary }]}
              text={animal?.typeAnimal}
            />
          </View>
          <View style={styles.lineStyle} />
          <View style={styles.grid}>
            <Row>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={"Longévité : "}
                />
              </Col>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={animal?.longevity + " ans"}
                />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={"Habitat : "}
                />
              </Col>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={String(animal?.geoLocation)}
                />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={"Alimentation : "}
                />
              </Col>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={String(animal?.diet)}
                />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={"Status : "}
                />
              </Col>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={String(animal?.status)}
                />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={"Gestation : "}
                />
              </Col>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={animal?.gestation + " mois"}
                />
              </Col>
            </Row>
            <Row>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={"Progéniture : "}
                />
              </Col>
              <Col numRows={2}>
                <WrapperText
                  customStyle={{ color: theme.textPrimary }}
                  text={String(animal?.nbKid)}
                />
              </Col>
            </Row>
          </View>

          {cagnote !== null && cagnote?.id !== null ? (
            <AnimalModalCagnote
              cagnote={cagnote}
              animal={animal}
              theme={theme}
              btnContent="Participate to the kitty"
            />
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
