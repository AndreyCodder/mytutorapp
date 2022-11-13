import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    RefreshControl
  } from "react-native";
import axios from 'axios';

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const RootViewLoading = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`;

export const FullPost = ({ route, navigation }) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = route.params;

    const toFetch = () => {
        setIsLoading(true);
        axios
          .get("https://636d2da591576e19e32208f6.mockapi.io/Posts/"+id)
          .then((result) => {
            setData(result.data);
          })
          .catch((err) => {
            alert("Ошибка");
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
    
      useEffect(toFetch, []);

    return (
        <View style={{ padding: 10}}>
        {isLoading ? (
            <RootViewLoading>
                <ActivityIndicator size="large" />
                <Text>Загрузка ...</Text>
            </RootViewLoading>
        ) : (
            <ScrollView refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={toFetch} />
              }>
                <View>
                   <PostImage source={{
                            uri: data.imageUrl,
                        }}/> 
                        <PostText>{data.text}</PostText>
                    </View>
            </ScrollView>
            
            
        )
        }
        </View>
    );
};
