import React, { useEffect, useState } from 'react';

import { Button, Text, TextInput, View } from 'react-native';
import firebase from './firebase';

export default function App() {
	const [ produto, setProduto ] = useState({
		nome: '',
		preco: 0,
		departamento: '',
		status: '',
		fabricante: ''
	});

	// useEffect(() => {
	// 	todosProdutos();
	// 	produtoId();
	// 	produtosOff();
	// 	produtosEletronicos();
	// 	acima50();
	// }, []);

	const handleInputChange = (param, value) => {
		setProduto({
			...produto,
			[param]: value
		});
	};

	const inserirUser = async () => {
		await firebase.db
			.collection('users')
			.add({
				nome: produto.nome,
				preco: produto.preco,
				departamento: produto.departamento,
				status: produto.status,
				fabricante: produto.fabricante
			})
			.then(() => alert('Usuário adicionado com sucesso'))
			.catch(() => alert('Usuário não adicionado.'));
	};

	const editarUser = async () => {
		const users = firebase.db.collection('users');
		await users
			.doc('W1S8oCJRPFO9ULua9jcC')
			.update({
				filme: 'Kill Bill'
			})
			.then(() => alert('Usuário editado com sucesso'))
			.catch(() => alert('Usuário não editado'));
	};

	const deleteUser = async () => {
		const users = firebase.db.collection('users');
		await users
			.doc('W1S8oCJRPFO9ULua9jcC')
			.delete()
			.then(() => alert('Usuário deletado com sucesso'))
			.catch(() => alert('Usuário não encontrado'));
	};

	const inserirProduto = async () => {
		await firebase.db
			.collection('produtos')
			.add({
				nome: produto.nome,
				preco: produto.preco,
				departamento: produto.departamento,
				status: produto.status,
				fabricante: produto.fabricante
			})
			.then(() => alert('Produto adicionado com sucesso'))
			.catch(() => alert('Produto não adicionado.'));
	};

	const editarProduto = async () => {
		const produtos = firebase.db.collection('produtos');
		await produtos
			.doc('0c7ydEgWEIsSCR2QqjBj')
			.update({
				preco: 25.98
			})
			.then(() => alert('Produto editado com sucesso'))
			.catch(() => alert('Produto não editado'));
	};

	const deleteProduto = async () => {
		const produtos = firebase.db.collection('produtos');
		await produtos
			.doc('vtF5fj1rQJFtZx7ESDoj')
			.delete()
			.then(() => alert('Produto deletado com sucesso'))
			.catch(() => alert('Produto não encontrado'));
	};

	const todosProdutos = async () => {
		const produtos = firebase.db.collection('produtos');
		const querySnapShot = await produtos.get();
		const listaProdutos = querySnapShot.docs;

		listaProdutos.forEach((produto) => console.log('Todos os produto: ', produto.data()));
	};

	const produtoId = async () => {
		const produto = firebase.db.collection('produtos');
		const retornoProduto = await produto.doc('1OIkIFONLPJrtPk5SyTs').get();

		console.log('Produto por ID', retornoProduto.data());
	};

	const produtosOff = async () => {
		const produtos = firebase.db.collection('produtos');
		const listaProdutos = await produtos.where('status', '==', 'off').get();

		listaProdutos.forEach((produto) => console.log('Produtos off: ', produto.data()));
	};

	const produtosEletronicos = async () => {
		const produtos = firebase.db.collection('produtos');
		const listaEletronicos = await produtos.where('departamento', '==', 'Eletrônicos').get();

		listaEletronicos.forEach((produto) => console.log('Eletrônicos: ', produto.data()));
	};

	const acima50 = async () => {
		const produtos = firebase.db.collection('produtos');
		const listaAcima50 = await produtos.where('preco', '>', 50).get();

		listaAcima50.forEach((produto) => console.log('Produtos acima de 50,00: ', produto.data()));
	};

	return (
		<View>
			<Text>Users</Text>
			<Button title="Adicionar" onPress={inserirUser} />
			<Button title="Editar" onPress={editarUser} />
			<Button title="Excluir" onPress={deleteUser} />
			<TextInput placeholder="Nome do produto" onChangeText={(value) => handleInputChange('nome', value)} />
			<TextInput placeholder="Preço do produto" onChangeText={(value) => handleInputChange('preco', value)} />
			<TextInput placeholder="Departamento" onChangeText={(value) => handleInputChange('departamento', value)} />
			<TextInput placeholder="Status" onChangeText={(value) => handleInputChange('status', value)} />
			<TextInput placeholder="Fabricante" onChangeText={(value) => handleInputChange('fabricante', value)} />
			<Text>Produtos</Text>
			<Button title="Adicionar" onPress={inserirProduto} />
			<Button title="Editar" onPress={editarProduto} />
			<Button title="Excluir" onPress={deleteProduto} />
		</View>
	);
}
