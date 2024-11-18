import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth-context/auth-provider';
import PrivateRoute from './layouts/private-route';
import LoginPage from './pages/login/login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
              path="/app"
              element={
                <PrivateRoute>
                  <div>Private Route</div>
                </PrivateRoute>
              }
            />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;