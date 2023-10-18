import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PostsProfile from "../../components/TabProfile/Posts";
const DiscoveryScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <View style={styles.horizontalContainer}>
        {/* //     <AntDesign
    //       style={{ marginLeft: "30px" }}
    //       name="search1"
    //       size={20}
    //       color="black"
    //     /> */}

        <TextInput style={styles.TextInput} placeholder="Tìm kiếm"></TextInput>
      </View>
      <PostsProfile />
    </View>
  );
};

export default DiscoveryScreen;
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
    alignContent: "center",

    // justifyContent: "flex-start",
    alignItems: "center",
  },
  TextInput: {
    width: "90%",
    // alignContent: "center",
    // borderColor: "gray",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#eee",
    height: 36,
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
