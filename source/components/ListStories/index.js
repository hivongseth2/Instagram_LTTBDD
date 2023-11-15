import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
// import { listStorys } from "../../graphql/queries";
import Story from "../PreviewStory";
import storiesData from "../../data/stories.js";
import styles from "./style";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  //   const fetchStories = async () => {
  //     try {
  //       const storiesData = await API.graphql(graphqlOperation(listStorys));
  //       setStories(storiesData.data.listStorys.items);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  const fetchStories = async () => {
    const userStoriesSort = [
      ...storiesData.filter((item) => item.user.stateStory !== 0),
      ...storiesData.filter((item) => item.user.stateStory === 0),
    ];

    // Tí lấy cái id của user rồi so sánh vs mảng stories coi trùng id thì đưa nó lên đầu

    console.log(userStoriesSort);
    setStories(userStoriesSort);
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
