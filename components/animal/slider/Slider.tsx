import { Animated, FlatList, View } from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const images = [
    {
      id: 1,
      img: require("../../../assets/favicon.png"),
    },
    {
      id: 2,
      img: require("../../../assets/favicon.png"),
    },
    {
      id: 3,
      img: require("../../../assets/favicon.png"),
    },
    {
      id: 4,
      img: require("../../../assets/favicon.png"),
    },
    {
      id: 5,
      img: require("../../../assets/favicon.png"),
    },
  ];

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={images} scrollX={scrollX} index={index} />
    </View>
  );
};
