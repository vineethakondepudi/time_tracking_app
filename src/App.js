import LoginForm from './Components/LoginForm';
import TaskTime from './Components/TaskTimer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import FilesUpload from './Components/FilesUpload';
import SrorageImageText from './Components/Storage_txt_img/StorageImageText'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/task" element={<ProtectedRoute element={<TaskTime />} />} />
          <Route path='/files' element={<FilesUpload/>}></Route>
          <Route path='/firebase' element={<SrorageImageText/>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;







