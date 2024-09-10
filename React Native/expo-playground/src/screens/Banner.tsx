import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Banner = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TouchableOpacity>
					<FontAwesomeIcon style={styles.bars} icon="bars" size={26} />
				</TouchableOpacity>
				<TextInput
					inlineImageLeft="search"
					inlineImagePadding={10}
					autoCorrect={false}
					returnKeyType="search"
					style={styles.inputSearch}
					placeholder="Search"
					autoCapitalize="none"
				/>
				<TouchableOpacity>
					<FontAwesomeIcon
						style={styles.cartShopping}
						icon="cart-shopping"
						size={23}
					/>
				</TouchableOpacity>
			</View>
			<TouchableOpacity>
				<View style={styles.rowUser}>
					<FontAwesomeIcon style={styles.user} icon="user" size={21} />
					<Text style={styles.username}>(Username here)</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#263159',
		height: 100,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	},
	row: {
		flexDirection: 'row',
		marginHorizontal: 15,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	rowUser: {
		flexDirection: 'row',
		marginLeft: 18,
		marginVertical: 10,
		justifyContent: 'flex-start',
	},
	bars: {
		color: '#FFF',
	},
	inputSearch: {
		height: 35,
		width: '80%',
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 35,
		shadowColor: '#FFF',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	cartShopping: {
		color: '#FFF',
	},
	user: {
		color: '#FFF',
	},
	username: {
		marginLeft: 10,
		color: '#FFF',
		fontWeight: 'bold',
	},
});

export default Banner;