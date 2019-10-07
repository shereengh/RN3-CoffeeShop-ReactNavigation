import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";
import { Icon } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";
import CartIcon from "../CartIcon";

// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

export default CoffeeList;

CoffeeList.navigationOptions = ({ navigation }) => {
  return {
    title: "Coffee List",
    headerLeft: null,
    headerRight: <CartIcon />
  };
};
