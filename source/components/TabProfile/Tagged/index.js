import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function TaggedProfile() {
  const windowWidth = useWindowDimensions().width;

  const data = [
    {
      id: 1,
      imageUrl:
        "https://instagram.fsgn2-7.fna.fbcdn.net/v/t51.2885-15/393106059_295562386678988_3432316042676425775_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fsgn2-7.fna.fbcdn.net&_nc_cat=108&_nc_ohc=eD9ESO7xUVkAX9LcQF2&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzNjIwODYxMTY2MjA9Nw%3D%3D.2-ccb7-5&oh=00_AfCl1-mVh2LhaEUn7CUW_BPs7XxcIooqTDK6FcnybWQZNw&oe=652EA0EF&_nc_sid=ee9879",
      like: 100,
      comment: 20,
      share: 10,
    },
    {
      id: 2,
      imageUrl:
        "https://instagram.fsgn2-6.fna.fbcdn.net/v/t51.2885-15/391489017_1060580958693047_9030472726282319199_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MzZ4NzM2LnNkciJ9&_nc_ht=instagram.fsgn2-6.fna.fbcdn.net&_nc_cat=111&_nc_ohc=dXL_BATQDT8AX8z6gf4&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzNTcwNTYzMDgwNTgyNzYwNw%3D%3D.2-ccb7-5&oh=00_AfB3mUuFdh4hsqNCxC4PSpbUnUb9oIWQk32n7WPx4RyuHg&oe=652F350E&_nc_sid=ee9879",
      like: 100,
      comment: 20,
      share: 10,
    },
    {
      id: 3,
      imageUrl:
        "https://instagram.fsgn2-6.fna.fbcdn.net/v/t51.2885-15/391112615_678071367593314_6963889023805257173_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDU2eDEwNTYuc2RyIn0&_nc_ht=instagram.fsgn2-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=MiOIUDfTgZQAX-mng3_&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzNDQ0ODM3MTUxNzMxNzYwNw%3D%3D.2-ccb7-5&oh=00_AfDTAPvLBjMivWqZdM4knw_PnUJMiVeZzjzMlKtHMtizLw&oe=652F1402&_nc_sid=ee9879",
      like: 100,
      comment: 20,
      share: 10,
    },
    {
      id: 4,
      imageUrl:
        "https://instagram.fsgn2-9.fna.fbcdn.net/v/t51.2885-15/392725837_726681905954523_4221889637597803079_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4NjQwLnNkciJ9&_nc_ht=instagram.fsgn2-9.fna.fbcdn.net&_nc_cat=103&_nc_ohc=vvh4NsXGPKwAX8bwApX&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzMTkwNTMyMjk3OTQ4NzYwNw%3D%3D.2-ccb7-5&oh=00_AfBZyW89ly8azEkzEjmWffQB8X55rXSTSE5cZidOCjlpew&oe=652F91F3&_nc_sid=ee9879",
      like: 100,
      comment: 20,
      share: 10,
    },
    {
      id: 5,
      imageUrl:
        "https://instagram.fsgn2-9.fna.fbcdn.net/v/t51.2885-15/392725837_726681905954523_4221889637597803079_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4NjQwLnNkciJ9&_nc_ht=instagram.fsgn2-9.fna.fbcdn.net&_nc_cat=103&_nc_ohc=vvh4NsXGPKwAX8bwApX&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzMTkwNTMyMjk3OTQ4NzYwNw%3D%3D.2-ccb7-5&oh=00_AfBZyW89ly8azEkzEjmWffQB8X55rXSTSE5cZidOCjlpew&oe=652F91F3&_nc_sid=ee9879",
      like: 100,
      comment: 20,
      share: 10,
    },
  ];

  const itemSize = windowWidth / 3;

  return (
    <FlatList
      data={data}
      numColumns={3} // Hiển thị 3 cột
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={[styles.imageContainer, { width: itemSize, height: itemSize }]}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    margin: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
