import React, { useEffect, useRef, useState } from 'react';
import Message from '../../components/Message';
import {
	View,
	FlatList,
	SafeAreaView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_API_URL } from "@env";

const index = ({ navigation, route }) => {
	const { userReceive } = route.params;
	const [messageText, setMessageText] = useState('');
	const [userData, setUserData] = useState({})

	const [chatData, setChatData] = useState([]);

	useEffect(() => {
    fetchDataChat();
  }, []);

	const fetchDataChat = async() => {
		const storedUserData = JSON.parse(await AsyncStorage.getItem("userData"));
		if(storedUserData) setUserData(storedUserData)
		try {
			const response = await fetch(`${BASE_API_URL}/message/chat?userSend=${storedUserData.id}&userReceive=${userReceive}`);

			if(response.ok) {
				const result = await response.json();

				console.log(result);
				setChatData(result);
			} else {
				const result = response.json();
				console.log("Error: " + JSON.stringify(result));
			}
		} catch(err) {
			console.log("Khong the get dataa");
		} 
		
	}

	const sendMessage = async() => {
		// Xử lý gửi tin nhắn ở đây, ví dụ: thêm tin nhắn vào chatData

		// Đoạn này chỉ để minh họa, bạn cần xử lý logic gửi tin nhắn thực tế của mình
		const newMessage = {
			id: String(chatData.length + 1),
			message: messageText,
			userSend: userData.id,
			userReceive: userReceive
		};

		try {
			const response = await fetch(`${BASE_API_URL}/message`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newMessage)
			})

			if(response.ok) {
				const result = await response.json();

				console.log(result);

				setChatData([...chatData, result])
				setMessageText(''); // Xóa nội dung trong input sau khi gửi
			}
		} catch(e) {
			console.log("Failed to send message");
		}

		// Thêm tin nhắn mới vào danh sách
		

		// Cập nhật lại danh sách tin nhắn
		// this.setState({ chatData: updatedChatData }); // Cập nhật state hoặc prop tương ứng của bạn
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.flatList}
				data={chatData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Message message={item.message} sender={item.userSend.id} time={item.time} />
				)}
				contentContainerStyle={styles.flatListContent}
			/>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					value={messageText}
					onChangeText={(text) => setMessageText(text)}
					placeholder="Nhập tin nhắn..."
				/>
				<TouchableOpacity onPress={sendMessage}>
					<Text style={styles.sendButton}>Gửi</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	flatList: {
		flex: 1,
		marginTop: 10,
	},
	flatListContent: {
		paddingBottom: 70, // Để giữ khoảng trống phía dưới FlatList cho input và nút gửi tin nhắn
		height:500,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		height:50,
		paddingVertical: 5,
		borderTopWidth: 1,
		borderTopColor: '#ccc',
		// position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#FFFFFF',
		padding: 10,
		marginBottom: 10
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
		marginRight: 10,
		height: 30
	},
	sendButton: {
		color: 'blue',
	},
});

export default index;
