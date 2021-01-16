import { useState } from 'react';
import UserList from '../components/UserList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const UserListPage = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const openSidebar = () => {
		setSidebarOpen(true);
	};

	const closeSidebar = () => {
		setSidebarOpen(false);
	};

	return (
		<div className="container">
			<Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
			<UserList />
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
		</div>
	);
};

export default UserListPage;
