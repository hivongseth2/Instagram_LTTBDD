import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
// import { listStorys } from "../../graphql/queries";
import Story from "../PreviewStory";
import storiesData from "../../data/stories.js";
import styles from "./style";
import { BASE_API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(await AsyncStorage.getItem("userData"));
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/story/${userData.id}`);
      const data = await response.json();

      const tempStories = data;
      const userStoriesSort = [
        ...tempStories.filter((item) => item.user.stateStory !== 0),
        ...tempStories.filter((item) => item.user.stateStory === 0),
      ];

      setStories(userStoriesSort);
    } catch (error) {
      console.error("Error fetching storis:", error);
    }
  };

  //id, image, name

  return (
    <FlatList
      data={stories}
      //   keyExtractor={({ user: { id } }) => id}
      keyExtractor={({ user }) => user.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;
