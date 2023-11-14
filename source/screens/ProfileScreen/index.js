import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Stories from "../../components/ListStories";
import Story from "../../components/PreviewStory";
import TabProfile from "../../components/TabProfile";
import { useState } from "react";
import { useEffect } from "react";
// import Stories from "../../data/stories";
// import { SafeAreaView } from "react-native-web";

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [data, setData] = useState({});

  useEffect(async()=>{
    console.log("Set data ok");
    try {
      // Retrieve the data from AsyncStorage using the key
      const userData = await AsyncStorage.getItem('userData');
      
      if (userData !== null) {
        setData(JSON.parse(userData));
        console.log("Data: " + JSON.parse(userData));
      } 
    } catch (error) {
      // Error retrieving data
      console.error('Error retrieving user data:', error);
    }
  }, [])

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
<<<<<<< HEAD
              "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/401637272_817090823758302_7225156762376365319_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeERbnf0cu7RajXyIVpAlxjXQa1mzcpndW1BrWbNymd1bXyBOkUdYxN1DJPJMKqNmt8D5F9YRWu6gXs38brHUXvv&_nc_ohc=hZZ_UHAVtlQAX_pT2Hw&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBlxmKZwFyRqtw-HpObKZbXyVnV02dpplSPvbIAPwDDEw&oe=6557A7A5",
=======
              "https://img.freepik.com/premium-photo/sms-text-audio-message-working-with-cell-phone-sending-email-digital-newsletter-manage-relationship-social-network-like-comment-share-media-functional-chat-chatting-mobile_887181-824.jpg",
>>>>>>> 8df6dd6716575d352d2b945f7686a640c02b6fe6
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
