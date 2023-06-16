import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CagnoteItem } from "../components/cagnote/CagnoteItem";
import { getCagnotes } from "../redux/actions/cagnote.action";

export const Cagnote = (props) => {
  const { theme, windowWidth } = props;
  const dispatch = useDispatch();

  const getNumberOfColumns = () => {
    const itemWidth = 200;
    const minItemMargin = 100;
    const availableWidth = windowWidth - minItemMargin;
    const maxColumns = 2;
    const minColumns = 1;
    const numColumns = Math.floor(availableWidth / itemWidth);
    return Math.max(minColumns, Math.min(numColumns, maxColumns));
  };

  const [numColumns, setNumColumns] = useState(getNumberOfColumns());
  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(getNumberOfColumns());
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
          <CagnoteItem
            theme={theme}
            user={user}
            item={item.item}
            fromScreen={true}
          />
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
