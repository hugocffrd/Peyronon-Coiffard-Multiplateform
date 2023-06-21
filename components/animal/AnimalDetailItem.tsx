import { ListRenderItemInfo, View } from "react-native";
import React from "react";
import { AnimalDetailsStyle } from "../../styles/animal/AnimalDetail.style";
import WrapperText from "../wrappers/WrapperText";

const styles = AnimalDetailsStyle;
interface GridItemProps {
  key: string;
  value: unknown;
}

interface AnimalDetailItemProps {
  theme: Record<string, string>;
  item: {
    item: GridItemProps;
  };
}

export const AnimalDetailItem = (props: AnimalDetailItemProps) => {
  const { theme, item } = props;
  const Col = ({ numRows, children }) => {
    return <View style={styles[`${numRows}col`]}>{children}</View>;
  };

  const Row = ({ children }) => <View style={styles.row}>{children}</View>;
  return (
    <Row>
      <Col numRows={2}>
        <WrapperText
          customStyle={{ color: theme.textPrimary }}
          text={item.item.key}
        />
      </Col>
      <Col numRows={2}>
        <WrapperText
          customStyle={{ color: theme.textPrimary }}
          text={item.item.value as string}
        />
      </Col>
    </Row>
  );
};
