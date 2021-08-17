import React from 'react';
import styled from 'styled-components/native';

//Container conteúdo principal da Login
export const Container = styled.View`
	width: 100%;
	/* min-height: 100%; */
	min-height: 50%;
	align-items: center;
	justify-content: center;
    align-self: center;
	/* background-color: #f4f4f4; */
`;
export const ContainerPrinc = styled.View`
	width: 100%;
	min-height: 100%;
	align-items: center;
	justify-content: center;
    align-self: center;
	background-color: #f4f4f4;
`;

export const StyledImage = styled.Image`
    width: 60%;
    height: 160;
	margin: 10% 0px;
`;

export const Input = styled.TextInput`
	width: 300;
	border-radius: 10px;
	padding: 15px 15px;
	margin: 10px;
	background-color: #161a1d;
	color: white;
`;

export const CaixaBtn = styled.TouchableOpacity`
	width: 100%;
	align-items: center;
	justify-content: center;
    border-radius: 20;
	font-size: 60;
`;

export const TextLogin = styled.Text`
    font-size: 20;
    text-align: center;
	width: 100%;
`;

export const TextLoginBTN = styled.Text`
    font-size: 30;
    text-align: center;
	width: 100%;
`;

export const ViewPad = styled.View`
	align-items: center;
    padding: 5px;
	width: 300;
`;

//Home - Viagem
export const ContainerViagem = styled.View`
	width: 100%;
	min-height: 100%;
	background-color: #f4f4f4;
	align-items: center;
	justify-content: center;
    align-self: center;
	flex: 1;
`;

export const InputHome = styled.TextInput`
	width: 90%;
	border-radius: 10px;
	border: 1px solid black;
	padding: 15px 15px;
	margin: 10px;
	align-self: center;
	font-size: 20px;
`;

export const ImageBack = styled.ImageBackground`
    width: 100%;
    height: 400;
	flex: 1;
`;

export const ViewHome = styled.View`
	align-items: center;
	justify-content: center;
`;

export const TextHome = styled.Text`
	font-size: 20;
	padding: 30px;
`;


//Perfil

export const ContainerPerfil = styled.View`
	width: 100%; 
	min-height: 50%;
	/* background-color: #f4f4f4; */
	align-items: center; 
	justify-content: center;
    align-self: center;
`;

export const CaixaBtnMin = styled.TouchableOpacity`
	width: 200px;
	height: 40px;
	justify-content: center;
	align-items: center;
	
`;

export const TextSecund = styled.Text`
	padding-bottom: 15px;
    font-size: 30;
	width: 100%;
	text-align: center;
`;

export const CaixaCont = styled.View`
	display: flex;
	flex-direction: row;
	padding-top: 10px;
	padding-bottom: 25px;
	justify-content: center;
	align-items: center;
`;

export const CaixaPerfil = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding-top: 5px;
	padding-left: 25px;
	align-items: center;
`;

export const LogoPerfil = styled.Image`
    width: 100px;
    height: 100px;
	margin: 10% 0px;
`;

export const InputPerfil = styled.TextInput`
	width: 80%;
	border-radius: 10px;
	border: 1px solid black;
	padding: 15px 15px;
	margin: 10px;
	align-self: center;
`;

export const TextTer = styled.Text`
	padding-left: 10px;
    font-size: 15;
	text-align: center;
	justify-content: center; 
	align-items: center;
	display: flex;
	flex-direction: row;
	display: flex;
`;

export const TextHist = styled.Text`
	padding-bottom: 15px;
    font-size: 30;
	width: 100%;
	text-align: center;
`;
export const TextHistCorr = styled.Text`
	padding-bottom: 15px;
    font-size: 15;
	text-align: center;
`;