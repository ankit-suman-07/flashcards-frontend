import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from "./pages/welcome";
import AuthPage from './pages/auth/auth-page';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
