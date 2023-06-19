import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CagnoteItem } from "../components/cagnote/CagnoteItem";
import { getCagnotes } from "../redux/actions/cagnote.action";
import { CalculatorOfColumns } from "./CalculatorOfColumn";

interface CagnoteProps {
  theme: Record<string, string>;
  navigation: any;
}

export const Cagnote = (props: CagnoteProps) => {
  const { theme } = props;
  const dispatch = useDispatch();

  const [numColumns, setNumColumns] = useState(CalculatorOfColumns);
  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(CalculatorOfColumns);
    });
    const loadCagnotes = async () => {
      //@ts-ignore
      await dispatch(getCagnotes());
    };
    loadCagnotes();
  }, [dispatch]);

  //@ts-ignore
  const cagnotes = useSelector((state) => state.cagnoteReducer.cagnotes);
  //@ts-ignore
  const user = useSelector((state) => state.userReducer.user);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={cagnotes}
        renderItem={(item) => (
          <CagnoteItem theme={theme} user={user} item={item.item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
