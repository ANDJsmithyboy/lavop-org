import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BoutiquePage from './pages/BoutiquePage';
import ProgrammesPage from './pages/ProgrammesPage';
import BlogPage from './pages/BlogPage';
import TransparencePage from './pages/TransparencePage';
import ImpactPage from './pages/ImpactPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import AboutFounderPage from './pages/AboutFounderPage';
import AboutPage from './pages/AboutPage';
import ThankYouPage from './pages/ThankYouPage';
import BlogArticlePage from './pages/BlogArticlePage';
import ProtectedRoute from './components/ProtectedRoute';
import ContactRedirect from './components/ContactRedirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="boutique" element={<BoutiquePage />} />
          <Route path="programmes" element={<ProgrammesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="transparence" element={<TransparencePage />} />
          <Route path="impact" element={<ImpactPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/a-propos-fondateur" element={<AboutFounderPage />} />
        <Route path="/merci" element={<ThankYouPage />} />
        <Route path="/blog/article/:id" element={<BlogArticlePage />} />
        <Route path="/contact" element={<ContactRedirect />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;