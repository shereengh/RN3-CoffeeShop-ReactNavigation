import { createBottomTabNavigator } from "react-navigation-tabs";

import AuthTab from "./AuthTab";
import CoffeeTab from "./CoffeeTab";
import OrdersTab from "./OrdersTab";

const BottomTab = createBottomTabNavigator(
  {
    AuthTab: AuthTab,
    CoffeeTab: CoffeeTab,
    OrdersTab: OrdersTab
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "rgb(20,90,100)"
      },
      activeBackgroundColor: "#b8cdd0",
      inactiveBackgroundColor: "white"
    }
  }
);

export default BottomTab;
