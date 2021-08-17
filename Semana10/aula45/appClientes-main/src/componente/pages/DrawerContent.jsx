import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Caption, Drawer, Paragraph, Switch, Text, Title, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserContext } from '../pages/UserContext';

import {styles} from '../styles/drawer';

export function DrawerContent(props) {
	const { logout } = useContext(UserContext);

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: 'row', marginTop: 15 }}>
							<Avatar.Image
								source={{
									uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
								}}
								size={50}
							/>
							<View style={{ marginLeft: 15, flexDirection: 'column' }}>
								<Title style={styles.title}>Seja Bem vindo!</Title>
								{/* <Caption style={styles.caption}>Bruno</Caption> */}
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => <Icon name="home-outline" color={color} size={size} />}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => <Icon name="bookmark-outline" color={color} size={size} />}
							label="Histórico"
							onPress={() => {
								props.navigation.navigate('Historico');
							}}
							/>
						<DrawerItem
							icon={({ color, size }) => <Icon name="account-outline" color={color} size={size} />}
							label="Perfil"
							onPress={() => {
								props.navigation.navigate('Perfil');
							}}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => <Icon name="exit-to-app" color={color} size={size} />}
					label="Sign Out"
					onPress={() => {
						logout();
					}}
				/>
			</Drawer.Section>
		</View>
	);
}

