import React from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Data
import items from "../../data/items";

const CoffeeCart = ({ navigation }) => {
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      <Button onPress={() => navigation.navigate("OrderScreen")} full danger>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

export default CoffeeCart;
