import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import First from './first'
import Second from './second'
import Home from './Home';
import EditPage from './edit';

function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/edit' element={<EditPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
