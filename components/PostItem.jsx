import React from 'react';
import { Text, View, image } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
      padding: 15px;
      border-bottom-width: 1px;
      border-bottom-color: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-flow: row;
    `;

    const PostImage = styled.Image`
      width: 80px;
      height: 50px;
      border-radius: 12px;
      margin-right: 12px;
      resize: "stretch";
    `;

    const PostTitle = styled.Text`
      font-size: 20px;
      font-weight: 700;
    `;

    const PostDate = styled.Text`
      font-size: 16px;
      font-weight: 400;
      margin-top: 2px;
    `;

    const PostDetails = styled.View`
      justify-content: center;
      flex: 1;
    `;

const truncSrt = (str) => {
  if(str.length >= 50){
    return str.substring(0,50)+"..."
  }else{
    return str
  }
}

const PostItem = ({title, created, imageUrl}) => {
    return (
      <View>
        <Post>
          <PostImage
            style={{
              resizeMode: "stretch",
            }}
            source={{
              uri: imageUrl,
            }}
          />
          <PostDetails>
            <PostTitle>{truncSrt(title)}</PostTitle>
            <PostDate>{Date(created)}</PostDate>
          </PostDetails>
        </Post>
      </View>
    );
};

export default PostItem;