import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PostsProfile from "../../components/TabProfile/Posts";
const DiscoveryScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <View style={styles.horizontalContainer}>
        <AntDesign
          style={styles.iconInputLeft}
          name="search1"
          size={20}
          color="gray"
        />

        <TextInput
          style={[styles.TextInput, { flex: 1 }]}
          placeholder="Tìm kiếm"
        ></TextInput>
      </View>
      <PostsProfile />
    </View>
  );
};

<AntDesign
  style={{
    marginRight: 10,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    height: 24,
  }}
  name="search1"
  size={24}
  color="black"
/>;

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
    backgroundColor: "#fff",
    alignContent: "center",

    alignItems: "center",
  },
  TextInput: {
    borderTopRightRadius: 8,

    borderBottomRightRadius: 8,
    backgroundColor: "#eee",
    height: 36,
  },
  iconInputLeft: {
    padding: 6,
    height: 36,

    backgroundColor: "#eee",
    alignContent: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  horizontalContainer: {
    flexDirection: "row",
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
