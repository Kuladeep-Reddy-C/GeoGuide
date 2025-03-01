import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import MapPage from './pages/MapPage';
import AttractionDetailPage from './pages/AttractionDetailPage';
import SearchPage from './pages/SearchPage';
import WeatherPage from './pages/WeatherPage';
import GeoGuideSpeechTranslator from './pages/GeoGuideSpeechTranslator'; // Import the translator component
import AskQ from './pages/AskQ';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/attraction/:id" element={<AttractionDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/translator" element={<GeoGuideSpeechTranslator />} /> {/* Add translator route */}
          <Route path="/ask-queries" element={<AskQ />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

