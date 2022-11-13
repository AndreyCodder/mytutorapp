import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import {
  Text,
  View,
  Alert,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

// for build:
//eas build -p android --profile preview
const RootViewLoading = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const RootView = styled.View`
  padding-top: 15px;
`;

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toFetch = () => {
    setIsLoading(true);
    axios
      .get("https://636d2da591576e19e32208f6.mockapi.io/Posts")
      .then((result) => {
        setItems([...result.data]);
      })
      .catch(() => {
        alert("Ошибка");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(toFetch, []);

  return (
    <RootView>
      {isLoading ? (
        <RootViewLoading>
          <ActivityIndicator size="large" />
          <Text>Загрузка ...</Text>
        </RootViewLoading>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={toFetch} />
          }
          data={[...items, ...items]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                alert("123");
              }}
            >
              <PostItem
                title={item.title}
                created={item.createdAt}
                imageUrl={item.imageUrl}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </RootView>
  );
}
