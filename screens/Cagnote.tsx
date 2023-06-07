import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CagnoteItem } from "../components/cagnote/CagnoteItem";
import { getCagnotes } from "../redux/actions/cagnote.action";

export const Cagnote = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
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
    <View style={styles.container}>
      <FlatList
        data={cagnotes}
        renderItem={(item) => <CagnoteItem user={user} item={item.item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
});
