import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Home } from "./screens/Home";

// for build:
//eas build -p android --profile preview
const RootView = styled.View`
  padding-top: 15px;
`;

export default function App() {
  return (
    <RootView>
      <Home />

      <StatusBar barStyle="dark-content" />
    </RootView>
  );
}
