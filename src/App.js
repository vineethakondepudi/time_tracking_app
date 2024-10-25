import LoginForm from './Components/LoginForm';
import TaskTime from './Components/TaskTimer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import FilesUpload from './Components/FilesUpload';
import SrorageImageText from './Components/Storage_txt_img/StorageImageText';
import Soket from './Components/Soket';
import Cards from './Components/cards';
import Login from './Components/Cookie/Login';
import Logout from './Components/Cookie/Logout';
import ProtectRoute from './Components/Cookie/ProtectRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          {/* <Route path="/task" element={<ProtectedRoute element={<TaskTime />} />} /> */}
          <Route path='/files' element={<FilesUpload/>}></Route>
          <Route path='/firebase' element={<SrorageImageText/>}></Route>
          {/* <Route path='/socket' element={<Soket/>}></Route> */}
          <Route path='/cards' element={<Cards/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/protect' element={<ProtectRoute/>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;






