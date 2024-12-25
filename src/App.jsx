import { Routes, Route } from 'react-router';
import LoginScreen from './pages/login';
import RepositoryScreen from './pages/repository';

function App() {
  return (
    <div className="min-h-screen w-full antialiased">
      <Routes>
        <Route path="*" element={<LoginScreen />} />
        <Route path="/repositories" element={<RepositoryScreen />} />
      </Routes>
    </div>
  );
}

export default App;
