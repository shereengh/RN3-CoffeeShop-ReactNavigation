import { createStackNavigator } from "react-navigation-stack";
// import your components here they should be full screens
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import Cart from "../Components/CoffeeCart";
const StackNav = createStackNavigator(
  {
    //give names to your components that you will be using throughout your project
    ListScreen: List,
    DetailScreen: Detail,
    LoginScreen: Login,
    CartScreen: Cart
  },
  {
    //define the intial component when the app runs
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      cardStyle: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default StackNav;
