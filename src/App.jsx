import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Chat from './pages/Chat/Chat';
import Register from './pages/Auth/Register/Register'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

        <Route path="/messages" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;