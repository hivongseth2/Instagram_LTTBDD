import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import ProfilePicture from "../profilePicture";

const Story = (props) => {
  const {
    story: { id, image, name },
  } = props;
  // const { id, image, name } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story", { userId: id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {console.log(props.story.image)}
      <ProfilePicture uri={image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
