import React, { Component } from "react";

import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartIcon extends Component {
  handlePress = () => {
    return this.props.navigation.navigate("CartScreen");
  };
  render() {
    return (
      <Button
        transparent
        onPress={() => this.props.navigation.navigate("CartScreen")}
      >
        <Icon name="shopping-cart" type="FontAwesome5" />
      </Button>
    );
  }
}
export default withNavigation(CartIcon);
