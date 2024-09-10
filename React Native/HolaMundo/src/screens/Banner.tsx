import React from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ItemList from '../components/ItemList';
import { useNavigation } from '@react-navigation/native';

/* interface Props extends StackScreenProps<any, any> { } */
interface Props {
	standAlone?: boolean
}

const Banner = ({ standAlone = false }: Props) => {

	const navigation = useNavigation();

	return (
		<View>
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

					<TouchableOpacity
						onPress={() => navigation.navigate('ShoppingCart')}
					>
						<FontAwesomeIcon
							style={styles.cartShopping}
							icon="cart-shopping"
							size={23}
						/>
					</TouchableOpacity>
				</View>

				{/* <View style={styles.rowUser}>
					<TouchableOpacity>
						<FontAwesomeIcon style={styles.user} icon="user" size={21} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.username}>(Username here)</Text>
					</TouchableOpacity>
				</View> */}
			</View>
			{
				(!standAlone) &&
				<View style={{ marginTop: 70 }}>
					{/* //* HOME PAGE HERE */}
					<ItemList />
				</View>
			}

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#263159',
		height: 70,
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
		marginTop: 10,
		marginLeft: 18,
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
