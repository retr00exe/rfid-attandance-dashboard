import React, { Component } from 'react';
import styled from 'styled-components';

const socket = new WebSocket('ws://192.168.100.3:4000');

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 'Hello',
		};
	}

	componentDidMount() {
		socket.onopen = (event) => {
			setTimeout(() => {
				socket.send('connection succeeded from react');
			}, 1000);
		};

		socket.onmessage = (message) => {
			console.log(message);
			this.setState({ data: message.data });
		};
	}

	render() {
		return (
			<Wrapper>
				<p>IP Adress : 192.168.100.3</p>
				<p>Server IP Adress : 192.168.100.3</p>
				<p>MAC Adress : 192.168.100.3</p>
				<p>NodeMCU status : ON</p>
				<button onclick="clearlog()">Clear Logs</button>
				<LogWindows>{this.state.data}</LogWindows>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	background: #f3f4f6;
	grid-area: main;
	overflow-y: auto;
	padding: 20px 35px;
`;

const LogWindows = styled.div`
	background-color: #fff;
	overflow: scroll;
	width: auto;
	height: 550px;
	border: solid;
	border-radius: 8px;
	margin-top: 20px;
`;

export default index;
