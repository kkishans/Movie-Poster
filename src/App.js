import './App.css';
import Header from './components/header/Header';
import Details from './components/MovieData/Details';
import CastList from './components/Cast/CastList'
function App() {
  return (
    <div className="App">
      <Header/>
      <Details/>
      <CastList/>
    </div>
  );
}

export default App;
