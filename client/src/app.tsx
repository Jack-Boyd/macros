import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/auth-context/auth-provider';
import PublicRoute from './layouts/public-route';
import PrivateRoute from './layouts/private-route';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import ProfilePage from './pages/app/profile/profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/app"
            element={
              <PrivateRoute>
                <div>Private</div>
              </PrivateRoute>
            }
          >
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;