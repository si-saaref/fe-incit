import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import PrivateRoute from './components/privateRoute';
import UserContextProvider from './context/userContext';
import Dashboard from './pages/dashboard';
import Homepage from './pages/homepage';
import NotFound from './pages/notFound';
import Profile from './pages/profile';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import { Toaster } from 'react-hot-toast';
import VerificationEmail from './pages/verificationEmail';

function App() {
	return (
		<>
			<GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
				<UserContextProvider>
					<RouterProvider router={router} />
					<Toaster />
					{/* <Router>
						<Navbar />
						<main>
							<Routes>
								<Route element={<PrivateRoute />}>
									<Route path='/my-profile' element={<Profile />} />
									<Route path='/dashboard' element={<Dashboard />} />
								</Route>
								<Route path='/*' element={<Homepage />} />
								<Route path='/' element={<Homepage />} />
								<Route path='/sign-in' element={<SignIn />} />
								<Route path='/sign-up' element={<SignUp />} />
								<Route path='/verification' element={<VerificationEmail />} />
							</Routes>
						</main>
					</Router> */}
				</UserContextProvider>
			</GoogleOAuthProvider>
		</>
	);
}

export default App;

const router = createBrowserRouter([
	{
		path: '/sign-in',
		element: <SignIn />,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
	},
	{
		path: '/verification',
		element: <VerificationEmail />,
	},
	{
		path: '/',
		element: (
			<>
				<Navbar />
				<Homepage />
			</>
		),
	},
	{
		path: '/',
		element: <PrivateRoute />,
		errorElement: <NotFound />,
		children: [
			// {
			// 	index: true,
			// 	element: <Homepage />,
			// },
			{
				path: 'dashboard',
				element: <Dashboard />,
			},

			{
				path: 'my-profile',
				element: <Profile />,
			},
		],
	},
]);
