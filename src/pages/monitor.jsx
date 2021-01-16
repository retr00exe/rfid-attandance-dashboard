import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Monitor from '../components/Monitor';

const MonitorPage = () => {
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
			<Monitor />
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
		</div>
	);
};

export default MonitorPage;
