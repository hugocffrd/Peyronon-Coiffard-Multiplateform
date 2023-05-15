import Carousel from "react-bootstrap/Carousel";
import { StyleSheet } from "react-native";

import "bootstrap/dist/css/bootstrap.min.css";

const styles = StyleSheet.create({
  carousselImg: {
    borderRadius: 20,
    height: "50vh",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});

export default function AnimalDetailCaroussel(props) {
  return (
    // <Carousel fade variant="dark">
    //   <SectionList
    //     sections={[{ title: "Images", data: props.images }]}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={({ item }) => (
    //       <View>
    //         <Carousel.Item interval={2000}>
    //           <img
    //             style={styles.carousselImg}
    //             className="d-block w-100"
    //             source={item.image}
    //           />
    //         </Carousel.Item>
    //       </View>
    //     )}
    //     renderSectionHeader={({ section: { title } }) => (
    //       <Text style={styles.header}>{title}</Text>
    //     )}
    //   />
    // </Carousel>
    <Carousel fade variant="dark">
      <Carousel.Item interval={2000}>
        <img
          style={styles.carousselImg}
          className="d-block w-100"
          src={require("../assets/icon.png")}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={styles.carousselImg}
          src={require("../assets/favicon.png")}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          style={styles.carousselImg}
          className="d-block w-100"
          src={require("../assets/favicon.png")}
        />
      </Carousel.Item>
    </Carousel>
  );
}
