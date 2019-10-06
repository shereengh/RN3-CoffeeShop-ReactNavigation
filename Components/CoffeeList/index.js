import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

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

export default observer(CoffeeList);

CoffeeList.navigationOptions = ({ navigation }) => {
  return {
    title: "Coffee List",
    headerLeft: null,
    headerRight: (
      <Icon
        type="FontAwesome"
        name="
location-arrow"
        onPress={() => navigation.navigate("CartScreen")}
      />
    )
  };
};
