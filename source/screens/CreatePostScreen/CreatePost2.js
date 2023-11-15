import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PhotoForPost from "../EditImageScreen/FilterForPost";
import PhotoPreview from "../EditImageScreen";

export default function CreatePost2({ route, navigation }) {
  const [image, setImage] = useState();
  //   const [filter, setFilter] = useState(null);

  const [imageDimensions, setImageDimensions] = useState();

  useEffect(() => {
    setImage(route.params.image);
    setImageDimensions(route.params.imageDimensions);
  }, []);

  useEffect(() => {
    console.log(imageDimensions);
  }, [imageDimensions]);
  return (
    <View style={styles.container}>
      {image && (
        <View
          style={{
            // aspectRatio: imageDimensions.width / imageDimensions.height,
            width: "100%",
            // height: "",
            height: "100%",
          }}
        >
          <PhotoForPost
            photoProps={image}
            imageDimensions={imageDimensions}
            navigation={navigation}
          />
          {/* <Image
            source={{ uri: image }}
            style={{
              aspectRatio: imageDimensions.width / imageDimensions.height,
              width: "100%",
            }}
          /> */}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    top: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  cancelButton: {
    padding: 8,
  },
  nextButton: {
    padding: 8,
  },
});
