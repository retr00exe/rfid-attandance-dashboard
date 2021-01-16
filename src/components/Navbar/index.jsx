import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../../assets/avatar.svg';

const Navbar = ({ sidebarOpen, openSidebar }) => {
	return (
		<NavbarWrapper>
			<NavbarLeft>
				<Link to="/#">RFID</Link>
				<Link to="/#">Account</Link>
				<Link to="/#">Admin</Link>
			</NavbarLeft>
			<NavbarRight>
				<Link to="/#">
					<Avatar width="30" src={avatar} alt="avatar" />
				</Link>
			</NavbarRight>
		</NavbarWrapper>
	);
};

const NavbarWrapper = styled.nav`
	background: #fff;
	grid-area: nav;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	border-bottom: 1px solid lightgray;
`;

const NavbarLeft = styled.div`
	& > a {
		margin-right: 30px;
		text-decoration: none;
		color: #a5aaad;
		font-size: 15px;
		font-weight: 700;
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const NavbarRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& > a {
		margin-left: 20px;
		text-decoration: none;
	}
	& > a > i {
		color: #a5aaad;
		font-size: 16px;
		border-radius: 50px;
		background: #fff;
		box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #fff;
		padding: 7px;
	}
`;

const Avatar = styled.img``;

export default Navbar;
