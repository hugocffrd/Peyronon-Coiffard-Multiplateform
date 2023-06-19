import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Card, Paragraph, Searchbar } from "react-native-paper";
import { AnimalModel } from "../../models/animal.model";
import { SearchStyle } from "../../styles/wrappers/Search.style";
const styles = SearchStyle;

interface SearchProps {
  animals: AnimalModel[];
  navigation: any;
}

export const Search = (props: SearchProps) => {
  const { animals, navigation } = props;
  const [searchText, setSearchText] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalModel[]>([]);

  const handleInputChange = (text): void => {
    setSearchText(text);
    setFilteredAnimals(
      animals.filter((animal) =>
        animal.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const goToAnimalDetail = (animal: AnimalModel): void => {
    navigation.navigation.navigate("Details", { animal });
    setSearchText("");
  };

  return (
    <View>
      <Searchbar
        placeholder="Rechercher..."
        onChangeText={handleInputChange}
        value={searchText}
      />

      {searchText !== "" && filteredAnimals.length > 0 ? (
        filteredAnimals.map((animal) => (
          <TouchableOpacity
            key={animal.id}
            style={styles.cardClick}
            onPress={() => goToAnimalDetail(animal)}
          >
            <Card>
              <Card.Title title={animal.name} />
              <Card.Content>
                <Paragraph>{animal.typeAnimal}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))
      ) : (
        <View></View>
      )}
    </View>
  );
};
