import React from "react";
import { View } from "react-native";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Router from "../../router";
const Post = ({ post, route }) => {
  const postTemp = route && route.params ? route.params.post : post;
  return (
    <View>
      <Header imageUri={postTemp.user.image} name={postTemp.user.name} />
      <Body imageUri={postTemp.image} />
      <Footer
        likesCount={postTemp.likes}
        caption={postTemp.captions}
        postedAt={postTemp.createdAt}
      />
    </View>
  );
};

export default Post;
