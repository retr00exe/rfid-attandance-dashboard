import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import styled from 'styled-components';
import firebase from '../../utils/firebase';
import Header from './Header';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <Link>{text}</Link>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'RFID',
		dataIndex: 'rfid',
		key: 'rfid',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: (tags) => (
			<span>
				{tags.map((tag) => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<Space size="middle">
				<Link>Edit {record.name}</Link>
				<Link>Delete</Link>
			</Space>
		),
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

class UserList extends Component {
	componentDidMount() {
		const todoRef = firebase.database().ref('employee');
		todoRef.on('value', (snapshot) => {
			const todos = snapshot.val();
			console.log(todos);
			console.log(process.env);
		});
	}

	render() {
		return (
			<Wrapper>
				<Header />
				<Table columns={columns} dataSource={data} />
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	background: #f3f4f6;
	grid-area: main;
	overflow-y: auto;
	padding: 20px 35px;
	h1 {
		font-size: 24px;
		text-align: center;
	}
`;

export default UserList;
