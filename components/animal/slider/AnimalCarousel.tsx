import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get('window');


export const AnimalCarousel = (props) => {
  const { animal } = props;

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          alignItems: 'center',
          backgroundColor: 'transparent',
          
        }}>
          <Image source={require("../../../assets/Animals/".concat(String(item)))} style={styles.itemImage} />
      </View>
    );
  }

  return (
      <Carousel<{ img: string }>
        width={width}
        height={width/1.2}
        data={animal?.images}
        renderItem={renderItem}
        autoPlay={true}
        autoPlayInterval={4000}
      />
  );
};

const styles = StyleSheet.create({
  itemImage:{
    width: width/1.3,
    height: width/1.3,
    borderRadius: 10,
  },
});


