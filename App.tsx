import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Home from "./src/screens/Home";
import Internal from "./src/screens/Internal";
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/navigation/Routes';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
