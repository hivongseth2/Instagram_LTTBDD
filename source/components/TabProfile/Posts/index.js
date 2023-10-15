// import { Navigation } from "@mui/icons-material";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

export default function PostsProfile() {
  const windowWidth = useWindowDimensions().width;
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image:
        "https://instagram.fsgn2-7.fna.fbcdn.net/v/t51.2885-15/393106059_295562386678988_3432316042676425775_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fsgn2-7.fna.fbcdn.net&_nc_cat=108&_nc_ohc=eD9ESO7xUVkAX9LcQF2&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzNjIwODYxMTY2MjA9Nw%3D%3D.2-ccb7-5&oh=00_AfCl1-mVh2LhaEUn7CUW_BPs7XxcIooqTDK6FcnybWQZNw&oe=652EA0EF&_nc_sid=ee9879",
      likes: 100,
      comment: 20,
      captions:
        "Có ai gặp trường hợp sau first date được bạn nam cho vài triệu và tuyên bố muốn theo đuổi mình không?",
      share: 10,
      createdAt: "2023-10-07T08:00:00Z",
    },
    {
      id: 2,
      image:
        "https://instagram.fsgn2-6.fna.fbcdn.net/v/t51.2885-15/391489017_1060580958693047_9030472726282319199_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MzZ4NzM2LnNkciJ9&_nc_ht=instagram.fsgn2-6.fna.fbcdn.net&_nc_cat=111&_nc_ohc=dXL_BATQDT8AX8z6gf4&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzNTcwNTYzMDgwNTgyNzYwNw%3D%3D.2-ccb7-5&oh=00_AfB3mUuFdh4hsqNCxC4PSpbUnUb9oIWQk32n7WPx4RyuHg&oe=652F350E&_nc_sid=ee9879",
      likes: 100,
      comment: 20,
      share: 10,
      createdAt: "2023-10-07T08:00:00Z",
      captions: "Body em cháy quá, để anh dập giúp nhé ?",
    },
    {
      id: 3,
      image:
        "https://instagram.fsgn2-6.fna.fbcdn.net/v/t51.2885-15/391112615_678071367593314_6963889023805257173_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDU2eDEwNTYuc2RyIn0&_nc_ht=instagram.fsgn2-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=MiOIUDfTgZQAX-mng3_&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzNDQ0ODM3MTUxNzMxNzYwNw%3D%3D.2-ccb7-5&oh=00_AfDTAPvLBjMivWqZdM4knw_PnUJMiVeZzjzMlKtHMtizLw&oe=652F1402&_nc_sid=ee9879",
      likes: 100,
      comment: 20,
      share: 10,
      createdAt: "2023-10-07T08:00:00Z",
      captions: "Nhẹ nhàng tình cảm em iu anh ?",
    },
    {
      id: 4,
      image:
        "https://instagram.fsgn2-9.fna.fbcdn.net/v/t51.2885-15/392725837_726681905954523_4221889637597803079_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4NjQwLnNkciJ9&_nc_ht=instagram.fsgn2-9.fna.fbcdn.net&_nc_cat=103&_nc_ohc=vvh4NsXGPKwAX8bwApX&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzMTkwNTMyMjk3OTQ4NzYwNw%3D%3D.2-ccb7-5&oh=00_AfBZyW89ly8azEkzEjmWffQB8X55rXSTSE5cZidOCjlpew&oe=652F91F3&_nc_sid=ee9879",
      likes: 100,
      comment: 20,
      share: 10,

      createdAt: "2023-10-07T08:00:00Z",
      captions: "Bé sợ 🥹",
    },
    {
      id: 5,
      image:
        "https://instagram.fsgn2-9.fna.fbcdn.net/v/t51.2885-15/392725837_726681905954523_4221889637597803079_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4NjQwLnNkciJ9&_nc_ht=instagram.fsgn2-9.fna.fbcdn.net&_nc_cat=103&_nc_ohc=vvh4NsXGPKwAX8bwApX&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxNDEzMTkwNTMyMjk3OTQ4NzYwNw%3D%3D.2-ccb7-5&oh=00_AfBZyW89ly8azEkzEjmWffQB8X55rXSTSE5cZidOCjlpew&oe=652F91F3&_nc_sid=ee9879",
      likes: 100,
      comment: 20,
      share: 10,
      createdAt: "2023-10-07T08:00:00Z",
      captions: "Từ hồi dùng Tinder bị đòi xem nách 14 lần =))",
    },
  ];

  const itemSize = windowWidth / 3;

  return (
    <FlatList
      data={data}
      numColumns={3} // Hiển thị 3 cột
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            const user = {
              image:
                "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/372809666_2284177928433784_4435342299495343359_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=65Qk583wG8QAX-V9TiI&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDoRiR6QTVrae_PemrvrXQMzx6_9PfX2nhu8gOOH3I-Yw&oe=65303BE9",
              name: "Nguyễn Thành Luân",
            };
            const post = {
              ...item,
              user: { ...user },
            };

            navigation.navigate("PostUser", { post: post });
          }}
          style={[styles.imageContainer, { width: itemSize, height: itemSize }]}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableOpacity>
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

//  const data = [
// {
//     id: 1,
//     createdAt: "2023-10-07T08:00:00Z",
//     captions: "Chạnh lòng giữa đám đông",
//     likes: 15110,
//     user: {
//       image:
//         "https://images2.thanhnien.vn/uploaded/trucdl/2020_07_20/mynhan400namcomotcuctinhytrensukien5_ADYH.jpg?width=500",
//       name: "Mặc Băng",
//     },
//     image:
//       "https://kenh14cdn.com/thumb_w/660/2020/7/23/006w3y6dgy1ggzua4bvipj31mx2wq4qs-15954423061581383561209.jpg",
//   },
