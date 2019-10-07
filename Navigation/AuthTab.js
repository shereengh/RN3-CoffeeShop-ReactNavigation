import { createStackNavigator } from "react-navigation-stack";
// import your components here they should be full screens
import React, { Component } from "react";
import { Icon } from "native-base";
import Login from "../Components/Login";

import Profile from "../Components/Profile";
const AuthTab = createStackNavigator(
  {
    //give names to your components that you will be using throughout your project
    LoginScreen: Login,
    ProfileScreen: Profile
  },
  {
    //define the intial component when the app runs
    initialRouteName: "LoginScreen",
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type="FontAwesome" name="user" />,
      activeTintColor: "#b8cdd0",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default AuthTab;
