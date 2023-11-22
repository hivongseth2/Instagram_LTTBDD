import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  // RNFlatList,
  TouchableOpacity,
} from "react-native";
import {
  ScrollView,
  FlatList as RNFlatList,
} from "react-native-gesture-handler";

import axios from "axios";

export default function VideoList({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6544ad645a0b4b04436cb772.mockapi.io/cook")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <RNFlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("VideoPlayer", { item })}
          >
            <Image source={{ uri: item.avatar }} style={styles.listItem} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 130,
    right: 10,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 30,
    paddingLeft: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  username: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "white",
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "30%",
    width: "100%",
  },
  iconTouchable: {
    alignItems: "center",
  },
  iconText: {
    color: "white",
  },
  listItem: {
    width: "100%",
    height: 200,
  },
});
