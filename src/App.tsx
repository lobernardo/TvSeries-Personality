import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChoicePage from './pages/ChoicePage';
import ResultPage from './pages/ResultPage';
import { SeriesProvider } from './context/SeriesContext';
import GlobalStyle from './styles/GlobalStyle';



function App() {
  return (
    <SeriesProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose" element={<ChoicePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </SeriesProvider>
  );
}

export default App;