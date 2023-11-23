import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import styles from "./styles";
// import storiesData from "../../data/stories";
// import ProfilePicture from "../../components/profilePicture";
import ProfilePicture from "../../components/ProfilePicture";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import { BASE_API_URL } from "@env";

const StoryScreen = ({ route }) => {
  // cấu trúc truy cập user :  route.params.storyData.story.user.imageUri
  //cấu trúc truy cập story:  route.params.storyData.story.stories[0].imageUri;
  const user = route.params.storyData.story.user;
  const story = route.params.storyData.story.stories;

  const [stories, setStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [indexUser, setIndexUser] = useState(0);
  // const [activeStory, setActiveStory] = useState(stories[0]);

  const navigation = useNavigation();
  useEffect(() => {
    fetchData();
    setActiveStoryIndex(0);
  }, []);

  const fetchData = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem("userData"));
    try {
      const response = await fetch(`${BASE_API_URL}/story/${userData.id}`);

      if (response.status === 200) {
        const result = await response.json();
        const userStoriesSort = result.filter((item) => {
          return (
            item.stories.length > 0 &&
            (item.user.stateStory !== 0 || item.user.stateStory === 0)
          );
        });

        const userStories = userStoriesSort.filter(
          (item) => item.user.id === user.id
        );
        const otherStories = userStoriesSort.filter(
          (item) => item.user.id !== user.id
        );
        const sortedStoriesData = userStories.concat(otherStories);
        setStories(sortedStoriesData);
      } else {
        console.error("Login failed");
      }
    } catch (e) {
      console.log("error fetching stories");
      console.log(e);
    }
  };

  useEffect(() => {
    activeStory = stories[indexUser];
  }, [indexUser]);
  const handleNextStory = () => {
    if (indexUser >= stories.length) {
      return;
    }
    if (activeStoryIndex >= stories[indexUser].stories.length - 1) {
      if (indexUser + 1 < stories.length) {
        setIndexUser(indexUser + 1);
        setActiveStoryIndex(0);
      } else {
        navigation.goBack();
        return;
      }
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex > 0) {
      setActiveStoryIndex(activeStoryIndex - 1);
    } else if (indexUser > 0) {
      setIndexUser(indexUser - 1);
      setActiveStoryIndex(stories[indexUser - 1].stories.length - 1);
    }
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  // const [activeStory, setActiveStory] = useState(stories[0]);
  var activeStory = stories[indexUser];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{
            uri: activeStory.stories[activeStoryIndex]
              ? activeStory.stories[activeStoryIndex].imageUri
              : "",
          }}
          style={styles.image}
        >
          <View style={styles.userInfo}>
            <ProfilePicture uri={activeStory.user.imageUri} size={38} />
            <Text style={styles.userName}>{activeStory.user.name}</Text>
            <Text style={styles.postedTime}>
              {activeStory.stories[activeStoryIndex]
                ? activeStory.stories[activeStoryIndex].postedTime
                : ""}
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            {/* <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={"#ffffff"} />
            </View> */}
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Gửi tin nhắn"
                placeholderTextColor={"white"}
              />
            </View>
            <View style={styles.messageButton}>
              <Feather name="heart" size={24} color="white" />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={24}
                color={"#ffffff"}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
