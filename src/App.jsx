import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Homepage from './pages/homepage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './pages/dashboard';

function App() {
	return (
		<>
			<GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
				<Router>
					<Routes>
						{/*! REPORT - CR */}
						<Route path='/*' element={<Homepage />} />
						<Route path='/' element={<Homepage />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/sign-up' element={<SignUp />} />
					</Routes>
				</Router>
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
