import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
// import { listStorys } from "../../graphql/queries";
import Story from "../PreviewStory";

import styles from "./style";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  //   const fetchStories = async () => {
  //     try {
  //       const storiesData = await API.graphql(graphqlOperation(listStorys));
  //       setStories(storiesData.data.listStorys.items);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  const fetchStories = async () => {
    const data = [
      {
        id: 1,
        image:
          "https://kenh14cdn.com/203336854389633024/2022/12/17/photo-20-1671282426444903058873.jpg",
        name: "Tú Hoa",
      },
      {
        id: 2,
        image:
          "https://icdn.dantri.com.vn/thumb_w/680/2023/05/08/tmn3-1683527536487.jpg",
        name: "Ánh Dao",
      },
      {
        id: 3,
        image:
          "https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2022/09/17/90_c1cc82c213af32b80357a3a69ccba503.jpg",
        name: "Nguyệt Thu",
      },
    ];
    setStories(data);
  };

  //id, image, name

  return (
    <FlatList
      data={stories}
      //   keyExtractor={({ user: { id } }) => id}
      keyExtractor={({ id }) => id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;
