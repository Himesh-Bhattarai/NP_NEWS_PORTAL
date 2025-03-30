
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import HomePage from './pages/HomePage';
import ReporterPage from './components/ReporterDash/ReporterPage';
import ClintPage from './components/ClintDash/ClientPage';
import AuthPortal from './components/AuthPortal';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider

function App() {
  return (
    <GoogleOAuthProvider clientId="860431053767-q5l78ifrr436ejqbva1jldups1rv98lf.apps.googleusercontent.com">
    <ThemeProvider defaultTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth-portal" element={<AuthPortal />} />
          <Route path="/reporter-dashboard" element={<ReporterPage />} />
          <Route path="/client-dashboard" element={<ClintPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </ GoogleOAuthProvider >
  );
}

export default App;