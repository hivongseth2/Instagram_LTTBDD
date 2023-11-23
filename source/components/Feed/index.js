import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View, Text } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Post from "../Post";
import Stories from "../ListStories";
import { ScrollView } from "react-native";
// import { listPosts } from "../../graphql/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
  Directions,
} from "react-native-gesture-handler";

import { BASE_API_URL } from "@env";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true); // Set loading to true before fetching data
    const url = `${BASE_API_URL}/post`;
    console.log("dang fetch lai");
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setTimeout(() => {
          setLoading(false); // Set loading to false after a delay
        }, 3000); // 3-second delay
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  };
  const reload = async () => {
    await fetchPosts();
    await fetchStories();
  };

  const flingGesture = Gesture.Fling().direction(Directions.DOWN).onEnd(reload);

  const fetchStories = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("userData"));
    try {
      const response = await fetch(`${BASE_API_URL}/story/${user.id}`);
      const data = await response.json();

      const tempStories = Array.isArray(data) ? data : [];
      const userStoriesSort = [
        ...tempStories.filter((item) => item.user.stateStory !== 0),
        ...tempStories.filter((item) => item.user.stateStory === 0),
      ];

      setStories(userStoriesSort);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={flingGesture}>
        <View style={{ height: "100%" }}>
          {loading && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Loading...</Text>
            </View>
          )}
          <FlatList
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <Stories stories={stories} />}
            stickyHeaderIndices={[0]}
          />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Feed;
