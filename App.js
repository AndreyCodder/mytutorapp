import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { FullPost } from "./screens/FullPost";

// for build:
//eas build -p android --profile preview
const RootView = styled.View`
  padding-top: 15px;
`;
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FullPost" component={FullPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
