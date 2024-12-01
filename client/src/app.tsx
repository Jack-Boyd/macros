import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/auth-context/auth-provider';
import PublicRoute from './layouts/public-route';
import PrivateRoute from './layouts/private-route';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import Dashboard from './pages/app/dashboard/dashboard';
import ProfilePage from './pages/app/profile/profile';
import SetupPage from './pages/app/setup/setup';
import Ingredients from './pages/app/ingredients/ingredients';
import AddIngredientPage from './pages/app/ingredients/add-ingredient';

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
          <Route path="/app" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="setup" element={<SetupPage />} />
            <Route path="ingredients" element={<Ingredients />} />
            <Route path="ingredients/add" element={<AddIngredientPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;