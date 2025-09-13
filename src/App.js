import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from "./pages/welcome";
import AuthPage from './pages/auth/auth-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
