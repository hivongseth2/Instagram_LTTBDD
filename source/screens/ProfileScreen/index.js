import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Stories from "../../components/ListStories";
import Story from "../../components/PreviewStory";
import TabProfile from "../../components/TabProfile";
// import Stories from "../../data/stories";
// import { SafeAreaView } from "react-native-web";

const ProfileScreen = () => {
  const data = {
    name: "Nguyễn Thành Luân",
    post: 0,
    followers: 54,
    following: 114,
    avatar:
      "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
  };
  const handleEditProfile = () => {};

  const handleShareProfile = () => {};

  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <ProfileInfo
        data={data}
        onEditProfile={handleEditProfile}
        onShareProfile={handleShareProfile}
      />
      <View>
        <Story
          story={{
            id: 2,
            image:
              "https://img.freepik.com/premium-photo/sms-text-audio-message-working-with-cell-phone-sending-email-digital-newsletter-manage-relationship-social-network-like-comment-share-media-functional-chat-chatting-mobile_887181-824.jpg",
            name: "Tin nổi bật",
          }}
        />
      </View>

      <View style={[{ width: "100%", height: 400 }]}>
        <TabProfile />
      </View>
    </View>
  );
};
// export default ProfileScreen;

const styles = StyleSheet.create({
  verticalContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "#fff",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 30,
    marginLeft: 10,
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    color: "gray",
    width: 90,
    // alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    // textAlign: "",
    marginRight: 10,
    // width: "60%",
  },
  nameText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },

  btnProfile: {
    backgroundColor: "#eee",
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: "#ddd",
    padding: 5,
    // width: "40%",
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    marginLeft: 10,
    // width: "12em",
  },

  textBtn: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ProfileScreen;
