import { useState } from 'react';
import Log from '../components/Log';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LogPage = () => {
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
			<Log />
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
		</div>
	);
};

export default LogPage;
