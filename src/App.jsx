import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsPage from './components/NewsPage';
const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />} />

                    <Route path="/news" element={<NewsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;