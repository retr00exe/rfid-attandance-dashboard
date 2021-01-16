import React from 'react';
import styled from 'styled-components';
import MonitorJumbotron from '../../assets/monitor.svg';

const Monitor = () => {
	return (
		<Wrapper>
			<Jumbotron>
				<JumbotronTitle>
					<h1>Real Time Monitor</h1>
					<p>
						Monitor your employees real time and seamlessly from your computer.
					</p>
				</JumbotronTitle>
				<img src={MonitorJumbotron} alt="" width={350} />
			</Jumbotron>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: #f3f4f6;
	grid-area: main;
	overflow-y: auto;
`;

const Jumbotron = styled.div`
	display: flex;
	justify-content: space-around;
	height: 400px;
	background-color: #192b4a;
`;

const JumbotronTitle = styled.div`
	padding: 100px 100px;
	max-width: 400px;
	h1 {
		color: #fff;
	}
	p {
		color: #fff;
	}
`;

export default Monitor;
