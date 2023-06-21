import React, { useEffect } from "react";
import { AnimalModel } from "../../models/animal.model";
import { View, FlatList } from "react-native";
import WrapperText from "../wrappers/WrapperText";
import { AnimalCarousel } from "./slider/AnimalCarousel";
import { ScrollView } from "react-native-gesture-handler";
import { AnimalModalCagnote } from "./AnimalModalCagnote";
import { CagnoteModel } from "../../models/cagnote.model";
import { useDispatch, useSelector } from "react-redux";
import { getCagnoteById } from "../../redux/actions/cagnote.action";
import { AnimalDetailsStyle } from "../../styles/animal/AnimalDetail.style";
import { AnimalDetailItem } from "./AnimalDetailItem";

const styles = AnimalDetailsStyle;

interface RouteProps {
  params: {
    theme: Record<string, string>;
    animal: AnimalModel;
  };
}
interface AnimalDetailProps {
  navigation: any;
  route?: RouteProps;
}

interface GridItemProps {
  key: string;
  value: unknown;
}

export default function AnimalDetails(props: AnimalDetailProps) {
  const animal =
    (props?.route?.params?.animal as AnimalModel) ||
    (props.navigation.route.params.animal as AnimalModel);
  const { theme } = props?.route?.params || props.navigation.route.params;

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

  const gridItem: GridItemProps[] = [
    {
      key: "Longévité : ",
      value: animal?.longevity + "ans",
    },
    {
      key: "Habitat : ",
      value: animal?.geoLocation,
    },
    {
      key: "Alimentation : ",
      value: animal?.diet,
    },
    {
      key: "Statut : ",
      value: animal?.status,
    },
    {
      key: "Gestation : ",
      value: animal?.gestation + "mois",
    },
    {
      key: "Progéniture : ",
      value: animal?.nbKid,
    },
  ];

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
            <FlatList
              keyExtractor={(item) => item.key}
              data={gridItem}
              renderItem={(item) => (
                <AnimalDetailItem item={item} theme={theme} />
              )}
            />
          </View>

          {cagnote !== null && cagnote?.id !== null ? (
            <AnimalModalCagnote
              cagnote={cagnote}
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
