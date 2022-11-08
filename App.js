import { StatusBar } from "expo-status-bar";
import { Text, View, image } from "react-native";
import styled from "styled-components/native";
// for build:
//eas build -p android --profile preview

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
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage
          style={{
            resizeMode: "stretch",
          }}
          source={{
            uri: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
          }}
        />
        <PostDetails>
          <PostTitle>Тестовая статья</PostTitle>
          <PostDate>05.01.1997 15:30</PostDate>
        </PostDetails>
      </Post>
    </View>
  );
}
