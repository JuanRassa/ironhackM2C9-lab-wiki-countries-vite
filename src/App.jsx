import Navbar from './components/Navbar';
import CountryDetailsPage from './pages/CountryDetailsPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <CountryDetailsPage />
      <h1>LAB | React WikiCountries</h1>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
