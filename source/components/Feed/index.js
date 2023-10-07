import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Post from "../Post";
import Stories from "../ListStories";
// import { listPosts } from "../../graphql/queries";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // const fetchPosts = async () => {
  //   try {
  //     const postsData = await API.graphql(graphqlOperation(listPosts));
  //     setPosts(postsData.data.listPosts.items);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  // POST CẦN CÓ PROPS createdAt, caption, likes,user.image, image, name
  // const fetchPosts = async () => {
  //   try {
  //     const postsData = await API.graphql(graphqlOperation(listPosts));
  //     setPosts(postsData.data.listPosts.items);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  const fetchPosts = async () => {
    const data = [
      {
        id: 1,
        createdAt: "2023-10-07T08:00:00Z",
        captions: "Chạnh lòng giữa đám đông",
        likes: 15110,
        user: {
          image:
            "https://images2.thanhnien.vn/uploaded/trucdl/2020_07_20/mynhan400namcomotcuctinhytrensukien5_ADYH.jpg?width=500",
          name: "Mặc Băng",
        },
        image:
          "https://kenh14cdn.com/thumb_w/660/2020/7/23/006w3y6dgy1ggzua4bvipj31mx2wq4qs-15954423061581383561209.jpg",
      },
      {
        id: 2,
        createdAt: "2023-10-06T15:30:00Z",
        captions: "Võ Tắc Thiên đụng là thiến",
        likes: 2040,
        user: {
          image:
            "https://kenh14cdn.com/2019/8/25/690023644639523510932352152363027200999424n-15667248089671018572517.jpg",
          name: "Thiên Võ Tắc",
        },
        image:
          "https://kenh14cdn.com/203336854389633024/2021/2/19/005aoesily1gnrx43342eg30s00k0e89-16136733745671972938449.gif.png",
      },
      {
        id: 3,
        createdAt: "2023-10-05T10:45:00Z",
        captions: "Slayyyyy slayyyy mấy đứa ơi",
        likes: 10,
        user: {
          image:
            "https://media.baoquangninh.vn/upload/image/202106/medium/1858647_b8e24cad73232fc562d3cc7c6e06982f.jpeg",
          name: "Người đẹp bên Mỹ",
        },
        image:
          "https://kenh14cdn.com/crop/640_360/2019/7/31/victorias-secret-t-1564551002430444323879-crop-1564551412832755582412.jpg",
      },
      // Thêm các bài viết khác ở đây nếu cần
    ];

    setPosts(data);
    console.log("post nè ", posts);
  };

  return (
    // <View>{console.log(posts)}</View>
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
