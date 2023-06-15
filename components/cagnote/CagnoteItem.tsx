import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AnimalModel } from "../../models/animal.model";
import { UserModel } from "../../models/user.model";
import { updateCagnote } from "../../redux/actions/cagnote.action";
import WrapperText from "../wrappers/WrapperText";

interface CagnoteItemProps {
  item: {
    id: string;
    amount: number;
    animal: AnimalModel;
    users: UserModel[];
  };
  user: UserModel;
  theme: Record<string, string>;
}

export const CagnoteItem = (props: CagnoteItemProps) => {
  const { amount, animal, users, id } = props.item;
  const { user, theme } = props;
  const [donationAmount, setDonationAmount] = useState("");
  const dispatch = useDispatch();

  const handleDonation = (): void => {
    setDonationAmount("");
    //@ts-ignore
    dispatch(updateCagnote(id, donationAmount, user.id));
  };
  return (
    <Card style={[styles.card, { backgroundColor: theme.itemBlock }]}>
      <Card.Content>
        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <WrapperText
              text={animal.name}
              size={18}
              customStyle={{ color: theme.textPrimary }}
            />
            <WrapperText
              text={animal.typeAnimal}
              size={15}
              customStyle={{ color: theme.textPrimary }}
            />
            <WrapperText
              text={"Dons total : " + amount + "€"}
              size={15}
              customStyle={{ color: theme.textPrimary }}
            />

            <View style={styles.donnationContainer}>
              <TextInput
                style={styles.input}
                placeholder="Montant du don"
                value={donationAmount}
                onChangeText={setDonationAmount}
                keyboardType="numeric"
                editable={user.email !== ""}
              />
              <Button
                mode="contained"
                onPress={handleDonation}
                style={[
                  styles.button,
                  {
                    backgroundColor: theme.buttonBackground,
                    borderColor: theme.buttonBorderColor,
                  },
                ]}
                disabled={user.email === ""}
              >
                <WrapperText
                  size={15}
                  customStyle={{ color: theme.buttonColorText }}
                  text="Faire un don"
                />
              </Button>
            </View>
          </View>
          <View style={styles.rightColumn}>
            {users?.map((user, index) => (
              <WrapperText
                key={index}
                text={user.surname}
                size={15}
                customStyle={{ color: theme.textPrimary }}
              />
            ))}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "49%",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    width: "80%",
    marginRight: 5,
  },
  rightColumn: {
    width: "20%",
    marginLeft: 5,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  donnationContainer: {
    display: "flex",
  },
});
