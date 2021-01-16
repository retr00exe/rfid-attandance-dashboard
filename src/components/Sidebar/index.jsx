import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
	return (
		<SidebarWrapper>
			<SidebarTitle>
				<SidebarImg>
					<SidebarLogo src={logo} alt="logo" className="App-logo" />
				</SidebarImg>
				<i
					className="fa fa-times"
					id="sidebarIcon"
					onClick={() => closeSidebar()}
				></i>
			</SidebarTitle>
			<SidebarMenu>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<SidebarLink>
						<i className="fa fa-home"></i>
						<Link to="/">Dashboard</Link>
					</SidebarLink>
				</Link>
				<SidebarMenuTitle>RFID</SidebarMenuTitle>
				<Link to="/monitor" style={{ textDecoration: 'none' }}>
					<SidebarLink>
						<i className="fa fa-tv"></i>
						<Link to="/monitor">Monitor</Link>
					</SidebarLink>
				</Link>
				<Link to="/overview" style={{ textDecoration: 'none' }}>
					<SidebarLink>
						<i className="fa fa-pie-chart" aria-hidden="true"></i>
						<Link to="/overview">Overview</Link>
					</SidebarLink>
				</Link>
				<SidebarLink>
					<i className="fa fa-history"></i>
					<Link to="/history">Attandance History</Link>
				</SidebarLink>
				<Link to="/log" style={{ textDecoration: 'none' }}>
					<SidebarLink>
						<i className="fa fa-wrench"></i>
						<Link to="/log">Network Log</Link>
					</SidebarLink>
				</Link>
				<SidebarMenuTitle>Account</SidebarMenuTitle>
				<Link to="/users" style={{ textDecoration: 'none' }}>
					<SidebarLink>
						<i className="fa fa-users"></i>
						<Link to="/users">Users List</Link>
					</SidebarLink>
				</Link>
				<Link to="/log" style={{ textDecoration: 'none' }}>
					<SidebarLink>
						<i className="fa fa-cog"></i>
						<Link to="/manage">Add User</Link>
					</SidebarLink>
				</Link>
			</SidebarMenu>
		</SidebarWrapper>
	);
};

const SidebarWrapper = styled.div`
	background: #12192c;
	grid-area: sidebar;
	overflow: auto;
	padding: 20px;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	@media only screen and (max-width: 978px) {
		& {
			display: none;
		}
	}
`;

const SidebarTitle = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #f3f4f6;
	margin-bottom: 30px;
	& > div > img {
		width: 75px;
		object-fit: contain;
	}
	& > div > h1 {
		font-size: 15px;
		display: inline;
	}
	& > i {
		font-size: 15px;
		display: none;
	}
	@media only screen and (max-width: 978px) {
		& > i {
			display: inline;
	}
`;

const SidebarImg = styled.div`
	display: flex;
	align-items: center;
`;

const SidebarLogo = styled.img`
	width: 75px;
	object-fit: contain;
	@media (prefers-reduced-motion: no-preference) {
		& {
			animation: App-logo-spin infinite 20s linear;
		}
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const SidebarMenu = styled.div`
	& > h2 {
		color: #fff;
		font-size: 16px;
		margin-top: 15px;
		margin-bottom: 5px;
		padding: 0 10px;
		font-weight: 700;
	}
`;

const SidebarMenuTitle = styled.h2``;

const SidebarLink = styled.div`
	color: #f3f4f6;
	padding: 10px;
	border-radius: 9px;
	margin-bottom: 5px;
	&:hover {
		background: #0c5df4;
		transition: all 0.4s;
		a {
			color: #fff;
		}
	}
	& > a {
		text-decoration: none;
		color: #eee;
		font-weight: 500;
		font-size: 15px;
	}
	& > i {
		margin-right: 10px;
		font-size: 15px;
	}
`;

export default Sidebar;
