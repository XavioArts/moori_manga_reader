import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import ComicsTest from './pages/ComicsTest';
import Demo from './pages/Demo';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/public" element={<Public/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/demo" element={<Demo/>} />
          <Route element={<RequireAuth/>} >
            <Route path="/test" element={<ComicsTest/>} />
            <Route path="/protected" element={<Protected/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
