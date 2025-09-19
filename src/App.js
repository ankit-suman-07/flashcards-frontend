import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from "./pages/welcome";
import AuthPage from './pages/auth/auth-page';
import Homepage from './pages/home/homepage';
import CreateDeck from './pages/create-deck/create-deck';
import History from './pages/history/history';
import Collections from './pages/collections/collections';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/create" element={<CreateDeck />} />
          <Route path="/last" element={<History />} />
          <Route path="/collection" element={<Collections />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
