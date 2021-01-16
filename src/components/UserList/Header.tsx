import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>
				<HeaderTitleDesc>User List</HeaderTitleDesc>
				<HeaderTitleLastUpdate>Last Update 5 min ago</HeaderTitleLastUpdate>
			</HeaderTitle>
			<HeaderContent>
				<HeaderContentTitle>148</HeaderContentTitle>
				<HeaderContentDesc>Registered User</HeaderContentDesc>
			</HeaderContent>
			<HeaderContent>
				<HeaderContentTitle>5</HeaderContentTitle>
				<HeaderContentDesc>Divison</HeaderContentDesc>
			</HeaderContent>
			<HeaderContent>
				<HeaderContentTitle>2</HeaderContentTitle>
				<HeaderContentDesc>Blacklisted User</HeaderContentDesc>
			</HeaderContent>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	box-sizing: border-box;
	background-color: #fff;
	margin-bottom: 1rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: 2fr 0.5fr 0.5fr 0.5fr;
`;

const HeaderTitle = styled.div`
	display: flex;
	flex-direction: column;
`;

const HeaderTitleDesc = styled.div`
	text-align: left;
	font-size: 1.5rem;
	font-weight: 700;
`;

const HeaderTitleLastUpdate = styled.div`
	text-align: left;
`;

const HeaderContent = styled.div`
	text-align: left;
`;

const HeaderContentTitle = styled.div`
	text-align: left;
	font-size: 1.5rem;
	font-weight: 700;
`;

const HeaderContentDesc = styled.div`
	text-align: left;
`;

export default Header;
