
import './App.css';
import Main from './components/layouts/Main';
import { BrowserRouter as  Router,Routes ,Route } from "react-router-dom";
import Table from './pages/table';
import Home from './pages/home';
import Comic from './pages/comic';
import Search from './pages/SearchResult';
function App() {


  return (
<>
<Router>

    <Main>
        <Routes>
          <Route  path='/'  element={<Home/>} />
          <Route  path='/table' element={<Table/>} />
          <Route path='/comic/:id' element={<Comic/>} />
          <Route path='/search/:name' element={<Search/>}/>
        </Routes>
    </Main>
</Router>
</>
    
  );
}

export default App;
