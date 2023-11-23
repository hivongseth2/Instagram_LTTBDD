import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Post from "../Post";
import Stories from "../ListStories";
import { ScrollView } from "react-native";
// import { listPosts } from "../../graphql/queries";

import { BASE_API_URL } from "@env";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(BASE_API_URL, "=============================================");
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const url = `${BASE_API_URL}/post`;

    return fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  return (
    // <View>{console.log(posts)}</View>

    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
