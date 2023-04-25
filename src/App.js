import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchStat from './SearchStat';
import ShowStat from './ShowStat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/find' element={<SearchStat/>}/>
        <Route path='/stat' element={<ShowStat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
