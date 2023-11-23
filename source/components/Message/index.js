import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { format } from 'date-fns';
import { Image } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

const TextTime = ({ sender, time, currentId }) => {
  const localDateTime = new Date(time);
  const timeFormat = format(localDateTime, 'HH:mm:ss dd/MM/yyyy');
  if (sender !== currentId) {
    return <Text style={{ fontSize: 10 }}>{timeFormat ? timeFormat : "loading..."}</Text>
  } else {
    return (
      <Text style={{ fontSize: 10, alignSelf: 'flex-end' }}>
        {timeFormat ? timeFormat : "loading..."}
      </Text>
    );
  }
};


const index = ({ message, sender, time }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem("userData");
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

	return (
		<View
			style={{
				alignSelf: sender === userData.id ? 'flex-end' : 'flex-start',
				margin: 10,
			}}
		>
			<TextTime sender={sender} time={time} currentId={userData.id} />
			<View
				style={{
					backgroundColor: sender === userData.id ? '#DCF8C6' : '#FFFFFF',
					padding: 10,
					borderRadius: 8,
				}}
			>
				<Text>{message}</Text>
			</View>
		</View>
	);
};

export default index;
