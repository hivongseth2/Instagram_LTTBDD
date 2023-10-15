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
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/372809666_2284177928433784_4435342299495343359_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=65Qk583wG8QAX-V9TiI&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDoRiR6QTVrae_PemrvrXQMzx6_9PfX2nhu8gOOH3I-Yw&oe=65303BE9",
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
              "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/297257252_2000354983482748_4171238219446568382_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcwTrmREPb4AX8k-fwF&_nc_oc=AQkbhvqaNpIj_CIemgpqaNlkMzHxP7nQjNp5dPMoorA4E2IZvV3Ax2vCyxj-g-dL3_n-Px1vR3lVChzley4njgrm&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfASrqhsuD9OeK5sG-iKP-OYZxzsRbonaXQDXhFx3cQvhg&oe=653122E0",
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
