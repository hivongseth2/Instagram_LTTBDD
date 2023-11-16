import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Stories from "../../components/ListStories";
import Story from "../../components/PreviewStory";
import TabProfile from "../../components/TabProfile";
import { useState } from "react";
import { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

// import Stories from "../../data/stories";
// import { SafeAreaView } from "react-native-web";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ dataUserOther, navigation }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (dataUserOther != null) {
        setData(dataUserOther);
      } else {
        try {
          const userData = await AsyncStorage.getItem("userData");

          if (userData !== null) {
            setData(JSON.parse(userData));
            console.log("Data:", JSON.parse(userData));
          }
        } catch (error) {
          console.error("Error retrieving user data:", error);
        }
      }
    };

    fetchData(); // Call the async function immediately
  }, [dataUserOther]);

  const handleEditProfile = () => {};

  const handleShareProfile = () => {};

  const story = {
    user: {
      id: "1",
      imageUri:
        "https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-340.jpg",
      name: "Nguyễn Thành Luân",
      stateStory: 1,
    },
    stories: [
      {
        imageUri:
          "https://i.pinimg.com/736x/eb/58/cc/eb58cc5cfecde2911c1bd9bb8df69ce7.jpg",
        postedTime: "25 m",
      },
      {
        imageUri:
          "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/01/agora-best-picture-nature-696x871.jpg?fit=700%2C20000&quality=95&ssl=1",
        postedTime: "25 m",
      },
      {
        imageUri:
          "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-40.jpg",
        postedTime: "25 m",
      },
    ],
  };

  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <View
        style={[
          styles.horizontalContainer,
          {
            justifyContent: "space-between",
            width: "100%",
            padding: 20,
            backgroundColor: "#fff",
            borderBottomColor: "#eee",
            borderBottomWidth: 1,
            borderRadius: 10,
          },
        ]}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{data.name}</Text>
        <Pressable onPress={async()=>{
          try {
            await AsyncStorage.removeItem("userData");
            console.log('Dữ liệu đã được xóa thành công!');

            navigation.navigate("Home")
          } catch (error) {
            console.error('Lỗi khi xóa dữ liệu:', error);
          }
        }}>
          <Entypo name="log-out" size={24} color="black" />
        </Pressable>
      </View>
      <ProfileInfo
        data={data}
        onEditProfile={handleEditProfile}
        onShareProfile={handleShareProfile}
      />

      <View>
        <Story story={story} />
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
