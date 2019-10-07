import { createStackNavigator } from "react-navigation-stack";
// import your components here they should be full screens
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import React, { Component } from "react";
import { Icon } from "native-base";
const CoffeeTab = createStackNavigator(
  {
    //give names to your components that you will be using throughout your project
    ListScreen: List,
    DetailScreen: Detail
  },
  {
    //define the intial component when the app runs
    initialRouteName: "LoginScreen",
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type="FontAwesome5" name="coffee" />,
      activeTintColor: "#b8cdd0",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default CoffeeTab;
