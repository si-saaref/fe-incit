import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Homepage from './pages/homepage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Navbar from './components/navbar';
import UserContextProvider from './context/userContext';

function App() {
	return (
		<>
			<GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
				<UserContextProvider>
					<Router>
						<Navbar />
						<main>
							<Routes>
								{/*! REPORT - CR */}
								<Route path='/*' element={<Homepage />} />
								<Route path='/' element={<Homepage />} />
								<Route path='/my-profile' element={<Profile />} />
								<Route path='/dashboard' element={<Dashboard />} />
								<Route path='/sign-in' element={<SignIn />} />
								<Route path='/sign-up' element={<SignUp />} />
							</Routes>
						</main>
					</Router>
				</UserContextProvider>
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
