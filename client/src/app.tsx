import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login';
import ProtectedRoute from './protected-route';
import { AuthProvider } from './auth-context';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
              path="/protected"
              element={
                <ProtectedRoute>
                  <div>Protected Route</div>
                </ProtectedRoute>
              }
            />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;