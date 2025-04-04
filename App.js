import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PracticePage from './pages/PracticePage';
import RecordingTest from './pages/RecordingTest';
import AuthPage from './pages/AuthPage'; // ログインページ
import MyPage from './pages/MyPage';
import ScoreInput from './pages/ScoreInput';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router basename="/my/react/app">
      <div>
        <nav style={{ padding: "20px", backgroundColor: "#f8f9fa", marginBottom: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "20px" }}>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "#333" }}>練習ページ</Link>
            </li>
            <li>
              <Link to="/mypage" style={{ textDecoration: "none", color: "#333" }}>マイページ</Link>
            </li>
            <li>
              <Link to="/admin" style={{ textDecoration: "none", color: "#333" }}>管理者ページ</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PracticePage />} />
          <Route path="/record" element={<RecordingTest />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="score" element={<ScoreInput/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
