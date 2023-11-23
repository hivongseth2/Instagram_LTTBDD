import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_API_URL } from "@env";

const index = ({ navigation }) => {
	const [userList, setUserList] = useState([
		{
			id: '1',
			name: 'Người 1',
			recentMessage: 'Tin nhắn gần đây...',
		},
		{
			id: '2',
			name: 'Người 2',
			recentMessage: 'Tin nhắn mới...',
		},
		// Thêm thông tin người dùng khác vào đây
	]);

	useEffect(() => {
    fetchDataChat();
  }, []);

	const fetchDataChat = async() => {
		const storedUserData = JSON.parse(await AsyncStorage.getItem("userData"));
		try {
			const response = await fetch(`${BASE_API_URL}/message/${storedUserData.id}`);

			if(response.ok) {
				const result = await response.json();

				console.log(result);
				setUserList(result);
			} else {
				const result = response.json();
				console.log("Error: " + JSON.stringify(result));
			}
		} catch(err) {
			console.log("Khong the get dataa");
		} 
		
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={userList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.containerUserChat} onPress={() =>
						navigation.navigate('Chat', {
							userReceive: item.id,
						})
					}>
						<Image
							source={{
								uri: item.image,
							}}
							style={{ width: 50, height: 50, borderRadius: '100%' }}
						/>
						<View
							style={styles.itemContainer}
						>
							<Text style={styles.userName}>{item.name}</Text>
							<Text>Tin nhắn sau cùng</Text>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	containerUserChat: {
		margin: 10,
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%'
	},
	itemContainer: {
		marginTop: 10,
		width: '100%',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	userName: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 5,
	},
});
