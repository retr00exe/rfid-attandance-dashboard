import { useState } from 'react';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
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
			<Main />
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
		</div>
	);
};

export default Home;
