import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileInfo = ({ data, onEditProfile, onShareProfile }) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Image style={styles.avatar} source={{ uri: data.avatar }} />
        <View style={styles.verticalContainer}>
          <Text style={[styles.numberText, { paddingRight: 10 }]}>
            {data.post}
          </Text>
          <Text style={[styles.infoText, { width: "100%" }]} numberOfLines={1}>
            Bài viết
          </Text>
        </View>

        <View style={styles.verticalContainer}>
          <Text style={styles.numberText}>{data.followers}</Text>
          <Text style={styles.infoText} numberOfLines={1}>
            Người theo dõi
          </Text>
        </View>

        <View style={styles.verticalContainer}>
          <Text style={styles.numberText}>{data.following}</Text>
          <Text style={styles.infoText} numberOfLines={1}>
            Đang theo dõi
          </Text>
        </View>
      </View>
      <Text style={styles.nameText}>{data.name}</Text>

      <View style={[styles.horizontalContainer, { marginRight: 10 }]}>
        <TouchableOpacity style={styles.btnProfile}>
          <Text style={styles.textBtn} numberOfLines={1}>
            Chỉnh sửa trang cá nhân
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnProfile}>
          <Text style={styles.textBtn} numberOfLines={1}>
            Chia sẻ trang cá nhân
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnProfile, { width: 30 }]}>
          <Ionicons name="md-person-add-outline" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  //
};
export default ProfileInfo;
const styles = StyleSheet.create({
  verticalContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
  },
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    height: 170,
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
