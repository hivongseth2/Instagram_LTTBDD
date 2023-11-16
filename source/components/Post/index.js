import React from "react";
import { View } from "react-native";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const Post = ({ post, route }) => {
  const postTemp = route && route.params ? route.params.post : post;
  console.log(postTemp);
  return (
    <View>
      <Header imageUri={postTemp.user.image} name={postTemp.user.name} />
      <Body imageUri={postTemp.images[0]} />
      <Footer
        likesCount={postTemp.likes}
        caption={postTemp.captions}
        postedAt={postTemp.createdAt}
        // comments={postTemp.comments}
        postId={postTemp.id}
      />
    </View>
  );
};

export default Post;
