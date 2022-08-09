import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ArticlePage from './components/pages/ArticlePage';
import ArticleContainer from './containers/ArticleContainer';
import NotFound from './components/pages/NotFound';
import Search from './components/pages/Search';


const App = () => {
  return (
    <div className="App">
    <Routes>
      {/* <Route element={<ArticleListPage />} path="/" /> */}
      <Route element={<ArticleContainer />} path="/" />
      <Route path="/article/:type/:id" element={<ArticlePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </div>
  );
};

export default App;