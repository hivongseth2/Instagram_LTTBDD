import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import HackSticker from "./HackSticker";
import HelloSticker from "./HelloSticker";
import HiSticker from "./HiSticker";
import MusicSticker from "./MusicSticker";
import Sticker1 from "./Stick1";
import Sticker2 from "./Sticker2";

const data = [
  { id: "hack", component: <HackSticker /> },
  { id: "hello", component: <HelloSticker /> },
  { id: "hi", component: <HiSticker /> },
  { id: "music", component: <MusicSticker /> },
  { id: "sticker1", component: <Sticker1 /> },
  { id: "sticker2", component: <Sticker2 /> },
];

const numColumns = 2;

export default function AllSticker() {
  const renderItem = ({ item }) => (
    <View style={styles.stickerContainer}>{item.component}</View>
  );

  // Tổ chức dữ liệu thành các hàng
  const rows = [];
  for (let i = 0; i < data.length; i += numColumns) {
    rows.push(data.slice(i, i + numColumns));
  }

  return (
    <FlatList
      data={rows}
      style={{ marginTop: 50 }}
      renderItem={({ item }) => (
        <View style={styles.rowContainer}>
          {item.map((sticker) => (
            <View key={sticker.id} style={styles.stickerContainer}>
              {sticker.component}
            </View>
          ))}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  stickerContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // margin: 8,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 430,
    height: 130,
    marginLeft: -30,
    // marginVertical: 8,
  },
});
