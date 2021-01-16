import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import MonitorPage from './pages/monitor';
import LogPage from './pages/log';
import UserListPage from './pages/userList';

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/monitor" component={MonitorPage} />
			<Route path="/log" component={LogPage} />
			<Route path="/users" component={UserListPage} />
		</Router>
	);
};

export default App;
