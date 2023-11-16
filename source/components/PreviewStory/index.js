import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
// import ProfilePicture from "../profilePicture";
import ProfilePicture from "../ProfilePicture";

const Story = (props) => {
  const data = props;
  console.log(data);

  // cấu trúc truy cập user : data.story.user.imageUri
  //cấu trúc truy cập story:  data.story.stories[0].imageUri;
  // const { id, image, name } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story", { storyData: data });
    console.log(data);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture
        uri={data.story.user.image}
        storyState={data.story.user.stateStory}
      />
      <Text numberOfLines={1} style={styles.name}>
        {data.story.user.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Story;
