import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ItemNoti() {
  const dataNoti = [
    {
      id: "1",
      type: "activity",
      name: "vtmthu12",
      image:
        "https://giadinh.mediacdn.vn/296230595582509056/2022/2/17/27212817110061775266623491256080737665900375n-16450863187391857196552.jpg",
      time: "2 giờ",
      content: "đã thích tin của bạn",
      imagePost:
        "https://i.pinimg.com/236x/6f/aa/83/6faa83552b999617b2c7cd9ec027c31d.jpg",
    },
    {
      id: "2",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-cute-1.jpg",
      time: "6 ngày",
      content: "đã thích tin của bạn",
      imagePost:
        "https://cdn.tgdd.vn/Files/2016/02/25/792452/chup-anh-hoang-hon-bang-smartphone_800x450.jpg",
    },
    {
      id: "3",
      type: "activity",

      name: "512mhh",
      image:
        "https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg",
      time: "6 ngày",
      content: "đã bình luận tin của bạn.",
      imagePost:
        "https://cdn.tgdd.vn/Files/2016/02/25/792452/chup-anh-hoang-hon-bang-smartphone_800x450.jpg",
    },
    {
      id: "4",
      type: "connect",
      name: "thanhle_67",
      image:
        "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg",
      time: "4 tuần",
    },
    {
      id: "5",
      type: "noti",
      name: "chuyencuaemm_, dan.doc.sach và 4 người sáng tạo nội dung khác",
      image: [
        "https://halotravel.vn/wp-content/uploads/2020/07/thach_trangg_101029297_573874646879779_1794923475739360981_n.jpg",
        "https://baoninhbinh.org.vn/DATA/ARTICLES/2021/10/22/hinh-anh-me-trong-tho-duong-dai-ninh-binh-f5ffb.jpg",
      ],
      time: "5 tuần",
    },
    {
      id: "6",
      type: "activity",

      name: "512mhh",
      image:
        "https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg",
      time: "6 tuần",
      content: "đã thích bình luận của bạn: anh có lừa em bao h chưa.",
      imagePost:
        "https://baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg",
    },
    {
      id: "7",
      type: "activity",

      name: "512mhh",
      image:
        "https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg",
      time: "6 tuần",
      content: "đã nhắc đến bạn trong bình luận: thiệt khum.",
      imagePost:
        "https://baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg",
    },
    {
      id: "8",
      type: "activity",

      name: "512mhh",
      image:
        "https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg",

      time: "6 tuần",
      content: "đã thích bình luận của bạn: Bé dth.",
      imagePost:
        "https://baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg",
    },
    {
      id: "9",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-cute-1.jpg",

      time: "7 tuần",
      content: "đã nhắc đến bạn trong bình luận: thích hem",
      imagePost:
        "https://baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg",
    },
    {
      id: "10",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-cute-1.jpg",

      time: "7 tuần",
      content: "đã thích bình luận của bạn: đẹp quá",
      imagePost:
        "https://baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg",
    },
    {
      id: "11",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-cute-1.jpg",

      time: "7 tuần",
      content: "đã thích bình luận của bạn: đẹp quá",
      imagePost:
        "https://baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg",
    },
  ];

  const renderItem = ({ item }) => {
    if (item.type === "activity") {
      return <ActivityItem item={item} />;
    } else if (item.type === "connect") {
      return <ConnectItem item={item} />;
    } else if (item.type === "noti") {
      return <NotificationItem item={item} />;
    }

    return null; // Handle any other types as needed
  };

  return (
    <View>
      <FlatList
        data={dataNoti}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const ActivityItem = ({ item }) => (
  <View style={styles.notificationContainer}>
    <Image source={{ uri: item.image }} style={styles.userImage} />
    <Text style={styles.textItemNoti}>
      <Text style={styles.name}>{item.name}</Text> {item.content}{" "}
      <Text style={styles.time}>{item.time}</Text>
    </Text>
    <Image source={{ uri: item.imagePost }} style={styles.postImage} />
  </View>
);

const ConnectItem = ({ item }) => (
  <View
    style={[
      styles.connectContainer,
      { justifyContent: "space-between", width: "60%" },
    ]}
  >
    <Image source={{ uri: item.image }} style={styles.userImage} />
    <Text style={styles.textItemNoti}>
      Một người bạn có thể biết là
      <Text style={styles.name}> {item.name} </Text>
      đang dùng Instagram.
      <Text style={styles.time}> {item.time}</Text>
    </Text>
    {/* <Pressable></Pressable> */}
    <TouchableOpacity style={styles.btnFollow}>
      <Text style={styles.textBtn}>Theo dõi</Text>
    </TouchableOpacity>
  </View>
);

const NotificationItem = ({ item }) => (
  <View style={styles.notificationContainer}>
    <Image source={{ uri: item.image[0] }} style={styles.userImage} />
    <Text style={styles.textItemNoti}>
      <Text style={styles.name}>{item.name} </Text> đã mời bạn tham gia kênh
      thông báo của họ. <Text style={styles.time}>{item.time}</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    width: "75%",
  },

  connectContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    // Add styles specific to connect items here
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  postImage: {
    width: 40,
    height: 50,
    marginLeft: 25,
  },
  textItemNoti: {
    fontSize: 14,
    color: "#333",
    width: "80%",
  },
  time: {
    fontSize: 13,
    color: "gray",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  btnFollow: {
    backgroundColor: "#0095f6",
    borderRadius: 5,

    padding: 5,
    marginLeft: 40,
  },
  textBtn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
});
