import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  Canvas,
  Circle,
  Group,
  Path,
  vec,
  LinearGradient,
} from "@shopify/react-native-skia";
import HackSticker from "./Stickers/HackSticker";
import HelloSticker from "./Stickers/HelloSticker";

export default function Sticker({ closeSticker }) {
  const width = 200;
  const height = 200;
  const r = width * 0.33;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.hContainer,
          { justifyContent: "flex-end", marginRight: 30 },
        ]}
      >
        <TouchableOpacity
          style={{ width: 30, height: 30 }}
          onPress={() => {
            closeSticker();
          }}
        >
          <AntDesign name="closecircleo" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <HackSticker></HackSticker>
      <HelloSticker></HelloSticker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "90%",
    backgroundColor: "black",
    borderRadius: 20,
    opacity: 0.9,

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",

    bottom: 0,
  },

  hContainer: {
    flexDirection: "row",
    width: "100%",
    // justifyContent: "center",
    alignItems: "flex-end",
  },
});
