import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from "./pages/welcome";
import AuthPage from './pages/auth/auth-page';
import Homepage from './pages/home/homepage';
import AllDecks from './pages/all-decks/all-decks';
import CreateDeck from './pages/create-deck/create-deck';
import History from './pages/history/history';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/create-deck" element={<CreateDeck />} />
          <Route path="/all-decks" element={<AllDecks />} />
          <Route path="/history" element={<History />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
