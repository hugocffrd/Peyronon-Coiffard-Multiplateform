import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../redux/actions/home.action";
import { HomeItems } from "../components/home/HomeItems";
import { Search } from "../components/wrappers/Search";
import { AnimalModel } from "../models/animal.model";
import { CalculatorOfColumns } from "./CalculatorOfColumn";

interface HomeProps {
  theme: Record<string, string>;
  navigation: any;
}

export default function Home(props: HomeProps) {
  const { theme, navigation } = props;
  const [numColumns, setNumColumns] = useState(CalculatorOfColumns);

  const list: AnimalModel[] = useSelector(
    //@ts-ignore
    (state) => state.homeReducer.animalList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(CalculatorOfColumns);
    });
    const loadAnimal = async () => {
      //@ts-ignore
      await dispatch(getAnimals());
    };
    loadAnimal();
  }, [dispatch]);

  //The parent node of FlatList needs to have flex:1 to enable scroll on web
  return (
    <View style={{ backgroundColor: theme.background }}>
      <Search animals={list} navigation={navigation} />
      <GestureHandlerRootView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          key={numColumns}
          numColumns={numColumns}
          renderItem={(item) => (
            <HomeItems theme={theme} item={item} navigation={navigation} />
          )}
        />
      </GestureHandlerRootView>
    </View>
  );
}
