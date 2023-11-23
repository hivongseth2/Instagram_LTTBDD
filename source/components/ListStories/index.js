import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
// import { listStorys } from "../../graphql/queries";
import Story from "../PreviewStory";
import storiesData from "../../data/stories.js";
import styles from "./style";
import { BASE_API_URL } from "@env";

const Stories = ({ stories }) => {
  // const [stories, setStories] = useState([]);
  const [userData, setUserData] = useState({});
  console.log("BASE O STORIESlít", BASE_API_URL);

  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          marginBottom: 5,
          paddingBottom: 5,
        }}
      >
        <FlatList
          data={stories}
          keyExtractor={({ user }) => user.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          renderItem={({ item }) => <Story story={item} />}
        />
      </View>
    </View>
  );
};

export default Stories;
