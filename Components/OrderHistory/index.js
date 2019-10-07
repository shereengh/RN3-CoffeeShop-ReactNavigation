import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Icon,
  Container,
  CardItem
} from "native-base";

// Style
import styles from "./styles";

const OrderHistory = () => {
  return (
    <Container>
      <Card>
        <CardItem>
          <Text>Order Number 1</Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Text>Order Number 2</Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Text>Order Number 3</Text>
        </CardItem>
      </Card>
    </Container>
  );
};

export default OrderHistory;

OrderHistoy.navigationOptions = () => {
  return {
    title: "Previous Orders",
    headerLeft: null,
    headerRight: <CartIcon />
  };
};
