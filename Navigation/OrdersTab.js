import { createStackNavigator } from "react-navigation-stack";
// import your components here they should be full screens

import Cart from "../Components/CoffeeCart";
import OrderHistoy from "../Components/OrderHistory";
import React, { Component } from "react";
import { Icon } from "native-base";
const OrdersTab = createStackNavigator(
  {
    //give names to your components that you will be using throughout your project

    CartScreen: Cart,
    OrderScreen: OrderHistoy
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="FontAwesome5" name="shopping-cart" />
      ),
      activeTintColor: "#b8cdd0",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default OrdersTab;
