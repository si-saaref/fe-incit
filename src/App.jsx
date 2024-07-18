import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Homepage from './pages/homepage';

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/*! REPORT - CR */}
					<Route path='/*' element={<Homepage />} />
					<Route path='/' element={<Homepage />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
