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
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/387808957_995312745103531_8561777563808331732_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FtuE3y2Cx2wAX_gX3ne&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfB8p4roJHtOcsA7tctznMyq1RHqO-QOXO_DEFu91q2UhQ&oe=65308DAD",
      time: "2 giờ",
      content: "đã thích tin của bạn",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/297257252_2000354983482748_4171238219446568382_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcwTrmREPb4AX8k-fwF&_nc_oc=AQkbhvqaNpIj_CIemgpqaNlkMzHxP7nQjNp5dPMoorA4E2IZvV3Ax2vCyxj-g-dL3_n-Px1vR3lVChzley4njgrm&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfASrqhsuD9OeK5sG-iKP-OYZxzsRbonaXQDXhFx3cQvhg&oe=653122E0",
    },
    {
      id: "2",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/291674145_3270499209859986_2357170128413625034_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uZE1GowoE5wAX_zNeQu&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAuIsM5weM70dOb-mr2VrgzthHrX5XCCTAgIEpkCsdDhg&oe=65309E53",
      time: "6 ngày",
      content: "đã thích tin của bạn",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
    },
    {
      id: "3",
      type: "activity",

      name: "512mhh",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/351305043_1300227687540828_6320001758953554335_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7FWs3mJzgsAX-Iwu_x&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfClZwKpwQuKl8ejJxbw1hBKE5wMVM8V53UwNoG9Ai4z6w&oe=65312966",
      time: "6 ngày",
      content: "đã bình luận tin của bạn.",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
    },
    {
      id: "4",
      type: "connect",
      name: "thanhle_67",
      image:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/362678161_1349102312310756_7574969850598876327_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R2YRl_LhTfEAX-BkL11&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBORGRiTLeQzlIsLQlV3KTawH5BqZyu8JaFkbubEDlEIA&oe=65311B0B",
      time: "4 tuần",
    },
    {
      id: "5",
      type: "noti",
      name: "chuyencuaemm_, dan.doc.sach và 4 người sáng tạo nội dung khác",
      image: [
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/378020544_723928496445741_8276473315441075588_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dgZn5rGylBcAX-QMmpQ&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAgDsva3I7ROPtSiZkHrtPhieIDda8ZW9SFb2OGRpkR8Q&oe=6530F1D5",
        "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/307574872_649874456805986_7575338197427319079_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ePiORvGT0O4AX8vNjoG&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDZTp4KC25HG-j0R__4uhLAJ4UA5tGqxoEZAbyMzMdaLQ&oe=65316B8C",
      ],
      time: "5 tuần",
    },
    {
      id: "6",
      type: "activity",

      name: "512mhh",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/351305043_1300227687540828_6320001758953554335_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7FWs3mJzgsAX-Iwu_x&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfClZwKpwQuKl8ejJxbw1hBKE5wMVM8V53UwNoG9Ai4z6w&oe=65312966",
      time: "6 tuần",
      content: "đã thích bình luận của bạn: anh có lừa em bao h chưa.",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
    },
    {
      id: "7",
      type: "activity",

      name: "512mhh",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/351305043_1300227687540828_6320001758953554335_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7FWs3mJzgsAX-Iwu_x&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfClZwKpwQuKl8ejJxbw1hBKE5wMVM8V53UwNoG9Ai4z6w&oe=65312966",
      time: "6 tuần",
      content: "đã nhắc đến bạn trong bình luận: thiệt khum.",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
    },
    {
      id: "8",
      type: "activity",

      name: "512mhh",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/351305043_1300227687540828_6320001758953554335_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7FWs3mJzgsAX-Iwu_x&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfClZwKpwQuKl8ejJxbw1hBKE5wMVM8V53UwNoG9Ai4z6w&oe=65312966",
      time: "6 tuần",
      content: "đã thích bình luận của bạn: Bé dth.",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
    },
    {
      id: "9",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/291674145_3270499209859986_2357170128413625034_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uZE1GowoE5wAX_zNeQu&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAuIsM5weM70dOb-mr2VrgzthHrX5XCCTAgIEpkCsdDhg&oe=65309E53",
      time: "7 tuần",
      content: "đã nhắc đến bạn trong bình luận: thích hem",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
    },
    {
      id: "10",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/291674145_3270499209859986_2357170128413625034_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uZE1GowoE5wAX_zNeQu&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAuIsM5weM70dOb-mr2VrgzthHrX5XCCTAgIEpkCsdDhg&oe=65309E53",
      time: "7 tuần",
      content: "đã thích bình luận của bạn: đẹp quá",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
    },
    {
      id: "11",
      type: "activity",

      name: "dddddddddd0301",
      image:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/291674145_3270499209859986_2357170128413625034_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uZE1GowoE5wAX_zNeQu&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAuIsM5weM70dOb-mr2VrgzthHrX5XCCTAgIEpkCsdDhg&oe=65309E53",
      time: "7 tuần",
      content: "đã thích bình luận của bạn: đẹp quá",
      imagePost:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325778174_1786865425029763_7187971411853967691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6x-rlHr5FAcAX-UyvtA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDgcyLu1CjZn1TPK4RHgrYCNprfBjxUspmhp_a9-h01Eg&oe=652FBAA5",
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
