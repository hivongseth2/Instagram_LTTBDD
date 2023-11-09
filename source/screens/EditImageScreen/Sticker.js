import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Sticker({ closeSticker }) {
  console.log(closeSticker);
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

      <Text>aaaaaaaaaaa</Text>
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
