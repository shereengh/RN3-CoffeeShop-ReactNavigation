import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Thumbnail, Text, Card, Container, CardItem } from "native-base";

import CartIcon from "./CartIcon";
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

OrderHistory.navigationOptions = () => {
  return {
    title: "Previous Orders",
    headerLeft: null,
    headerRight: <CartIcon />
  };
};
