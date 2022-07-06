import './App.css';
import { Route, Routes } from 'react-router-dom';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Publications from './pages/Publications';
import Explore from './pages/Explore';
import StorePage from './pages/Store';
import Library from './pages/Library';
import NewComic from './pages/NewComic';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/login" element={<LogIn/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/store" element={<StorePage/>} />
          <Route element={<RequireAuth/>} >
            <Route path="/" element={<Dashboard/>} />
            <Route path="/publications" element={<Publications/>} />
            <Route path="/publications/new" element={<NewComic/>} />
            <Route path="/profile" element={<Protected/>} />
            <Route path="/library" element={<Library/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
