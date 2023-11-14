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
        "https://baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg",
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
        "https://tosuphoto.com/wp-content/uploads/2020/08/nhiep-anh-cho-nguoi-moi-bat-dau-cover.jpg",
      likes: 100,
      comment: 20,
      share: 10,
      createdAt: "2023-10-07T08:00:00Z",
      captions: "Body em cháy quá, để anh dập giúp nhé ?",
    },
    {
      id: 3,
      image:
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/4/29/903917/Can-Canh-Su-Tu-Trang-04.jpg",
      likes: 100,
      comment: 20,
      share: 10,
      createdAt: "2023-10-07T08:00:00Z",
      captions: "Nhẹ nhàng tình cảm em iu anh ?",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/eb/58/cc/eb58cc5cfecde2911c1bd9bb8df69ce7.jpg",
      likes: 100,
      comment: 20,
      share: 10,

      createdAt: "2023-10-07T08:00:00Z",
      captions: "Bé sợ 🥹",
    },
    {
      id: 5,
      image:
        "https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-cute-1.jpg",
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
                "https://i.pinimg.com/236x/13/e2/3d/13e23d20a53514a9fc872a3d8861f504.jpg",
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
