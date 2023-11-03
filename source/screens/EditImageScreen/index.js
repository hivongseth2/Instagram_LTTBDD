import React, { useEffect, useRef, useState } from "react";
import { GLView } from "expo-gl";
import { Surface } from "gl-react-expo";
import { Shaders, Node, GLSL } from "gl-react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";

import {
  View,
  Pressable,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ImageBackground,
  Text,
} from "react-native";

const shaders = Shaders.create({
  grayscale: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      void main() {
        vec4 c = texture2D(t, uv);
        float g = dot(c.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor = vec4(vec3(g), c.a);
      }
    `,
  },

  sepia: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      void main() {
        vec4 color = texture2D(t, uv);
        float r = color.r * .393 + color.g * .769 + color.b * .189;
        float g = color.r * .349 + color.g * .686 + color.b * .168;
        float b = color.r * .272 + color.g * .534 + color.b * .131;
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `,
  },

  brightness: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform float brightness;
      void main() {
        vec4 c = texture2D(t, uv);
        gl_FragColor = vec4((c.rgb + vec3(brightness)), c.a);
      }
    `,
  },

  saturation: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform float saturation;
      void main() {
        vec4 color = texture2D(t, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor = vec4(mix(vec3(gray), color.rgb, saturation), color.a);
      }
    `,
  },
  contrast: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform float contrast;
      void main() {
        vec4 color = texture2D(t, uv);
        gl_FragColor = vec4(((color.rgb - vec3(0.5)) * contrast + vec3(0.5)), color.a);
      }
    `,
  },
  hueRotation: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform float hue;
      void main() {
        vec4 color = texture2D(t, uv);
        float angle = hue * 3.14159265 / 180.0;
        mat3 rotMat = mat3(
          cos(angle), sin(angle), 0,
          -sin(angle), cos(angle), 0,
          0, 0, 1
        );
        vec3 k = vec3(0.57735, 0.57735, 0.57735);
        float len = length(color.rgb - k);
        gl_FragColor = vec4(k + rotMat * (color.rgb - k), color.a);
      }
    `,
  },
});

const PhotoPreview = ({
  photo,
  hasMediaLibPermission,
  setPhoto,
  sharePic,
  photoFilter,
  savePhoto,
}) => {
  let viewShotRef = useRef();
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    // Gọi capture ngay sau khi nội dung đã render xong
    if (viewShotRef.current) {
      setTimeout(() => {
        viewShotRef.current.capture().then((uri) => {
          // Ảnh đã được chụp được lưu ở uri
          setImage({
            base64: null,
            height: 1920,
            uri: uri,
            width: 1080,
          });
        });
      }, 1000);
    }
  }, [filter]); // Khi filter thay đổi, chụp lại ảnh
  const renderImageWithFilter = (selectedFilter) => {
    switch (selectedFilter) {
      case 1: // Grayscale
        return (
          <Surface style={[styles.preview, { height: "100%", width: "100%" }]}>
            {console.log("pick", image)}
            <Node shader={shaders.grayscale} uniforms={{ t: image }} />
          </Surface>
        );
      case 2: // Sepia
        return (
          <Surface style={[styles.preview, { height: "100%", width: "100%" }]}>
            {console.log("photo", image)}

            <Node shader={shaders.sepia} uniforms={{ t: image }} />
          </Surface>
        );
      case 3: // Brightness
        return (
          <Surface style={[styles.preview, { height: "100%", width: "100%" }]}>
            <Node
              shader={shaders.brightness}
              uniforms={{ t: image, brightness: 0.2 }}
            />
          </Surface>
        );
      case 4: // Saturtion
        return (
          <Surface style={[styles.preview, { height: "100%", width: "100%" }]}>
            <Node
              shader={shaders.saturation}
              uniforms={{ t: image, saturation: 0.3 }}
            />
          </Surface>
        );
      case 5: // Contract
        return (
          <Surface style={[styles.preview, { height: "100%", width: "100%" }]}>
            <Node
              shader={shaders.contrast}
              uniforms={{ t: image, contrast: 0.3 }}
            />
          </Surface>
        );

      case 6: // HUE
        return (
          <Surface style={[styles.preview, { height: "100%", width: "100%" }]}>
            <Node
              shader={shaders.hueRotation}
              uniforms={{ t: image, hue: 10 }}
            />
          </Surface>
        );
      default:
        return (
          <ViewShot
            style={[styles.preview, { height: "100%", width: "100%" }]}
            options={{
              format: "jpg",
              quality: 0.9,
            }}
            ref={viewShotRef}
          >
            <ImageBackground
              collapsable={false}
              source={{ uri: photo.uri }}
              style={[{ height: "100%", width: "100%" }]}
            >
              <Image
                source={{ uri: photoFilter }}
                style={[{ height: "100%", width: "100%" }]}
              />
            </ImageBackground>
          </ViewShot>

          // <ViewShot style={[styles.preview, { height: "100%", width: "100%" }]}>
          //   <Image
          //     source={{ uri: image }}
          //     style={[{ height: "100%", width: "100%" }]}
          //   />
          // </ViewShot>
        );
    }
  };
  const filters = [
    { name: "Grayscale" },
    { name: "Sepia" },
    { name: "Brightness" },
    { name: "Saturation" },
    { name: "Contrast" },
    { name: "Hue Rotation" },
  ];

  if (!photo) {
    return null;
  }

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderImageWithFilter(filter)}

      <View
        style={[
          styles.container,
          {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
        ]}
      >
        <View style={[styles.hContainer, { marginBottom: "130%" }]}>
          <Pressable
            onPress={() => {
              setPhoto(undefined);
            }}
          >
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </Pressable>

          <View>
            {hasMediaLibPermission && (
              <View style={[styles.hContainer, { paddingHorizontal: 10 }]}>
                <Pressable style={{ paddingRight: 30 }} onPress={savePhoto}>
                  <MaterialIcons name="save-alt" size={24} color="black" />
                </Pressable>
                <Pressable onPress={sharePic}>
                  <FontAwesome name="share" size={24} color="black" />
                </Pressable>
              </View>
            )}
          </View>
        </View>
        <View style={[styles.hContainer, { justifyContent: "center" }]}>
          <Pressable
            style={[
              styles.filterItem,
              filter === 0 ? { borderColor: "white" } : null,
            ]}
            onPress={() => applyFilter(0)}
          >
            <Feather
              name="x"
              size={35}
              color={filter === 0 ? "white" : "black"}
            />
          </Pressable>

          <FlatList
            data={filters}
            keyExtractor={(item) => item.name}
            horizontal
            contentContainerStyle={styles.filters}
            renderItem={({ item, index }) => (
              <Pressable
                style={[
                  styles.filterItem,
                  filter === index + 1 ? { borderColor: "white" } : null,
                ]}
                onPress={() => {
                  applyFilter(index + 1), console.log(item.name);
                }}
              >
                <MaterialIcons
                  name={`filter-${index + 1}`}
                  size={24}
                  color={filter === index + 1 ? "white" : "black"}
                />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  preview: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

  filterItem: {
    width: 50,
    height: 50,
    marginRight: 10,

    borderRadius: 100,
    borderColor: "black",
    borderWidth: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default PhotoPreview;
