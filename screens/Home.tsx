import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AnimalCard from "./AnimalCard";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  item: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    height: 120,
  },
  leftAction: {
    borderRadius:15,
    backgroundColor: '#BBA700',
    justifyContent: 'center',
    margin: 5,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});

export default function Home(props) {
  const getNumberOfColumns = () => {
    const { width } = Dimensions.get("window");
    const itemWidth = 200;
    const minItemMargin = 100;
    const availableWidth = width - minItemMargin;
    const maxColumns = 2;
    const minColumns = 1;
    const numColumns = Math.floor(availableWidth / itemWidth);
    console.log(numColumns);
    console.log(Math.max(minColumns, Math.min(numColumns, maxColumns)));
    return Math.max(minColumns, Math.min(numColumns, maxColumns));
  };

  const [numColumns, setNumColumns] = useState(getNumberOfColumns());

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setNumColumns(getNumberOfColumns());
    });
  }, []);

  const animalCards = [
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
    AnimalCard,
  ];


  const handlePress = () => {
    props.navigation.navigation.navigate("Animal Details");
    // props.navigation.navigate("Animal Details", {animalProps: props.animalDetails});
  };

  const handleAddFavoritePress = () => {
    //Handle add to favorite
  }
  
  let swipeableRef = null;


  //Action when swiping left the item 
  const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
         <TouchableOpacity
            style={styles.leftAction}
            activeOpacity={0.9}
            onPress={() => handleAddFavoritePress()}>
          <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
            Add to Favorite
          </Animated.Text>
        </TouchableOpacity>
    );
  };
  

  const Items = ({ item }) => {
    return (
      <View style={styles.flatListContainer}>
      <Swipeable 
        ref={(swipe) => swipeableRef = swipe}
        renderLeftActions={LeftActions}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handlePress()}>
            <AnimalCard />
          </TouchableOpacity>
      </Swipeable>
      </View>
       
    );
  };

  return (

    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={animalCards}
          numColumns={numColumns}
          renderItem={Items}
          key={numColumns}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
    
  );
}
